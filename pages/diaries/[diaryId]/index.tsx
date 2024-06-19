import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import styles from './diary-id.module.scss';
import { useDiaryQuery } from '@/hooks/queries/diary/use-diary-query';
import Profile from '@/components/diaries/diary-content/profile';
import { WEATHER_TYPES } from '@/lib/constants/diaries-constants';
import Image from 'next/image';
import Response from '@/components/diaries/diary-content/response';
import CalendarTodoProfile from '@/components/calendar-monthly/calendar-todo-profile';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export async function getServerSideProps(context: GetServerSidePropsContext & { params: { diaryId: string } }) {
  const { diaryId } = context.params;
  return { props: { diaryId } };
}

export default function DiaryById({ diaryId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const diaryQuery = useDiaryQuery(diaryId);

  const { register, handleSubmit } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (comment) => {
    console.log(comment);
  };

  if (diaryQuery.isPending) return <p>loading</p>;
  if (diaryQuery.isError) return <p>Error: {diaryQuery.error.message}</p>;

  const weatherIcon = WEATHER_TYPES.find((weather) => weather.label === diaryQuery.data.weather);

  return (
    <main className={styles.outer}>
      <section className={styles.profiles}>
        <Profile
          author={diaryQuery.data?.author}
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

      {diaryQuery.data.comments.map((comment) => (
        <div key={comment.commentId}>
          <CalendarTodoProfile name={comment.commentAuthor} src={comment.commentAuthorImage} />
          <p>{comment.date}</p>
          <p>{comment.comment}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('comment')} type="text" />
        <button>
          <Image src="/images/diaries/post-comment-off.svg" alt="댓글 등록 버튼" width={24} height={24} />
        </button>
      </form>
    </main>
  );
}
