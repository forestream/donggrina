import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import styles from './diary-id.module.scss';
import { useDiaryQuery } from '@/hooks/queries/diary/use-diary-query';
import Profile from '@/components/diaries/diary-content/profile';
import { WEATHER_TYPES } from '@/lib/constants/diaries-constants';
import Image from 'next/image';
import Response from '@/components/diaries/diary-content/response';
import useCommentPostMutation from '@/hooks/queries/diary/use-comment-post-mutation';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';
import DiaryComment from '@/components/diaries/diary-content/comment/diary-comment';
import DiaryCommentForm from '@/components/diaries/diary-content/comment/diary-comment-form';
import useDiaryMutation from '@/hooks/queries/diary/use-diary-mutation';
import { useRouter } from 'next/router';
import disintegrateDateTime from '@/utils/disintegrate-date-time';

export async function getServerSideProps(context: GetServerSidePropsContext & { params: { diaryId: string } }) {
  const { diaryId } = context.params;
  return { props: { diaryId } };
}

export default function DiaryById({ diaryId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const diaryQuery = useDiaryQuery(diaryId);
  const commentMutation = useCommentPostMutation(diaryId);
  const diaryMutation = useDiaryMutation(diaryId);

  const handleDeleteDiary = () => diaryMutation.mutate(undefined, { onSuccess: () => router.push('/diaries') });

  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  const weatherIcon = diaryQuery.data && WEATHER_TYPES.find((weather) => weather.label === diaryQuery.data.weather);

  const { year, month, date, day } = disintegrateDateTime(diaryQuery.data && diaryQuery.data.date);

  if (diaryQuery.isPending) return <p>loading</p>;
  if (diaryQuery.isError) return <p>Error: {diaryQuery.error.message}</p>;

  return (
    <main className={styles.outer}>
      <div className={styles.inner}>
        <section className={styles.dateKebab}>
          <p className={styles.date}>
            <span>
              {year}년 {month}월 {date}일 {day}
            </span>
          </p>
          {diaryQuery.data.isMyDiary && (
            <div className={styles.kebab}>
              <DropdownMenu value={{ isOpen, onCloseToggle, onOpenToggle }}>
                <DropdownMenu.Kebab />
                <DropdownMenu.Content>
                  <DropdownMenu.Item onClick={() => {}}>수정</DropdownMenu.Item>
                  <DropdownMenu.Item onClick={handleDeleteDiary}>삭제</DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </div>
          )}
        </section>
        <section className={styles.profiles}>
          <Profile
            author={diaryQuery.data.author}
            authorImage={diaryQuery.data.authorImage}
            petImages={diaryQuery.data.petImages}
          />
          <Image src={weatherIcon!.selectedIcon} alt={weatherIcon!.label} width={24} height={24} />
        </section>
        <section className={styles.content}>{diaryQuery.data.content}</section>
        <Response
          commentCount={diaryQuery.data.comments.length}
          favoriteCount={diaryQuery.data.favoriteCount}
          favoriteState={diaryQuery.data.favoriteState}
        />

        <div className={styles.line}></div>

        <div>
          {diaryQuery.data.comments.map((comment) => (
            <DiaryComment key={comment.commentId} comment={comment} diaryId={diaryId} />
          ))}
        </div>
      </div>

      <DiaryCommentForm mutateFn={commentMutation.mutate} placeholder="댓글 입력..." />
    </main>
  );
}
