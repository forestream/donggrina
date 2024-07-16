import React from 'react';
import FamilyDiaryLayout from './layout/family-diary-layout';

import FamilyDiaryContents from './family-diary-contents';
import Suspensive from '@/components/suspensive/suspensive';
import CalendarInstance from '@/utils/date/date.utils';
import { useDiaries } from '@/hooks/queries/diary/use-diary-query';
import FamilyDiarySkeleton from '@/components/skeleton/family/diary';

export default function FamilyDiary() {
  const date = CalendarInstance.getTodayData();
  const diaryQuery = useDiaries(date);

  return (
    <FamilyDiaryLayout>
      <Suspensive fallback={<FamilyDiarySkeleton />} isLoading={diaryQuery.isLoading}>
        <FamilyDiaryContents />
      </Suspensive>
    </FamilyDiaryLayout>
  );
}
