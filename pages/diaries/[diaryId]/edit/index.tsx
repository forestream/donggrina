import React from 'react';
import DiaryEditHeader from '@/components/diaries/edit/diary-edit-header';
import { useFetchDiaryById } from '@/hooks/queries/diary/queries';
import useRouterId from '@/hooks/utils/use-router-id';
import { FormProvider, useForm } from 'react-hook-form';

export default function DiaryEditPage() {
  const diaryId = +useRouterId('diaryId')!;
  const diaryQuery = useFetchDiaryById(diaryId);
  const methods = useForm<{ [key: string]: string }>();

  if (diaryQuery.isLoading) return '';

  return (
    <main style={{ paddingTop: '54px' }}>
      <FormProvider {...methods}>
        <DiaryEditHeader />
      </FormProvider>
      {/* <Suspensive isLoading={diaryQuery.isLoading}></Suspensive> */}
    </main>
  );
}
