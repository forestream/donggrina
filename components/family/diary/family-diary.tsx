import React from 'react';
import FamilyDiaryLayout from './layout/family-diary-layout';
import FamilyDiaryContents from './family-diary-contents';
import FamilyDiaryContentsEmpty from '@/components/family/diary/family-diary-contents-empty';

export default function FamilyDiary() {
  return (
    <FamilyDiaryLayout>
      {/* <FamilyDiaryContentsEmpty /> */}
      <FamilyDiaryContents />
    </FamilyDiaryLayout>
  );
}
