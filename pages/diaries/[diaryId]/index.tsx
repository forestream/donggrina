import DiaryDetailPost from '@/components/diaries/detail/diary-detail-post';
import DiaryDetailHeader from '@/components/diaries/detail/header/diary-detail-header';
import Suspensive from '@/components/suspensive/suspensive';
import { useDiaryQuery } from '@/hooks/queries/diary/use-diary-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';

export default function StoryDetailPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const diaryId = +props.diaryId;
  const detailQuery = useDiaryQuery(String(diaryId));

  return (
    <div style={{ padding: '54px 24px 0px 24px' }}>
      <DiaryDetailHeader isMyStory={detailQuery.data?.isMyDiary} />
      <Suspensive isLoading={detailQuery.isLoading}>
        <DiaryDetailPost diaryId={diaryId} />
      </Suspensive>
    </div>
  );
}

export const getServerSideProps = (async ({ query }) => {
  const diaryId = query.diaryId;
  if (!diaryId) return { notFound: true };

  return {
    props: {
      diaryId,
    },
  };
}) satisfies GetServerSideProps;
