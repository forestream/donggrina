import { Swiper, SwiperSlide } from 'swiper/react';
import CalendarInstance from '@/utils/date/date.utils';
import { useCalendarContext } from '@/components/calendar-compound/calendar';
import styles from './calendar-weekly.module.scss';

export default function CalendarWeekly() {
  const calendarContext = useCalendarContext();
  return (
    <Swiper className={styles['date-list']} slidesPerView={'auto'} spaceBetween={10} wrapperTag="ul">
      {CalendarInstance.DAY_LIST.map((date) => {
        const isToday = calendarContext.date === date;
        const selectedTodayClassName = isToday ? styles.selected : '';
        const dateItemClassName = `${styles['date-item']} ${selectedTodayClassName}`;
        return (
          <SwiperSlide
            key={date}
            tag="li"
            className={dateItemClassName}
            onClick={calendarContext.onSelectedDate.bind(null, date)}
          >
            <CalendarWeeklyItem date={date} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

function CalendarWeeklyItem(props: { date: number }) {
  const calendarContext = useCalendarContext();

  return (
    <button>
      <div>{CalendarInstance.calculateDate(calendarContext.month, props.date)}</div>
      <div>{props.date}</div>
    </button>
  );
}
