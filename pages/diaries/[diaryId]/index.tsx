import DiaryDetailPost from '@/components/diaries/detail/diary-detail-post';
import DiaryDetailHeader from '@/components/diaries/detail/header/diary-detail-header';
import Suspensive from '@/components/suspensive/suspensive';
import { useDiaryQuery } from '@/hooks/queries/diary/use-diary-query';

import { useRouter } from 'next/router';
import React from 'react';

export default function StoryDetailPage() {
  const router = useRouter();
  const diaryId = +router.query.diaryId!;
  const detailQuery = useDiaryQuery(String(diaryId));

  return (
    <div style={{ padding: '54px 24px 0px 24px' }}>
      <DiaryDetailHeader isMyStory={detailQuery.data?.isMyDiary} />
      <Suspensive isLoading={detailQuery.isLoading}>
        <DiaryDetailPost id="diaryId" />
      </Suspensive>
    </div>
  );
}
