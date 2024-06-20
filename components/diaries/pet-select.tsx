import { PropsWithChildren } from 'react';
import styles from './pet-select.module.scss';

interface SearchSectionProps {
  title: string;
  selectAll?: () => void;
}

export default function PetSelect({ children, title, selectAll }: PropsWithChildren<SearchSectionProps>) {
  const handleClick = () => {
    selectAll && selectAll();
  };

  return (
    <div className={styles.section}>
      <div className={styles.selectContainer}>
        <p className={styles.title}>{title}</p>
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
