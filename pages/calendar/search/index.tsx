import SearchBar from '@/components/search/search-bar';
import styles from './search.module.scss';
import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FILTERS } from '@/utils/constants/search';
import SearchFilter from '@/components/search/search-filter';
import useMembersQuery from '@/hooks/queries/search/use-members-query';
import SearchMemberFilter from '@/components/search/search-member-filter';
import SearchSection from '@/components/search/search-section';
import SearchPetCheckbox from '@/components/search/search-pet-checkbox';
import { useRouter } from 'next/router';
import getQueryString from '@/utils/search/get-query-string';

export default function Search() {
  const router = useRouter();
  const isGlobalSearch = router.pathname === '/family/search';

  const petsQuery = usePetsQuery();
  const membersQuery = useMembersQuery();
  const { register, handleSubmit, watch, setValue, getValues, resetField } = useForm<FieldValues>({
    defaultValues: {
      keyword: '',
      filter: '',
      pets: [],
      members: [],
    },
  });

  const ALL_SELECTED: { [key: string]: string[] } = {
    pets: petsQuery.data.map((pet) => pet.name),
    members: membersQuery.data.members.map((member) => member.nickname),
  };

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    const keyword = getQueryString('keyword', [formData.keyword]);
    const petNames = getQueryString('petNames', formData.pets);
    const writerNames = getQueryString('writerNames', formData.members);

    router.push(`/calendar/search/results?${keyword}&${petNames}&${writerNames}`);
  };

  const handleClickAll = (fieldName: string) => {
    if (getValues(fieldName).length === ALL_SELECTED[fieldName].length) {
      resetField(fieldName);
      return;
    }
    setValue(fieldName, ALL_SELECTED[fieldName]);
  };

  console.log(membersQuery.data);

  if (membersQuery.isPending || petsQuery.isPending) return <p>loading</p>;
  if (membersQuery.isError) return <p>Error: {membersQuery.error.message}</p>;
  if (petsQuery.isError) return <p>Error: {petsQuery.error.message}</p>;

  return (
    <main className={styles.outer}>
      <form className={styles.inner} onSubmit={handleSubmit(onSubmit)}>
        <SearchBar register={register} />

        {isGlobalSearch && (
          <SearchSection title="필터">
            <div className={styles.filters}>
              {FILTERS.map((filter) => (
                <SearchFilter key={filter.name} filter={filter} register={register} selected={watch('filter')} />
              ))}
            </div>
          </SearchSection>
        )}

        <SearchSection selectAll={handleClickAll.bind(null, 'pets')} title="반려동물">
          <div className={styles.pets}>
            {petsQuery.data.map((pet) => (
              <SearchPetCheckbox
                register={register}
                petImage={pet.imageUrl}
                petName={pet.name}
                selected={watch('pets')}
                key={pet.petId}
              />
            ))}
          </div>
        </SearchSection>

        <SearchSection selectAll={handleClickAll.bind(null, 'members')} title="작성자 필터">
          <div className={styles.members}>
            {membersQuery.data.members.map((member) => (
              <SearchMemberFilter key={member.id} member={member} register={register} selected={watch('members')} />
            ))}
          </div>
        </SearchSection>
      </form>
    </main>
  );
}
