import React, { useState } from 'react';
import StoryItemHeader from '@/components/story/item/story-item-header';
import { useRouter } from 'next/router';
import { useFetchDetailStory } from '@/hooks/queries/story';
import StoryItemInfo from '@/components/story/item/story-item-info';
import StoryItemSwiper from '@/components/story/item/story-item-swiper';
import StoryDetailComments from '@/components/story/detail/story-detail-comments';
import StoryDetailAddComment from '@/components/story/detail/story-detail-add-comment';

export default function StoryDetailPost() {
  const router = useRouter();
  const storyId = +router.query.storyId!;
  const detailQuery = useFetchDetailStory(storyId);

  const [replyId, setReplyId] = useState<number | null>(0);

  const handleReplyClick = (id: number) => setReplyId(id);
  const handleReplyReset = () => setReplyId(null);

  return (
    <>
      <StoryItemHeader
        content={detailQuery.data!.content}
        author={detailQuery.data!.author}
        authorImage={detailQuery.data!.authorImage}
        weather={detailQuery.data!.weather}
        petImages={detailQuery.data!.petImages}
      />
      {detailQuery.data!.images.length !== 0 && <StoryItemSwiper images={detailQuery.data!.images} />}
      <StoryItemInfo
        storyId={storyId}
        favoriteState={detailQuery.data!.favoriteState}
        authorGroup={detailQuery.data!.authorGroup}
        date={detailQuery.data!.date}
        content={detailQuery.data!.content}
        favoriteCount={detailQuery.data!.favoriteCount}
        commentCount={detailQuery.data!.comments.length}
      />
      <StoryDetailComments comments={detailQuery.data!.comments} onReplyClick={handleReplyClick} />
      <StoryDetailAddComment storyId={storyId} replyId={replyId} onReplyReset={handleReplyReset} />
    </>
  );
}
