import Image from 'next/image';
import styles from './search-filter.module.scss';
import { Filter } from '@/types/search';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

interface SearchFilterProps {
  filter: Filter;
  register: UseFormRegister<FieldValues>;
  selected: string;
}

export default function SearchFilter({ filter, register, selected }: SearchFilterProps) {
  const isSelected = filter.value === selected;

  return (
    <label
      className={classNames(styles.label, {
        [styles.selected]: isSelected,
      })}
    >
      <input className={styles.input} type="radio" value={filter.value} {...register('filter')} />
      <Image src={isSelected ? filter.imageOn : filter.imageOff} alt={`${filter.name} 필터`} width={20} height={20} />
      <p className={styles.filterName}>{filter.name}</p>
    </label>
  );
}
