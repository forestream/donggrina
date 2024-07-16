import React, { useRef, useState, useEffect } from 'react';
import { FormProvider, useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import classNames from 'classnames';
import { postDiariesImage, postDiaries } from '@/apis/diaries';
import styles from './create.module.scss';
import useCalenderDateStore from '@/store/calendar.store';
import { convertToLocalDate } from '@/utils/convert-local-date';
import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';
import { useQueryClient } from '@tanstack/react-query';
import PetSelect from '@/components/diaries/pet-select';
import PetCheckbox from '@/components/diaries/pet-checkbox';
import ImageSkeleton from '@/components/skeleton/image/';
import { useRouter } from 'next/router';
import WeatherItem from '@/components/diaries/edit/diary-edit-weather';
import MemoItem from '@/components/diaries/edit/memo';

export interface DiaryData {
  content: string;
  weather: string;
  isShare: boolean;
  date: string;
  pets: number[];
  images: number[];
}

export default function DiaryCreate() {
  const methods = useForm<DiaryData & FieldValues>({
    defaultValues: {
      content: '',
      weather: '',
      isShare: false,
      date: '',
      pets: [],
      images: [],
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
    resetField,
  } = methods;

  const queryClient = useQueryClient();
  const router = useRouter();

  const year = useCalenderDateStore.use.year().toString();
  const month = (useCalenderDateStore.use.month() + 1).toString().padStart(2, '0');
  const date = useCalenderDateStore.use.date().toString().padStart(2, '0');
  const localDate = convertToLocalDate({ year, month, day: date });

  useEffect(() => {
    setValue('date', localDate);
  }, [localDate, setValue]);

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [imageIds, setImageIds] = useState<number[]>([]);
  const fileInputRefs = useRef<HTMLInputElement[]>([]);

  const watchDate = watch('date');
  useEffect(() => {
    if (watchDate) {
      const [year, month, day] = watchDate.split('-');
      const convertedDate = convertToLocalDate({ year, month, day });
      setValue('date', convertedDate);
    }
  }, [watchDate, setValue]);

  const handleImageChange = (index: number) => async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);

      try {
        const response = await postDiariesImage({ images: fileArray });
        const newImageIds = [...imageIds];
        newImageIds[index] = response.data[0];
        setImageIds(newImageIds);

        const fileReader = new FileReader();
        fileReader.onload = () => {
          const newImagePreviews = [...imagePreviews];
          newImagePreviews[index] = fileReader.result as string;
          setImagePreviews(newImagePreviews);
        };
        fileReader.readAsDataURL(files[0]);
      } catch (error) {
        console.error('failed to upload image:', error);
      }
    }
  };

  const onSubmit: SubmitHandler<DiaryData & FieldValues> = async (data) => {
    const completeData = { ...data, images: imageIds };
    try {
      const response = await postDiaries(completeData);
      console.log('Diary posted successfully:', response);
      queryClient.invalidateQueries({ queryKey: ['diaries'] });
      router.push('/diaries');
    } catch (error) {
      console.error('failed to post diary:', error);
    }
  };

  const { data: pets, isLoading, isError, error } = usePetsQuery();
  const [selectedPets, setSelectedPets] = useState<number[]>([]);

  if (isError) return <p>Error: {error.message}</p>;

  const handleTogglePet = (petId: number) => {
    setSelectedPets((prevSelectedPets) =>
      prevSelectedPets.includes(petId) ? prevSelectedPets.filter((id) => id !== petId) : [...prevSelectedPets, petId],
    );
  };

  const handleClickAll = () => {
    if (selectedPets.length === pets.length) {
      setSelectedPets([]);
      resetField('pets');
    } else {
      const allPetIds = pets.map((pet) => pet.petId);
      setSelectedPets(allPetIds);
      setValue('pets', allPetIds);
    }
  };

  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.petSelect}>
            <PetSelect selectAll={handleClickAll} title="반려동물 선택">
              <div className={styles.pets}>
                {isLoading ? (
                  <ImageSkeleton />
                ) : (
                  pets.map((pet) => (
                    <PetCheckbox
                      key={pet.petId}
                      register={register}
                      petId={pet.petId}
                      petName={pet.name}
                      petImage={pet.imageUrl}
                      selectedPets={selectedPets}
                      onTogglePet={handleTogglePet}
                    />
                  ))
                )}
              </div>
            </PetSelect>
          </div>
          <MemoItem register={register} fieldName="content" />
          {/* <hr className={styles.division} /> */}

          <WeatherItem />

          <div className={styles.imagesContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                <input
                  ref={(el) => {
                    fileInputRefs.current[index] = el!;
                  }}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange(index)}
                  hidden
                />
                <img
                  src={imagePreviews[index] || '/images/diaries/imageupload-default.svg'}
                  alt="Upload preview"
                  className={styles.images}
                  onClick={() => fileInputRefs.current[index].click()}
                />
              </div>
            ))}
          </div>

          <div className={styles.storyshareContainer}>
            <div className={styles.storyshare}>
              <img src="/images/diaries/bar.svg" />
              스토리에 공유하기
            </div>
            <label className={styles.toggle}>
              <input type="checkbox" {...register('isShare')} />
              <span className={styles.toggleSlide}></span>
            </label>
          </div>

          <hr className={styles.division} />

          <div className={styles.dateContainer}>
            <div className={styles.date}>
              <label htmlFor="date">날짜</label>
            </div>
            <input
              className={styles.dateInput}
              type="text"
              id="date"
              placeholder="YYYY-MM-DD"
              {...register('date', {
                required: '*날짜를 입력해주세요.',
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/,
                  message: '*날짜 형식이 올바르지 않습니다. (예: 2024-06-15)',
                },
              })}
            />
          </div>
          {errors.date && <p className={styles.error}>{errors.date.message}</p>}

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
    </div>
  );
}
