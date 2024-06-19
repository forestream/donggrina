import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import styles from './diary-id.module.scss';
import { useDiaryQuery } from '@/hooks/queries/diary/use-diary-query';
import Profile from '@/components/diaries/diary-content/profile';
import { WEATHER_TYPES } from '@/lib/constants/diaries-constants';
import Image from 'next/image';
import Response from '@/components/diaries/diary-content/response';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useCommentMutation from '@/hooks/queries/diary/use-comment-mutation';
import DiaryComment from '@/components/diaries/diary-content/comment';

export async function getServerSideProps(context: GetServerSidePropsContext & { params: { diaryId: string } }) {
  const { diaryId } = context.params;
  return { props: { diaryId } };
}

export default function DiaryById({ diaryId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const diaryQuery = useDiaryQuery(diaryId);
  const commentMutation = useCommentMutation(diaryId);

  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    commentMutation.mutate(formData.comment, {
      onSuccess: () => reset(),
    });
  };

  const weatherIcon = diaryQuery.data && WEATHER_TYPES.find((weather) => weather.label === diaryQuery.data.weather);

  if (diaryQuery.isPending) return <p>loading</p>;
  if (diaryQuery.isError) return <p>Error: {diaryQuery.error.message}</p>;

  return (
    <main className={styles.outer}>
      <div className={styles.inner}>
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

        <div>
          {diaryQuery.data.comments.map((comment) => (
            <DiaryComment comment={comment} />
          ))}
        </div>
      </div>

      <form className={styles.commentForm} onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.commentInput} {...register('comment')} type="text" placeholder="댓글 입력..." />
        <button className={styles.commentButton}>
          <Image src="/images/diaries/post-comment-off.svg" alt="댓글 등록 버튼" width={24} height={24} />
        </button>
      </form>
    </main>
  );
}
