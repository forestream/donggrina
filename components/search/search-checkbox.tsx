import Image from 'next/image';
import styles from './search-checkbox.module.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface SearchCheckboxProps {
  register: UseFormRegister<FieldValues>;
  selected: string[];
  name: string;
  value: string;
}

export default function SearchCheckbox({ register, selected, name, value }: SearchCheckboxProps) {
  const isSelected = selected.includes(value);

  return (
    <label className={styles.label}>
      <div className={styles.imageContainer}>
        <input
          {...register(name, { validate: (selected: string) => !!selected || '* 항목을 선택해주세요.' })}
          value={value}
          className={styles.input}
          type="checkbox"
          checked={isSelected}
        />
        <Image src="/images/search/check.svg" alt="체크 표시" width={8} height={6} className={styles.check} />
      </div>
      <p className={styles.value}>{value}</p>
    </label>
  );
}
