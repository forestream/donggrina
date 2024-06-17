import SearchBar from '@/components/search/search-bar';
import styles from './search.module.scss';
import PetRadio from '@/components/calendar-monthly/pet-radio';
import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';
import { useForm } from 'react-hook-form';
import { FILTERS } from '@/utils/constants/search';
import SearchFilter from '@/components/search/search-filter';

export default function Search() {
  const pets = usePetsQuery();
  const { register } = useForm();

  return (
    <main className={styles.outer}>
      <div className={styles.inner}>
        <SearchBar />
        <div className={styles.section}>
          <p>필터</p>
          <div className={styles.filters}>
            {FILTERS.map((filter) => (
              <SearchFilter filter={filter} />
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
        </div>
      </div>
    </main>
  );
}
