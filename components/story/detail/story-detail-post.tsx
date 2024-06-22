import React from 'react';
import StoryItemHeader from '@/components/story/item/story-item-header';
import { useFetchDetailStory } from '@/hooks/queries/story';
import useReplyOwner from '@/hooks/detail/use-reply-owner';
import StoryItemInfo from '@/components/story/item/story-item-info';
import StoryItemSwiper from '@/components/story/item/story-item-swiper';
import StoryDetailComments from '@/components/story/detail/comments/story-detail-comments';
import StoryDetailAddComment from '@/components/story/detail/add-comment/story-detail-add-comment';
import useRouterId from '@/hooks/utils/use-router-id';

export default function StoryDetailPost() {
  const storyId = +useRouterId('storyId');
  const detailQuery = useFetchDetailStory(storyId);
  const { replyOwner, handleReplyClick, handleReplyReset } = useReplyOwner();

  const isImage = detailQuery.data!.images.length !== 0;

  return (
    <>
      <StoryItemHeader {...detailQuery.data!} />
      {isImage && <StoryItemSwiper images={detailQuery.data!.images} />}
      <StoryItemInfo {...detailQuery.data!} commentCount={detailQuery.data!.comments.length} storyId={storyId} />
      <StoryDetailComments comments={detailQuery.data!.comments} onReplyClick={handleReplyClick} />
      <StoryDetailAddComment replyOwner={replyOwner} onReplyReset={handleReplyReset} />
    </>
  );
}
