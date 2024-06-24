import React from 'react';
import DiaryEditPets from '@/components/diaries/edit/pets/diary-edit-pets';
import { FormProvider, useForm } from 'react-hook-form';
import MemoItem from '@/components/diaries/edit/memo';
import WeatherItem from '@/components/diaries/edit/diary-edit-weather';
import DiaryEditImage from '@/components/diaries/edit/diary-edit-image/diary-edit-image';
import DiaryEditShare from '@/components/diaries/edit/diary-edit-share/diary-edit-share';
import Button from '@/components/common/button/button';
import styles from './index.module.scss';
import diaryApiInstance from '@/api/diaries';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import { fetchPets } from '@/api/calendar/request';
import { Pet } from '@/api/calendar/request.type';

export default function DiaryEditPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const methods = useForm<{
    pets: number[];
    memo: string;
    weather: string;
    images: number[];
    isShare: boolean;
  }>({
    defaultValues: {
      pets: [],
      memo: props.diarydata!.content,
      images: props.diarydata!.contentImageIds,
      isShare: false,
      weather: props.diarydata!.weather,
    },
  });

  const onSubmit = (data: any) => {
    const petsIds = data.pets.map((pet: number) => +pet);
    console.log(data);
  };

  return (
    <main style={{ paddingTop: '54px' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DiaryEditPets pets={props.petData} selectedPets={props.diarydata.petIds} />
          <MemoItem />
          <WeatherItem />
          <DiaryEditImage images={props.diarydata.contentImages} />
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

export const getServerSideProps = (async ({ req, query }) => {
  const diaryId = +query.diaryId!;
  if (!diaryId) return { notFound: true };

  const cookie = req.cookies;
  if (!cookie) return { notFound: true };

  axiosInstance.defaults.headers['Authorization'] = `Bearer ${req.cookies.accessToken!}`;

  try {
    const diaryData = await diaryApiInstance.fetchDiary(diaryId);
    const petsData = await fetchPets();
    return {
      props: {
        diaryId,
        diarydata: diaryData,
        petData: petsData,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}) satisfies GetServerSideProps;
