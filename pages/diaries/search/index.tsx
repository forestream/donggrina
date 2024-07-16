import { useState } from 'react';
import styles from './search.module.scss';
import SearchForm from '@/components/search/search-form';
import { DiaryByQueries } from '@/apis/search/index.type';
import Content from '@/components/diaries/diary-content/content';
import Response from '@/components/diaries/diary-content/response';
import Kebab from '@/components/diaries/diary-content/kebab';
import ContentImage from '@/components/diaries/diary-content/content-image';
import Profile from '@/components/diaries/diary-content/profile';

export default function Search() {
  const [results, setResults] = useState<DiaryByQueries[]>([]);

  const handleResults = (newResults: DiaryByQueries[]) => setResults(() => newResults);

  return (
    <main className={styles.outer}>
      <SearchForm service="diary" onSubmit={handleResults} />

      {results.map((result) => (
        <div key={result.diaryId} className={styles.diaryContent}>
          <div className={styles.leftContainer}>
            <Profile author={result.author} authorImage={result.authorImage} petImages={result.petImages} />
            <Content content={result.content} />
            <Response
              commentCount={result.commentCount}
              favoriteCount={result.favoriteCount}
              favoriteState={result.favoriteState}
            />
          </div>
          <div className={styles.rightContainer}>
            {result.isMyDiary && <Kebab diaryId={result.diaryId} />}
            <ContentImage contentImage={result.contentImage || ''} />
          </div>
        </div>
      ))}
    </main>
  );
}
