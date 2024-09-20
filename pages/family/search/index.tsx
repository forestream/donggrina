import { useEffect, useState } from 'react';
import styles from './search.module.scss';
import SearchForm from '@/components/search/search-form';
import { DiaryByQueries, GrowthByQueries, TodoByQueries } from '@/apis/search/index.type';
import Content from '@/components/diaries/diary-content/content';
import Response from '@/components/diaries/diary-content/response';
import Kebab from '@/components/diaries/diary-content/kebab';
import ContentImage from '@/components/diaries/diary-content/content-image';
import Profile from '@/components/diaries/diary-content/profile';
import { FieldValues, useForm } from 'react-hook-form';
import CalendarTodo from '@/components/calendar-monthly/calendar-todo';
import GrowthList from '@/components/growth/list';
import Radio from '@/components/common/radio/radio';

export default function Search() {
  const [results, setResults] = useState<TodoByQueries[] | DiaryByQueries[] | GrowthByQueries[]>([]);
  const [resultType, setResultType] = useState('calendar');

  const handleResults = (newResults: TodoByQueries[] | DiaryByQueries[] | GrowthByQueries[]) =>
    setResults(() => newResults);

  const { watch, control } = useForm<FieldValues>({
    defaultValues: {
      filter: 'calendar',
    },
  });

  useEffect(() => {
    handleResults([]);
    setResultType(watch('filter'));
  }, [watch('filter')]);

  return (
    <main className={styles.outer}>
      <SearchForm service={watch('filter')} onSubmit={handleResults}>
        <div className={styles.filters}>
          <Radio
            control={control}
            name="filter"
            options={[
              { value: 'calendar', text: '일정기록', id: '일정기록' },
              { value: 'diary', text: '다이어리', id: '다이어리' },
              { value: 'growth', text: '성장기록', id: '성장기록' },
            ]}
          />
        </div>
      </SearchForm>

      {resultType === 'calendar' &&
        (results as TodoByQueries[]).map((result) => <CalendarTodo key={result.id} todo={result} />)}

      {resultType === 'diary' &&
        (results as DiaryByQueries[]).map((result) => (
          <div key={result.diaryId} className={styles.diaryContent}>
            <div className={styles.leftContainer}>
              <Profile author={result.author} authorImage={result.authorImage} petImages={result.petImages || []} />
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

      {resultType === 'growth' &&
        (results as GrowthByQueries[]).map((result) => (
          <div key={result.id} className={styles.listContainer}>
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
