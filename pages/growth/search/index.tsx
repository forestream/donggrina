import { useState } from 'react';
import styles from './search.module.scss';
import SearchForm from '@/components/search/search-form';
import { GrowthByQueries } from '@/apis/search/index.type';
import GrowthList from '@/components/growth/list';

export default function Search() {
  const [results, setResults] = useState<GrowthByQueries[]>([]);

  const handleResults = (newResults: GrowthByQueries[]) => setResults(() => newResults);

  return (
    <main className={styles.outer}>
      <SearchForm service="growth" onSubmit={handleResults} />
      {results.map((result) => (
        <div className={styles.listContainer}>
          <GrowthList
            category={result.category}
            isMine={result.isMine}
            nickname={result.nickname}
            petImage={result.petProfileImageUrl}
            petName={result.petName}
            text={result.content}
            writerImage={result.writerProfileImageUrl}
            id={result.id}
          />
        </div>
      ))}
    </main>
  );
}
