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
      <div onClick={handleClick} className={styles.title}>
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
}
