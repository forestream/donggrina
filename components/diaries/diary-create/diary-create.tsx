import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { WEATHER_TYPES } from '@/lib/constants/diaries-constants';
import styles from './diary-create.module.scss';

const DiaryCreate = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      content: '',
      weather: '',
      images: Array(5).fill(null),
      isShare: false,
      date: '',
    },
  });
  const selectedWeather = watch('weather');
  const imagePreviews = watch('images');
  const fileInputRefs = useRef(new Array(5).fill(null));

  const handleImageChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const updatedPhotos = [...imagePreviews];
      updatedPhotos[index] = URL.createObjectURL(file);
      setValue('images', updatedPhotos);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
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
          {imagePreviews.map((src, index) => (
            <div key={index}>
              <input
                ref={(el) => (fileInputRefs.current[index] = el)}
                type="file"
                accept="image/*"
                onChange={handleImageChange(index)}
                hidden
              />
              <img
                src={src || '/images/diaries/imageupload-default.svg'}
                alt="default image"
                className={styles.images}
                onClick={() => fileInputRefs.current[index]?.click()}
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
