import React from 'react';
import DiaryEditHeader from '@/components/diaries/edit/diary-edit-header';
import Suspensive from '@/components/suspensive/suspensive';
import { useFetchDiaryById } from '@/hooks/queries/diary/queries';
import useRouterId from '@/hooks/utils/use-router-id';

export default function DiaryEditPage() {
  const diaryId = +useRouterId('diaryId')!;
  const diaryQuery = useFetchDiaryById(diaryId);

  return (
    <main style={{ paddingTop: '54px' }}>
      <Suspensive isLoading={diaryQuery.isLoading}>
        <DiaryEditHeader />
      </Suspensive>
    </main>
  );
}
