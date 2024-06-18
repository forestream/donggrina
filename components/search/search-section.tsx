import { PropsWithChildren } from 'react';
import styles from './search-section.module.scss';

interface SearchSectionProps {
  title: string;
  canSelectAll?: boolean;
}

export default function SearchSection({
  children,
  title,
  canSelectAll = false,
}: PropsWithChildren<SearchSectionProps>) {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <p>{title}</p>
        {canSelectAll && <p className={styles.selectAll}>전체 선택</p>}
      </div>
      {children}
    </div>
  );
}
