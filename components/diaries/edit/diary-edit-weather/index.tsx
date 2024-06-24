import React, { useState } from 'react';
import styles from './diary-edit-weather.module.scss';
import { WEATHER_TYPES } from '@/lib/constants/diaries-constants';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

type WeatherType = (typeof WEATHER_TYPES)[number];

interface WeatherItem {
  defaultWeather?: string;
}

export default function WeatherItem(props: WeatherItem) {
  const { setValue, watch } = useFormContext<{ weather: string }>();
  // const [selectedWeather, setSelectedWeather] = useState<string | null>(props.defaultWeather || '맑음');

  // if (props.defaultWeather) {
  //   setValue('weather', props.defaultWeather);
  // }

  const handleClick = (weather: WeatherType) => {
    setValue('weather', weather.label);
  };

  const selectedWeather = watch('weather');

  console.log(selectedWeather);

  return (
    <div className={styles.wrapper}>
      <div className={styles.weatherContainer}>
        <div className={styles.label}>날씨</div>
        <div className={styles.weatherIcons}>
          {WEATHER_TYPES.map((weather) => (
            <button
              key={weather.id}
              type="button"
              onClick={() => handleClick(weather)}
              className={selectedWeather === weather.label ? styles.selected : ''}
            >
              <Image
                src={selectedWeather === weather.label ? weather.selectedIcon : weather.icon}
                alt={weather.label}
                width={40}
                height={40}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
