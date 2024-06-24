import React from 'react';
import useReplyOwner from '@/hooks/detail/use-reply-owner';
import DirayItemInfo from '@/components/diaries/detail/diary-item-info';
import StoryItemSwiper from '@/components/story/item/story-item-swiper';

import { useDiaryQuery } from '@/hooks/queries/diary/use-diary-query';
import DiaryItemHeader from './diary-item-header';
import DirayDetailComments from '@/components/diaries/detail/comments/diary-detail-comments';
import DiaryDetailAddComment from './add-comment/diary-detail-add-comment';

interface StoryDetailPostProps {
  diaryId: number;
}

export default function DiaryDetailPost(props: StoryDetailPostProps) {
  const detailQuery = useDiaryQuery(String(props.diaryId));
  const { replyOwner, handleReplyClick, handleReplyReset } = useReplyOwner();

  const isImage = detailQuery.data!.contentImages.length !== 0;

  return (
    <>
      <DiaryItemHeader {...detailQuery.data!} />
      {isImage && <StoryItemSwiper images={detailQuery.data!.contentImages} />}
      <DirayItemInfo {...detailQuery.data!} diaryId={props.diaryId} />
      <DirayDetailComments comments={detailQuery.data!.comments} onReplyClick={handleReplyClick} />
      <DiaryDetailAddComment replyOwner={replyOwner} onReplyReset={handleReplyReset} diaryId={props.diaryId} />
    </>
  );
}
