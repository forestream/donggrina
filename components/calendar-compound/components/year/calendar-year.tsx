import { useCalendarContext } from '../../calendar';
import { Swiper, SwiperSlide } from 'swiper/react';
import CalendarInstance from '@/utils/date/date.utils';
import styles from './calendar-year.module.scss';

export default function CalendarYear() {
  const calendarContext = useCalendarContext();
  const yearsList = CalendarInstance.YEAR_LIST;
  return (
    <Swiper
      className={styles['calendar-year-list']}
      slidesPerView="auto"
      spaceBetween={10}
      wrapperTag="ul"
      onAfterInit={(swiper) => (swiper.activeIndex = calendarContext.year - 1)}
    >
      {yearsList.map((year) => {
        const isToday = calendarContext.year === year;
        const selectedTodayClassName = isToday ? styles.selected : '';
        const yearItemClassName = `${styles['calendar-year-item']} ${selectedTodayClassName}`;
        return (
          <SwiperSlide
            key={year}
            tag="li"
            className={yearItemClassName}
            onClick={calendarContext.onSelectedYear.bind(null, year)}
          >
            <button key={year}>{year}</button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
