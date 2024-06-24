import { useState } from 'react';

export default function useReplyOwner() {
  const [replyOwner, setReplyOwner] = useState<{ author: string; replyId: number } | null>(null);
  const handleReplyClick = (data: { author: string; replyId: number }) => setReplyOwner(data);
  const handleReplyReset = () => setReplyOwner(null);

  return { replyOwner, handleReplyClick, handleReplyReset };
}
