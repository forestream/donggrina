import React from 'react';
import FamilyDiaryLayout from './layout/family-diary-layout';
import FamilyDiaryContents from './family-diary-contents';
import FamilyDiaryContentsEmpty from '@/components/family/diary/family-diary-contents-empty';
import { useFetchDiary } from '@/hooks/queries/family';

export default function FamilyDiary() {
  const diaryQuery = useFetchDiary('2024-06-16');

  if (diaryQuery.isLoading) return <p>로딩중...</p>;

  console.log(diaryQuery.data);

  return (
    <FamilyDiaryLayout>
      {!diaryQuery.data!.length && <FamilyDiaryContentsEmpty />}
      {!!diaryQuery.data!.length && <FamilyDiaryContents />}
    </FamilyDiaryLayout>
  );
}
