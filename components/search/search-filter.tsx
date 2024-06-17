import Image from 'next/image';
import styles from './search-filter.module.scss';
import { Filter } from '@/types/search';

interface SearchFilterProps {
  filter: Filter;
}

export default function SearchFilter({ filter }: SearchFilterProps) {
  return (
    <label className={styles.label}>
      <input className={styles.input} type="radio" value={filter.name} />
      <Image src={filter.image} alt={`${filter.name} 필터`} width={20} height={20} />
      <p className={styles.filterName}>{filter.name}</p>
    </label>
  );
}
