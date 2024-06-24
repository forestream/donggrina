import React, { useState } from 'react';
import styles from './diary-edit-weather.module.scss';
import { WEATHER_TYPES } from '@/lib/constants/diaries-constants';
import Image from 'next/image';
import { UseFormSetValue } from 'react-hook-form';
import { DiaryData } from '../../diary-create/diary-create';

type WeatherType = (typeof WEATHER_TYPES)[number];

interface WeatherItemProps {
  setValue: UseFormSetValue<DiaryData>;
}

export default function WeatherItem({ setValue }: WeatherItemProps) {
  const [selectedWeather, setSelectedWeather] = useState<string | null>(null);

  const handleClick = (weather: WeatherType) => {
    setSelectedWeather(weather.id);
    setValue('weather', weather.id);
  };
  return (
    <div className={styles.weatherContainer}>
      <div className={styles.label}>날씨</div>
      <div className={styles.weatherIcons}>
        {WEATHER_TYPES.map((weather) => (
          <button
            key={weather.id}
            type="button"
            onClick={() => handleClick(weather)}
            className={selectedWeather === weather.id ? styles.selected : ''}
          >
            <Image
              src={selectedWeather === weather.id ? weather.selectedIcon : weather.icon}
              alt={weather.label}
              width={40}
              height={40}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
