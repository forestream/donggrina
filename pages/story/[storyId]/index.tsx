import StoryDetailHeader from '@/components/story/detail/header/story-detail-header';
import StoryDetailPost from '@/components/story/detail/story-detail-post';
import Suspensive from '@/components/suspensive/suspensive';

import { useFetchDetailStory } from '@/hooks/queries/story';
import { useRouter } from 'next/router';
import React from 'react';

export default function StoryDetailPage() {
  const router = useRouter();
  const storyId = +router.query.storyId!;
  const detailQuery = useFetchDetailStory(storyId);

  return (
    <div style={{ padding: '54px 24px 0px 24px' }}>
      <StoryDetailHeader isMyStory={detailQuery.data?.isMyStory} />
      <Suspensive isLoading={detailQuery.isLoading}>
        <StoryDetailPost />
      </Suspensive>
    </div>
  );
}
