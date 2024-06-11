import styles from './calendar-modal.module.scss';
import { BaseSyntheticEvent, useState } from 'react';
import CalendarModalTimeSelector from './calendar-modal-time-selector';
import CalendarModalCalendar from './calendar-modal-calendar';
import { DateTime } from '@/pages/calendar/create';
import Calendar from '../calendar-compound/calendar';

interface CalendarModalProps {
  dateTime: DateTime;
  updateDateTime: (newDateTime: DateTime) => void;
  onClose: () => void;
}

export default function CalendarModal({ dateTime: initDateTime, updateDateTime, onClose }: CalendarModalProps) {
  const [dateTime, setDateTime] = useState(initDateTime);

  const handleSelect = (type: string, e: BaseSyntheticEvent | IntersectionObserverEntry) => {
    setDateTime((prevDateTime) => ({
      ...prevDateTime,
      [type]: e.target.innerText,
    }));
  };

  const handleDateTimeSave = () => {
    updateDateTime(dateTime);
    onClose();
  };

  return (
    <div className={styles.outer}>
      <Calendar>
        <Calendar.Year />
        <Calendar.Month />
        <CalendarModalCalendar dateTime={dateTime} onSelect={handleSelect} />
        <CalendarModalTimeSelector dateTime={dateTime} onSelect={handleSelect} />
        <button onClick={handleDateTimeSave} className={styles.save} type="button">
          저장하기
        </button>
      </Calendar>
    </div>
  );
}
