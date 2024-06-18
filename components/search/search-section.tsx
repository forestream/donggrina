import { PropsWithChildren } from 'react';
import styles from './search-section.module.scss';

interface SearchSectionProps {
  title: string;
  selectAll?: () => void;
}

export default function SearchSection({ children, title, selectAll }: PropsWithChildren<SearchSectionProps>) {
  const handleClick = () => {
    selectAll && selectAll();
  };

  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <p>{title}</p>
        {selectAll && (
          <p onClick={handleClick} className={styles.selectAll}>
            전체 선택
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
