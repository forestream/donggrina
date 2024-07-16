import React from 'react';
import StoryDetailReplyCommentItem from './diary-detail-reply-comment-item';
import { Reply } from '@/types/story/details';

interface StoryDetailReplyCommentsProps {
  replyList: Reply[];
}

export default function DiaryDetailReplyComments(props: StoryDetailReplyCommentsProps) {
  return (
    <ul>
      {props.replyList.map((reply) => (
        <StoryDetailReplyCommentItem key={reply.commentId} {...reply} />
      ))}
    </ul>
  );
}
