import { useState } from 'react';
import styles from './search.module.scss';
import SearchForm from '@/components/search/search-form';
import { DiaryByQueries } from '@/api/search/index.type';

export default function Search() {
  const [results, setResults] = useState<DiaryByQueries[]>([]);

  const handleResults = (newResults: DiaryByQueries[]) => setResults(() => newResults);

  return (
    <main className={styles.outer}>
      <SearchForm service="diary" onSubmit={handleResults} />
      {results.map((result) => (
        <div>{result.content}</div>
      ))}
    </main>
  );
}
