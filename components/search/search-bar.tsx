import styles from './search-bar.module.scss';

export default function SearchBar() {
  return <input placeholder="검색할 키워드를 입력해주세요." className={styles.input} />;
}
