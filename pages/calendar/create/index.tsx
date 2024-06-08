import styles from './create.module.scss';
import CatCheckbox from '@/components/calendar/cat-checkbox';
import DogCheckbox from '@/components/calendar/dog-checkbox';
import validateDate from '@/utils/validate-date';
import validateMonth from '@/utils/validate-month';
import validateYear from '@/utils/validate-year';
import { GetServerSidePropsContext } from 'next';
import { BaseSyntheticEvent, useState } from 'react';
import { CalendarProps } from '..';
import useModal from '@/hooks/use-modal';
import CalendarModal from '@/components/calendar/calendar-modal';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let {
    query: { year, month, date },
  } = context;

  if (typeof year === 'object') year = year[0];
  if (typeof month === 'object') month = month[0];
  if (typeof date === 'object') date = date[0];

  const today = new Date();
  const [yearToday, monthToday] = [today.getFullYear(), today.getMonth() + 1];

  if (!validateYear(year)) year = String(yearToday);
  if (!validateMonth(month)) month = String(monthToday);
  if (!validateDate(date)) date = '1';

  return { props: { year: +(year as string), month: +(month as string), date: +(date as string) } };
}

export interface DateTime extends CalendarProps {
  [key: string]: string | number;
  ampm: string;
  hour: number;
  minute: number;
}

export default function Create({ year, month, date }: CalendarProps) {
  const [dateTime, setDateTime] = useState<DateTime>({
    year,
    month,
    date,
    ampm: '오전',
    hour: 0,
    minute: 0,
  });

  const updateDateTime = (newDateTime: DateTime) => {
    setDateTime((prevDateTime) => ({
      ...prevDateTime,
      ...newDateTime,
    }));
  };

  const [Modal, handleModal] = useModal();

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    Object.keys(dateTime).forEach((key) => {
      console.log(e.target[key].value);
    });
  };

  return (
    <div className={styles.outer}>
      <form onSubmit={handleSubmit}>
        <input className={styles.title} id="title" type="text" placeholder="제목" />
        <textarea
          className={styles.description}
          id="description"
          placeholder={`메모\n어떤 일정인지 자세하게 기록하실 수 있어요!`}
        />
        <div className={styles.division}></div>
        <div className={styles.petSelector}>
          반려동물 선택
          <div className={styles.petLabelContainer}>
            <DogCheckbox />
            <CatCheckbox />
          </div>
        </div>
        <div className={styles.todoDate}>
          <button type="button" onClick={handleModal.bind(null, true)} className={styles.todoDateText}>
            날짜 / 시간
          </button>
          <div className={styles.todoDateSelector}>
            {Object.keys(dateTime).map((key) => (
              <div key={key} className={`${styles.input} ${styles[key]}`}>
                {dateTime[key].toString().padStart(2, '0')}
                <input type="hidden" id={key} value={dateTime[key].toString().padStart(2, '0')} />
              </div>
            ))}
          </div>
        </div>
        <button>submit</button>
      </form>
      <Modal>
        <CalendarModal updateDateTime={updateDateTime} dateTime={dateTime} onClose={handleModal.bind(null, false)} />
      </Modal>
    </div>
  );
}
