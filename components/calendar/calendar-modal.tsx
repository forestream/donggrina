import styles from './calendar-modal.module.scss';
import { CalendarProps } from '@/pages/calendar';
import { TIME_SELECTOR } from '@/lib/constants/calendar-constants';
import { MouseEvent, useState } from 'react';
import CalendarModalTimeSelector from './calendar-modal-time-selector';
import CalendarModalCalendar from './calendar-modal-calendar';

interface CalendarModalProps extends CalendarProps {
  hour: number;
  minute: number;
  onSelect: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function CalendarModal({
  year,
  month,
  date,
  hour: initHour,
  minute: initMinute,
  onSelect,
}: CalendarModalProps) {
  const [hour, setHour] = useState(initHour);
  const [minute, setMinute] = useState(initMinute);
  const [ampm, setAmpm] = useState(initHour < 12 ? TIME_SELECTOR.AM_PM[0] : TIME_SELECTOR.AM_PM[1]);

  const handleAmpmSelect = (value: string) => setAmpm(value);
  const handleHourSelect = (value: number) => setHour(value);
  const handleMinuteSelect = (value: number) => setMinute(value);

  return (
    <div className={styles.outer}>
      <CalendarModalCalendar {...{ year, month, date, onSelect }} />
      <CalendarModalTimeSelector
        onAmpmSelect={handleAmpmSelect}
        onHourSelect={handleHourSelect}
        onMinuteSelect={handleMinuteSelect}
        ampm={ampm}
        hour={hour}
        minute={minute}
      />
      <button className={styles.save} type="button">
        저장하기
      </button>
    </div>
  );
}
