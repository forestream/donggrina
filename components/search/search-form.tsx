import SearchBar from '@/components/search/search-bar';
import styles from './search-form.module.scss';
import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FILTERS, SERVICE_CONFIGS } from '@/utils/constants/search';
import SearchFilter from '@/components/search/search-filter';
import useMembersQuery from '@/hooks/queries/search/use-members-query';
import SearchMemberFilter from '@/components/search/search-member-filter';
import SearchSection from '@/components/search/search-section';
import SearchPetCheckbox from '@/components/search/search-pet-checkbox';
import getQueryString from '@/utils/search/get-query-string';
import { useRouter } from 'next/router';
import { SearchFormProps } from '@/types/search';

export default function SearchForm({ service }: SearchFormProps) {
  const router = useRouter();

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

  const ALL_SELECTED: { [key: string]: (string | number)[] } = {
    pets: petsQuery.data.map((pet) => (service === 'diary' ? pet.petId : pet.name)),
    members: membersQuery.data.members.map((member) => member.nickname),
  };

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    const keyword = getQueryString(SERVICE_CONFIGS[service].queries[0], [formData.keyword]);
    const petNames = getQueryString(SERVICE_CONFIGS[service].queries[1], formData.pets);
    const writerNames = getQueryString(SERVICE_CONFIGS[service].queries[2], formData.members);
    const date = getQueryString(SERVICE_CONFIGS['diary'].queries[3], []);

    router.push(
      `${SERVICE_CONFIGS[service].path}?${keyword}&${petNames}&${writerNames}` +
        (service === 'diary' ? `&${date}` : ''),
    );
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
    <main className={styles.outer}>
      <form className={styles.inner} onSubmit={handleSubmit(onSubmit)}>
        <SearchBar register={register} />

        {SERVICE_CONFIGS[service].isGlobalSearch && (
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
                service={service}
                pet={pet}
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
