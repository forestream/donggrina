import React from 'react';
import FamilyDiaryLayout from './layout/family-diary-layout';

import FamilyDiaryContents from './family-diary-contents';
import Suspensive from '@/components/suspensive/suspensive';
import { useFetchDiary } from '@/hooks/queries/family';

export default function FamilyDiary() {
  const diaryQuery = useFetchDiary('2024-06-16');

  return (
    <FamilyDiaryLayout>
      <Suspensive fallback={<p>로딩중...</p>} isLoading={diaryQuery.isLoading}>
        <FamilyDiaryContents />
      </Suspensive>
    </FamilyDiaryLayout>
  );
}
