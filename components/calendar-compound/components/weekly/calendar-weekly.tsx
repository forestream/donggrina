import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import CalendarInstance from '@/utils/date/date.utils';
import { useCalendarContext } from '@/components/calendar-compound/calendar';
import styles from './calendar-weekly.module.scss';

export default function CalendarWeekly() {
  const calendarContext = useCalendarContext();
  const daysInMonth = CalendarInstance.daysInMonth(calendarContext.year, calendarContext.month);
  const dayList = CalendarInstance.DAY_LIST(daysInMonth);

  const handleSwiper = (swiper: SwiperClass) => swiper.slideTo(calendarContext.date - 1, 0);
  return (
    <Swiper
      className={styles['date-list']}
      slidesPerView={'auto'}
      spaceBetween={10}
      wrapperTag="ul"
      onAfterInit={handleSwiper}
    >
      {dayList.map((date) => {
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
  const day = CalendarInstance.calculateDay(calendarContext.year, calendarContext.month, props.date);
  const isSunday = day === '일';
  return (
    <div>
      <div className={isSunday ? styles.sunday : ''}>{day}</div>
      <div className={isSunday ? styles.sunday : ''}>{props.date}</div>
    </div>
  );
}
