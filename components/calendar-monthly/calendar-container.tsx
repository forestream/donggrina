import styles from './calendar-container.module.scss';
import getSeventhDate from '@/utils/get-seventh-date';
import { useCalendarContext } from '../calendar-compound/calendar';
import getCalendarArray from '@/utils/get-calendar-array';

const MOCK = {
  code: 200,
  message: '일정 목록 월별 조회 성공',
  data: [
    {
      date: '2024-06-07',
      count: 1,
    },
    {
      date: '2024-06-10',
      count: 2,
    },
    {
      date: '2024-06-11',
      count: 4,
    },
    {
      date: '2024-06-21',
      count: 2,
    },
  ],
};

export default function CalendarContainer() {
  const calendarContext = useCalendarContext();
  const year = calendarContext.year;
  const month = calendarContext.month + 1;
  const date = calendarContext.date;

  const { calendarArray, todoCountsArray } = getCalendarArray(year, month, MOCK.data);

  return (
    <div className={styles.container}>
      {calendarArray.map((calendarCell, i) =>
        typeof calendarCell === 'string' ? (
          <div key={i + 'empty'} className={`${styles.calendarCell} ${getSeventhDate(i) ? styles.red : ''}`}>
            {calendarCell}
          </div>
        ) : (
          <div
            key={calendarCell}
            onClick={calendarContext.onSelectedDate.bind(null, calendarCell)}
            className={`${styles.calendarCell} ${(i + 1) % 7 === 0 ? styles.red : ''}`}
          >
            <div className={`${styles.date} ${calendarCell == date ? styles.selected : ''}`}>{calendarCell}</div>
            <div className={styles.todoIconContainer}>
              {Array(Math.min(3, todoCountsArray[i])).fill(<div className={styles.todoIcon}></div>)}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
