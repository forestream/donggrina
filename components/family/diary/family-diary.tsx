import React from 'react';
import FamilyDiaryLayout from './layout/family-diary-layout';

import FamilyDiaryContents from './family-diary-contents';
import Suspensive from '@/components/suspensive/suspensive';
import { useFetchDiary } from '@/hooks/queries/family';
import CalendarInstance from '@/utils/date/date.utils';

export default function FamilyDiary() {
  const date = CalendarInstance.getTodayData();
  const diaryQuery = useFetchDiary(date);

  return (
    <FamilyDiaryLayout>
      <Suspensive fallback={<p>로딩중...</p>} isLoading={diaryQuery.isLoading}>
        <FamilyDiaryContents />
      </Suspensive>
    </FamilyDiaryLayout>
  );
}
