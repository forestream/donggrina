import styles from './diary-content.module.scss';
import Profile from '../diary-content/profile';
import Content from '../diary-content/content';
import Response from '../diary-content/response';
import Kebab from '../diary-content/kebab';
import ContentImage from '../diary-content/content-image';
import { useDiaries } from '@/hooks/queries/diary/use-diary-query';

interface DiaryContentProps {
  date: string;
}

const DiaryContent: React.FC<DiaryContentProps> = ({ date }) => {
  const { data, isError, isLoading } = useDiaries(date);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data || data.length === 0) return <></>;

  return (
    <div>
      {data?.map((diary) => (
        <div key={diary.diaryId} className={styles.diaryContent}>
          <div className={styles.leftContainer}>
            <Profile author={diary.author} authorImage={diary.authorImage} petImages={diary.petImages} />
            <Content content={diary.content} />
            <Response
              commentCount={diary.commentCount}
              favoriteCount={diary.favoriteCount}
              favoriteState={diary.favoriteState}
            />
          </div>
          <div className={styles.rightContainer}>
            {diary.isMyDiary && <Kebab diaryId={diary.diaryId} />}
            <ContentImage contentImage={diary.contentImage} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiaryContent;
