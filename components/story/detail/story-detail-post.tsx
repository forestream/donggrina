import React from 'react';
import StoryItemHeader from '@/components/story/item/story-item-header';
import { useFetchDetailStory } from '@/hooks/queries/story';
import useReplyOwner from '@/hooks/detail/use-reply-owner';
import StoryItemInfo from '@/components/story/item/story-item-info';
import StoryItemSwiper from '@/components/story/item/story-item-swiper';
import StoryDetailComments from '@/components/story/detail/comments/story-detail-comments';
import StoryDetailAddComment from '@/components/story/detail/add-comment/story-detail-add-comment';

interface StoryDetailPostProps {
  storyId: number;
}

export default function StoryDetailPost(props: StoryDetailPostProps) {
  const detailQuery = useFetchDetailStory(props.storyId);
  const { replyOwner, handleReplyClick, handleReplyReset } = useReplyOwner();

  const isImage = detailQuery.data!.images.length !== 0;
  const replyCount = detailQuery.data!.comments.reduce((prev, cur) => prev + cur.children.length, 0);
  const commentCount = detailQuery.data!.comments.length;
  const totalCommentcount = commentCount + replyCount;

  return (
    <>
      <StoryItemHeader {...detailQuery.data!} />
      {isImage && <StoryItemSwiper images={detailQuery.data!.images} />}
      <StoryItemInfo {...detailQuery.data!} storyId={props.storyId} commentCount={totalCommentcount} />
      <StoryDetailComments comments={detailQuery.data!.comments} onReplyClick={handleReplyClick} />
      <StoryDetailAddComment replyOwner={replyOwner} onReplyReset={handleReplyReset} storyId={props.storyId} />
    </>
  );
}
