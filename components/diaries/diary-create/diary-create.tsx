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
      photos: Array(5).fill(null),
    },
  });
  const selectedWeather = watch('weather');
  const imagePreviews = watch('photos');
  const fileInputRefs = useRef(new Array(5).fill(null));

  const handleImageChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const updatedPhotos = [...imagePreviews];
      updatedPhotos[index] = URL.createObjectURL(file);
      setValue('photos', updatedPhotos);
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
