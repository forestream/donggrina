import styles from './calendar-container.module.scss';
import getSeventhDate from '@/utils/get-seventh-date';
import { useCalendarContext } from '../calendar-compound/calendar';
import getCalendarArray from '@/utils/get-calendar-array';
import classNames from 'classnames';
import { MonthlyTodos } from '@/api/calendar/request.type';

interface CalendarContainerProps {
  monthlyTodos: MonthlyTodos[];
}

export default function CalendarContainer({ monthlyTodos }: CalendarContainerProps) {
  const calendarContext = useCalendarContext();
  const year = calendarContext.year;
  const month = calendarContext.month + 1;
  const date = calendarContext.date;
  console.log(monthlyTodos);

  const { calendarArray, todoCountsArray } = getCalendarArray(year, month, monthlyTodos);

  const calendarCellClassNames = (cellIndex: number) =>
    classNames(styles.calendarCell, {
      [styles.red]: getSeventhDate(cellIndex),
    });

  return (
    <div className={styles.container}>
      {calendarArray.map((calendarCell, i) =>
        typeof calendarCell === 'string' ? (
          <div key={i + 'empty'} className={calendarCellClassNames(i)}>
            {calendarCell}
          </div>
        ) : (
          <div
            key={calendarCell}
            onClick={calendarContext.onSelectedDate.bind(null, calendarCell)}
            className={calendarCellClassNames(i)}
          >
            <div
              className={classNames(styles.date, {
                [styles.selected]: calendarCell == date,
              })}
            >
              {calendarCell}
            </div>
            <div className={styles.todoIconContainer}>
              {Array(Math.min(3, todoCountsArray[i] as number))
                .fill(null)
                .map((_, i) => (
                  <div key={i} className={styles.todoIcon}></div>
                ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
