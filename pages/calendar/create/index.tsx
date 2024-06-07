import styles from './create.module.scss';
import CatCheckbox from '@/components/calendar/cat-checkbox';
import DogCheckbox from '@/components/calendar/dog-checkbox';
import validateDate from '@/utils/validate-date';
import validateMonth from '@/utils/validate-month';
import validateYear from '@/utils/validate-year';
import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';

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

export default function Create({ year, month, date }) {
  const [dateTime, setDateTime] = useState({ year, month, date, hour: 0, minute: 0 });

  const handleChange = (e) => {
    setDateTime((prevDateTime) => ({
      ...prevDateTime,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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
          날짜/시간
          <div className={styles.todoDateSelector}>
            <input
              onChange={handleChange}
              className={`${styles.input} ${styles.year}`}
              type="text"
              id="year"
              value={dateTime.year}
            />
            <span>-</span>
            <input
              onChange={handleChange}
              className={`${styles.input} ${styles.month}`}
              type="text"
              id="month"
              value={dateTime.month}
            />
            <span>-</span>
            <input
              onChange={handleChange}
              className={`${styles.input} ${styles.date}`}
              type="text"
              id="date"
              value={dateTime.date}
            />
            <input
              onChange={handleChange}
              className={`${styles.input} ${styles.hour}`}
              type="text"
              id="hour"
              value={dateTime.hour}
            />
            <span>:</span>
            <input
              onChange={handleChange}
              className={`${styles.input} ${styles.minute}`}
              type="text"
              id="minute"
              value={dateTime.minute}
            />
          </div>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}
