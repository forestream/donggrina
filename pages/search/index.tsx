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

export default function Search() {
  const pets = usePetsQuery();
  const membersQuery = useMembersQuery();
  const { register, handleSubmit, watch, setValue, getValues, resetField } = useForm<FieldValues>({
    defaultValues: {
      keyword: '',
      filter: '',
      petName: [],
      member: [],
    },
  });

  const ALL_SELECTED: { [key: string]: string[] } = {
    petName: pets.data.map((pet) => pet.name),
    member: membersQuery.data.members.map((member) => member.name),
  };

  const onSubmit: SubmitHandler<FieldValues> = (e) => {
    console.log(e);
  };

  const handleClickAll = (fieldName: string) => {
    if (getValues(fieldName).length === ALL_SELECTED[fieldName].length) {
      resetField(fieldName);
      return;
    }
    setValue(fieldName, ALL_SELECTED[fieldName]);
  };

  if (membersQuery.isPending) return <p>loading</p>;
  if (membersQuery.isError) return <p>Error: {membersQuery.error.message}</p>;

  return (
    <main className={styles.outer}>
      <form className={styles.inner} onSubmit={handleSubmit(onSubmit)}>
        <SearchBar register={register} />

        <SearchSection title="필터">
          <div className={styles.filters}>
            {FILTERS.map((filter) => (
              <SearchFilter key={filter.name} filter={filter} register={register} selected={watch('filter')} />
            ))}
          </div>
        </SearchSection>

        <SearchSection selectAll={handleClickAll.bind(null, 'petName')} title="반려동물">
          <div className={styles.pets}>
            {pets.data.map((pet) => (
              <SearchPetCheckbox
                register={register}
                petImage={pet.imageUrl}
                petName={pet.name}
                selected={watch('petName')}
                key={pet.petId}
              />
            ))}
          </div>
        </SearchSection>

        <SearchSection selectAll={handleClickAll.bind(null, 'member')} title="작성자 필터">
          <div className={styles.members}>
            {membersQuery.data.members.map((member) => (
              <SearchMemberFilter key={member.id} member={member} register={register} selected={watch('member')} />
            ))}
          </div>
        </SearchSection>
      </form>
    </main>
  );
}
