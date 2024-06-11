import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import styles from './diary-content.module.scss';
import Kebab from '@/public/images/diaries/more-horizontal.svg';
import Profile from '../diary-content/profile';
import Content from '../diary-content/content';
import Response from '../diary-content/response';
import ContentImage from '../diary-content/content-image';
import { MOCK_DATA } from '../mock-data';

const fetchDiaries = async () => {
  return Promise.resolve(MOCK_DATA);
};

const DiaryContent = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['diaries'],
    queryFn: fetchDiaries,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading diaries!</p>;

  return (
    <>
      <div>
        {data.map((diary) => (
          <div key={diary.diaryId} className={styles.diaryContent}>
            <div className={styles.leftContainer}>
              <Profile author={diary.author} />
              <Content content={diary.content} />
              <Response commentCount={diary.commentCount} favoriteCount={diary.favoriteCount} />
            </div>
            <div className={styles.rightContainer}>
              <Kebab />
              <ContentImage />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DiaryContent;
