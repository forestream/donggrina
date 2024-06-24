import { useFormContext } from 'react-hook-form';
import DiaryCalendarModal from './diary-calendar-modal';
import styles from './diary-edit-hanbin.module.scss';
import useModal from '@/hooks/use-modal';
import { useEffect, useState } from 'react';
import { DateTime } from '@/types/calendar';
import getDateTimeFrontend from '@/utils/get-date-time-frontend';

export default function DiaryEditHanbin() {
  const {
    register,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [dateTime, setDateTime] = useState<DateTime>({
    year: null,
    month: null,
    date: null,
    ampm: null,
    hour: null,
    minute: null,
  });

  useEffect(() => {
    if (!watch('dateTime')) return;
    trigger('dateTime');
  }, [watch('dateTime')]);

  const updateDateTime = (newDateTime: DateTime) => {
    setDateTime((prevDateTime) => ({
      ...prevDateTime,
      ...newDateTime,
    }));
  };

  useEffect(() => {
    setValue('dateTime', getDateTimeFrontend(dateTime).slice(0, 10));
    if (errors.dateTime) trigger('dateTime');
  }, [dateTime]);

  const [Modal, handleModal] = useModal();

  return (
    <div className={styles.outer}>
      <button type="button" onClick={handleModal.bind(null, true)} className={styles.todoDateText}>
        날짜
      </button>
      <div className={styles.todoDateSelector}>
        <input
          {...register('dateTime', {
            validate: (value) => !!value || '*날짜를 선택해주세요.',
          })}
          type="text"
          id="dateTime"
          placeholder="YYYY-MM-DD"
          className={styles.input}
          readOnly
        />
      </div>
      <Modal>
        <DiaryCalendarModal updateDateTime={updateDateTime} onClose={handleModal.bind(null, false)} />
      </Modal>
    </div>
  );
}
