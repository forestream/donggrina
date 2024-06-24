import React from 'react';
import DiaryEditPets from '@/components/diaries/edit/pets/diary-edit-pets';
import { useFetchDiaryById } from '@/hooks/queries/diary/queries';
import useRouterId from '@/hooks/utils/use-router-id';
import { FormProvider, useForm } from 'react-hook-form';
import Suspensive from '@/components/suspensive/suspensive';
import MemoItem from '@/components/diaries/edit/memo';
import WeatherItem from '@/components/diaries/edit/diary-edit-weather';
import DiaryEditImage from '@/components/diaries/edit/diary-edit-image/diary-edit-image';
import DiaryEditShare from '@/components/diaries/edit/diary-edit-share/diary-edit-share';
import Button from '@/components/common/button/button';
import styles from './index.module.scss';
import diaryApiInstance from '@/api/diaries';

export default function DiaryEditPage() {
  const diaryId = +useRouterId('diaryId')!;
  const diaryQuery = useFetchDiaryById(diaryId);

  const methods = useForm<{
    pets: string[];
    memo: string;
    weather: string;
    images: number[];
    isShare: boolean;
  }>({
    defaultValues: async () => {
      const data = await diaryApiInstance.fetchDiary(diaryId);
      return {
        pets: [],
        memo: '',
        images: [],
        isShare: false,
        weather: data.weather,
        resetOptions: {
          keepDirtyValues: true,
        },
      };
    },
  });

  if (diaryQuery.isLoading) return '';

  const onSubmit = (data: any) => {
    console.log(data);
  };

  // console.log(methods.watch('weather'));

  // const handleSubmit = () => {
  //   console.log('?');
  //   methods.handleSubmit(onSubmit);
  // };

  // console.log(diaryQuery.data);

  return (
    <main style={{ paddingTop: '54px' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DiaryEditPets />
          <MemoItem />
          <WeatherItem defaultWeather={diaryQuery.data?.weather} />
          <DiaryEditImage />
          <DiaryEditShare />

          <div className={styles.button}>
            <Button className="primary" type="submit" round>
              등록하기
            </Button>
          </div>
        </form>
      </FormProvider>
    </main>
  );
}

export const getServersideProps = () => {};
