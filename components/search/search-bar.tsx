import Image from 'next/image';
import styles from './search-bar.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input placeholder="검색할 키워드를 입력해주세요." className={styles.input} />
      <button className={styles.submit}>
        <Image src="/images/search/search.svg" alt="검색하기" width={20} height={20} />
      </button>
    </div>
  );
}
