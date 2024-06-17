import SearchBar from '@/components/search/search-bar';
import styles from './search.module.scss';
import PetRadio from '@/components/calendar-monthly/pet-radio';
import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';
import { useForm } from 'react-hook-form';
import { FILTERS } from '@/utils/constants/search';
import SearchFilter from '@/components/search/search-filter';
import useMembersQuery from '@/hooks/queries/search/use-members-query';
import CalendarTodoProfile from '@/components/calendar-monthly/calendar-todo-profile';

export default function Search() {
  const pets = usePetsQuery();
  const membersQuery = useMembersQuery();
  const { register } = useForm();

  if (membersQuery.isPending) return <p>loading</p>;
  if (membersQuery.isError) return <p>Error: {membersQuery.error.message}</p>;

  return (
    <main className={styles.outer}>
      <div className={styles.inner}>
        <SearchBar />

        <div className={styles.section}>
          <p>필터</p>
          <div className={styles.filters}>
            {FILTERS.map((filter) => (
              <SearchFilter key={filter.name} filter={filter} />
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <p>반려동물</p>
          <div className={styles.pets}>
            {pets.data.map((pet) => (
              <PetRadio register={register} petImage={pet.imageUrl} petName={pet.name} key={pet.petId} />
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <p>작성자 필터</p>
          <div className={styles.members}>
            {membersQuery.data.members.map((member) => (
              <div className={styles.member}>
                <CalendarTodoProfile name={member.name} src={member.profileImageUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
