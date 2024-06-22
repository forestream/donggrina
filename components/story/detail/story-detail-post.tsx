import React, { useState } from 'react';
import StoryItemHeader from '@/components/story/item/story-item-header';
import { useRouter } from 'next/router';
import { useFetchDetailStory } from '@/hooks/queries/story';
import StoryItemInfo from '@/components/story/item/story-item-info';
import StoryItemSwiper from '@/components/story/item/story-item-swiper';
import StoryDetailComments from '@/components/story/detail/comments/story-detail-comments';
import StoryDetailAddComment from '@/components/story/detail/add-comment/story-detail-add-comment';

export default function StoryDetailPost() {
  const router = useRouter();
  const storyId = +router.query.storyId!;
  const detailQuery = useFetchDetailStory(storyId);

  const [replyOwner, setReplyOwner] = useState<{ author: string; replyId: number } | null>(null);

  const handleReplyClick = (data: { author: string; replyId: number }) => setReplyOwner(data);
  const handleReplyReset = () => setReplyOwner(null);

  return (
    <>
      <StoryItemHeader
        content={detailQuery.data!.content}
        author={detailQuery.data!.author}
        authorImage={detailQuery.data!.authorImage}
        weather={detailQuery.data!.weather}
        petImages={detailQuery.data!.petImages}
        images={detailQuery.data!.images}
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
      <StoryDetailAddComment storyId={storyId} replyOwner={replyOwner} onReplyReset={handleReplyReset} />
    </>
  );
}
