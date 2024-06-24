import React from 'react';
import DiaryEditPets from '@/components/diaries/edit/pets/diary-edit-pets';
import { FormProvider, useForm } from 'react-hook-form';
import MemoItem from '@/components/diaries/edit/memo';
import WeatherItem from '@/components/diaries/edit/diary-edit-weather';
import DiaryEditImage from '@/components/diaries/edit/diary-edit-image/diary-edit-image';
import DiaryEditShare from '@/components/diaries/edit/diary-edit-share/diary-edit-share';
import styles from './index.module.scss';
import diaryApiInstance from '@/api/diaries';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { axiosInstance } from '@/api';
import { fetchPets } from '@/api/calendar/request';
// import { Pet } from '@/api/calendar/request.type';
import DiaryEditDate from '@/components/diaries/edit/diary-edit-date';
import { useRouter } from 'next/router';
import { useUpdateDiary } from '@/hooks/queries/diary/mutation';
import classNames from 'classnames';

interface FormFields {
  pets: number[];
  content: string;
  weather: string;
  images: number[];
  isShare: boolean;
  date: string;
}

export default function DiaryEditPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const updateDiaryMutation = useUpdateDiary();

  const methods = useForm<FormFields>({
    defaultValues: {
      pets: [],
      content: props.diaryData!.content,
      images: props.diaryData!.contentImageIds,
      isShare: props.diaryData!.isShare,
      weather: props.diaryData!.weather,
      date: '',
    },
  });
  const { isValid } = methods.formState;
  const onSubmit = async (data: FormFields) => {
    const petsIds = data.pets.map((pet: number) => +pet);
    const transformedData = {
      ...data,
      petsIds,
    };

    try {
      await updateDiaryMutation.mutateAsync({ diaryId: props.diaryId, data: transformedData });
      router.push(`/diaries/${props.diaryId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main style={{ paddingTop: '54px' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DiaryEditPets pets={props.petData} selectedPets={props.diaryData.petIds} />
          <MemoItem register={methods.register} fieldName="content" />
          <WeatherItem />
          <DiaryEditImage images={props.diaryData.contentImages} />
          <DiaryEditShare />
          <DiaryEditDate initialDate={props.diaryData.date} />

          <div className={styles.button}>
            <button
              className={classNames(styles.submit, {
                [styles.disabled]: !isValid,
              })}
            >
              등록하기
            </button>
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
        diaryData: diaryData,
        petData: petsData,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}) satisfies GetServerSideProps;
