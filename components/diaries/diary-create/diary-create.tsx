import React, { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import classNames from 'classnames';
import { WEATHER_TYPES } from '@/lib/constants/diaries-constants';
import { postDiariesImage, postDiaries } from '@/api/diaries/';
import styles from './diary-create.module.scss';

interface DiaryData {
  content: string;
  weather: string;
  isShare: boolean;
  date: string;
  pets: number[];
  images: number[];
}

const DiaryCreate = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<DiaryData>({
    defaultValues: {
      content: '',
      weather: '',
      isShare: false,
      date: '',
      pets: [],
      images: [],
    },
  });

  const selectedWeather = watch('weather');
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [imageIds, setImageIds] = useState<number[]>([]);
  const fileInputRefs = useRef<HTMLInputElement[]>([]);

  // const handleImageChange = (index: number) => async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if (files && files.length > 0) {
  //     const selectedFiles = Array.from(files);
  //     const formData = new FormData();
  //     selectedFiles.forEach((file) => {
  //       formData.append('images', file);
  //     });

  //     try {
  //       const { imageIds } = await postDiariesImage({ images: selectedFiles });
  //       const newImageIds = [...imageIds];
  //       newImageIds[index] = imageIds[index];
  //       setImageIds(newImageIds);

  //       const fileReader = new FileReader();
  //       fileReader.onload = () => {
  //         const newImagePreviews = [...imagePreviews];
  //         newImagePreviews[index] = fileReader.result as string;
  //         setImagePreviews(newImagePreviews);
  //       };
  //       fileReader.readAsDataURL(selectedFiles[0]);
  //     } catch (error) {
  //       console.error('Error uploading image:', error);
  //     }
  //   }
  // };

  const handleImageChange = (index: number) => async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);

      try {
        const { imageIds } = await postDiariesImage({ images: fileArray });
        const newImageIds = [...imageIds];
        newImageIds[index] = imageIds[index];
        setImageIds(newImageIds);

        const fileReader = new FileReader();
        fileReader.onload = () => {
          const newImagePreviews = [...imagePreviews];
          newImagePreviews[index] = fileReader.result as string;
          setImagePreviews(newImagePreviews);
        };
        fileReader.readAsDataURL(files[0]);
      } catch (error) {
        console.error('faile uploade image:', error);
      }
    }
  };

  const onSubmit: SubmitHandler<DiaryData> = async (data) => {
    const completeData = { ...data, images: imageIds };
    try {
      const response = await postDiaries(completeData);
      console.log('Diary posted successfully:', response);
    } catch (error) {
      console.error('faile post diary:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register('content', { required: '*내용을 입력해주세요.' })}
          className={styles.content}
          id="content"
          placeholder={'메모\n어떤 일정인지 자세하게 기록하실 수 있어요!'}
        />
        {errors.content && <p className={styles.error}>{errors.content.message}</p>}

        <hr className={styles.division} />

        <div className={styles.weatherContainer}>
          <div className={styles.weather}>
            <img src="/images/diaries/bar.svg" alt="Weather bar" />
            날씨
          </div>
          <div className={styles.weatherIcons}>
            {WEATHER_TYPES.map((weather) => (
              <button
                key={weather.id}
                type="button"
                onClick={() => setValue('weather', weather.id)}
                className={selectedWeather === weather.id ? styles.selected : ''}
              >
                <img src={selectedWeather === weather.id ? weather.selectedIcon : weather.icon} alt={weather.label} />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.imagesContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <input
                ref={(el) => (fileInputRefs.current[index] = el!)}
                type="file"
                accept="image/*"
                onChange={handleImageChange(index)}
                hidden
              />
              <img
                src={imagePreviews[index] || '/images/diaries/imageupload-default.svg'} // 미리보기 또는 기본 이미지
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
    </div>
  );
};

export default DiaryCreate;
