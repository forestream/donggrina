import SearchBar from '@/components/search/search-bar';
import styles from './search-form.module.scss';
import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { SERVICE_CONFIGS } from '@/utils/constants/search';
import useMembersQuery from '@/hooks/queries/search/use-members-query';
import SearchSection from '@/components/search/search-section';
import getQueryString from '@/utils/search/get-query-string';
import { SearchFormProps } from '@/types/search';
import useResultsQuery from '@/hooks/queries/search/use-results-query';
import { PropsWithChildren, useEffect, useState } from 'react';
import { DiaryByQueries, GrowthByQueries, TodoByQueries } from '@/apis/search/index.type';
import SearchCheckbox from './search-checkbox';

export default function SearchForm({ service, onSubmit: handleResults, children }: PropsWithChildren<SearchFormProps>) {
  const [searchParams, setSearchParams] = useState('');

  const resultsQuery = useResultsQuery(
    SERVICE_CONFIGS[service].get as (
      searchParams: string,
    ) => Promise<TodoByQueries[] & DiaryByQueries[] & GrowthByQueries[]>,
    searchParams,
  );
  const petsQuery = usePetsQuery();
  const membersQuery = useMembersQuery();

  useEffect(() => {
    resultsQuery.refetch();
  }, [searchParams]);

  useEffect(() => {
    resultsQuery.data && handleResults(resultsQuery.data);
  }, [resultsQuery.data]);

  const { register, handleSubmit, watch, setValue, getValues, resetField } = useForm<FieldValues>({
    defaultValues: {
      keyword: '',
      filter: '',
      pets: [],
      members: [],
    },
  });

  const ALL_SELECTED: { [key: string]: (string | number)[] } = {
    pets: petsQuery.data.map((pet) => pet.name),
    members: membersQuery.data.members.map((member) => member.nickname),
  };

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    const keyword = getQueryString(SERVICE_CONFIGS[service].queries[0], [formData.keyword]);
    const petNames = getQueryString(SERVICE_CONFIGS[service].queries[1], formData.pets);
    const writerNames = getQueryString(SERVICE_CONFIGS[service].queries[2], formData.members);
    const date = getQueryString(SERVICE_CONFIGS['diary'].queries[3], ['']);

    setSearchParams(`?${keyword}&${petNames}&${writerNames}` + (service === 'diary' ? `&${date}` : ''));
  };

  const handleClickAll = (fieldName: string) => {
    if (getValues(fieldName).length === ALL_SELECTED[fieldName].length) {
      resetField(fieldName);
      return;
    }
    setValue(fieldName, ALL_SELECTED[fieldName]);
  };

  if (membersQuery.isPending || petsQuery.isPending) return <p>loading</p>;
  if (membersQuery.isError) return <p>Error: {membersQuery.error.message}</p>;
  if (petsQuery.isError) return <p>Error: {petsQuery.error.message}</p>;

  return (
    <form className={styles.inner} onSubmit={handleSubmit(onSubmit)}>
      <SearchBar register={register} />

      {children}

      <SearchSection selectAll={handleClickAll.bind(null, 'pets')} title="반려동물">
        <div className={styles.pets}>
          {petsQuery.data.map((pet) => (
            <SearchCheckbox register={register} name="pets" value={pet.name} selected={watch('pets')} key={pet.petId} />
          ))}
        </div>
      </SearchSection>

      <SearchSection selectAll={handleClickAll.bind(null, 'members')} title="작성자">
        <div className={styles.members}>
          {membersQuery.data.members.map((member) => (
            <SearchCheckbox
              key={member.id}
              name="members"
              value={member.nickname}
              register={register}
              selected={watch('members')}
            />
          ))}
        </div>
      </SearchSection>
    </form>
  );
}
