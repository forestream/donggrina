import StoryDetailHeader from '@/components/story/detail/header/story-detail-header';
import StoryDetailPost from '@/components/story/detail/story-detail-post';
import Suspensive from '@/components/suspensive/suspensive';
import StoryListItemSkeleton from '@/components/skeleton/story/item/story-list-item-skeleton';

import { useFetchDetailStory } from '@/hooks/queries/story';
import React from 'react';
import StoryCommentListSkeleton from '@/components/skeleton/story/comment/list/story-comment-list-skeleton';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export default function StoryDetailPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const storyId = +props.storyId!;
  const detailQuery = useFetchDetailStory(storyId);

  return (
    <div style={{ padding: '54px 24px 0px 24px' }}>
      <StoryDetailHeader isMyStory={detailQuery.data?.isMyStory} storyId={storyId} />
      <Suspensive
        isLoading={detailQuery.isLoading}
        fallback={
          <>
            <StoryListItemSkeleton />
            <StoryCommentListSkeleton />
          </>
        }
      >
        <StoryDetailPost storyId={storyId} />
      </Suspensive>
    </div>
  );
}

export const getServerSideProps = (async ({ query }) => {
  const storyId = query.storyId;
  if (!storyId) return { notFound: true };

  return {
    props: {
      storyId,
    },
  };
}) satisfies GetServerSideProps;
