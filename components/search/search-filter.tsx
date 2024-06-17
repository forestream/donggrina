import Image from 'next/image';
import styles from './search-filter.module.scss';
import { Filter } from '@/types/search';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface SearchFilterProps {
  filter: Filter;
  register: UseFormRegister<FieldValues>;
}

export default function SearchFilter({ filter, register }: SearchFilterProps) {
  return (
    <label className={styles.label}>
      <input className={styles.input} type="radio" value={filter.name} {...register('service')} />
      <Image src={filter.image} alt={`${filter.name} 필터`} width={20} height={20} />
      <p className={styles.filterName}>{filter.name}</p>
    </label>
  );
}
