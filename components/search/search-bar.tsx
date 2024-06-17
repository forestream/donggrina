import Image from 'next/image';
import styles from './search-bar.module.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface SearchBarProps {
  register: UseFormRegister<FieldValues>;
}

export default function SearchBar({ register }: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
      <input placeholder="검색할 키워드를 입력해주세요." className={styles.input} {...register('keyword')} />
      <button className={styles.submit}>
        <Image src="/images/search/search.svg" alt="검색하기" width={20} height={20} />
      </button>
    </div>
  );
}
