import { useFormContext } from 'react-hook-form';
import DiaryCalendarModal from './diary-calendar-modal';
import styles from './diary-edit-date.module.scss';
import useModal from '@/hooks/use-modal';
import { useEffect, useState } from 'react';
import { DateTime } from '@/types/calendar';
import getDateTimeFrontend from '@/utils/get-date-time-frontend';

interface DiaryEditDateProps {
  initialDate: string;
}

export default function DiaryEditDate({ initialDate }: DiaryEditDateProps) {
  const {
    register,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [dateTime, setDateTime] = useState<DateTime>({
    year: +initialDate.slice(0, 4),
    month: +initialDate.slice(5, 7),
    date: +initialDate.slice(8, 10),
    ampm: '오전',
    hour: 12,
    minute: 0,
  });

  useEffect(() => {
    if (!watch('date')) return;
    trigger('date');
  }, [watch('date')]);

  const updateDateTime = (newDateTime: DateTime) => {
    setDateTime((prevDateTime) => ({
      ...prevDateTime,
      ...newDateTime,
    }));
  };

  useEffect(() => {
    setValue('date', getDateTimeFrontend(dateTime).slice(0, 10));
    if (errors.dateTime) trigger('date');
  }, [dateTime]);

  const [Modal, handleModal] = useModal();

  return (
    <>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <button type="button" onClick={handleModal.bind(null, true)} className={styles.todoDateText}>
            날짜
          </button>
          <div className={styles.todoDateSelector}>
            <input
              {...register('date', {
                validate: (value) => !!value || '*날짜를 선택해주세요.',
              })}
              type="text"
              id="dateTime"
              placeholder="YYYY-MM-DD"
              className={styles.input}
              readOnly
            />
          </div>
        </div>
        {errors.date && <p className={styles.error}>{errors.date.message as string}</p>}
      </div>
      <Modal>
        <DiaryCalendarModal updateDateTime={updateDateTime} onClose={handleModal.bind(null, false)} />
      </Modal>
    </>
  );
}
