import React from 'react';
import DiaryEditPets from '@/components/diaries/edit/pets/diary-edit-pets';
import { useFetchDiaryById } from '@/hooks/queries/diary/queries';
import useRouterId from '@/hooks/utils/use-router-id';
import { FormProvider, useForm } from 'react-hook-form';
import Suspensive from '@/components/suspensive/suspensive';
import MemoItem from '@/components/diaries/edit/memo';

export default function DiaryEditPage() {
  const diaryId = +useRouterId('diaryId')!;
  const diaryQuery = useFetchDiaryById(diaryId);
  const methods = useForm<{
    pets: string | string[];
    memo: string;
  }>();

  if (diaryQuery.isLoading) return '';

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(diaryQuery.data);

  return (
    <main style={{ paddingTop: '54px' }}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Suspensive isLoading={diaryQuery.isLoading}>
            <DiaryEditPets />
          </Suspensive>
          <MemoItem />
        </FormProvider>

        <button type="submit">check</button>
      </form>
    </main>
  );
}
