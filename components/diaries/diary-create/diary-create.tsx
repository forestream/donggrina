import React from 'react';
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
  } = useForm();
  const selectedWeather = watch('weather');

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <textarea
          {...register('content', { required: '*내용을 입력해주세요.' })}
          className={styles.content}
          id="content"
          placeholder={`메모\n어떤 일정인지 자세하게 기록하실 수 있어요!`}
        />
        {errors.content && <p className={styles.error}>{errors.content.message as string}</p>}

        <div className={styles.weather}>
          <img src="/images/diaries/bar.svg" />
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

        <button
          className={classNames(styles.submit, {
            [styles.disabled]: !isValid,
          })}
        >
          등록하기
        </button>
      </form>
    </div>
  );
};

export default DiaryCreate;
