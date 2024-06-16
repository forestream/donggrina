import React from 'react';
import FamilyDiaryLayout from './layout/family-diary-layout';
import FamilyDiaryFetcher from '@/components/family/diary/family-diary-fetcher';
import FamilyDiaryContents from './family-diary-contents';

export default function FamilyDiary() {
  return (
    <FamilyDiaryLayout>
      <FamilyDiaryFetcher>
        <FamilyDiaryContents />
      </FamilyDiaryFetcher>
    </FamilyDiaryLayout>
  );
}
