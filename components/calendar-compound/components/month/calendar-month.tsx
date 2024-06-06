import { Swiper, SwiperSlide } from 'swiper/react';
import { useCalendarContext } from '../../calendar';
import CalendarInstance from '@/utils/date/date.utils';
import 'swiper/css';
import styles from './calendar-month.module.scss';

export default function CalendarMonth() {
  const calendarContext = useCalendarContext();

  return (
    <Swiper className={styles['month-list']} slidesPerView={'auto'} spaceBetween={20} wrapperTag="ul">
      {CalendarInstance.MONTH_LIST.map((month, index) => {
        const isCurrentMonth = calendarContext.month === month;
        const selectedMonthClassName = isCurrentMonth ? styles.selected : '';
        const monthItemClassName = `${styles.month} ${selectedMonthClassName}`;
        return (
          <SwiperSlide
            key={month}
            tag="li"
            onClick={calendarContext.onSelectedMonth.bind(null, month)}
            className={monthItemClassName}
            tabIndex={index}
          >
            <CalendarMonthItem month={month} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

function CalendarMonthItem(props: { month: number }) {
  const transformedMonth = (props.month + 1).toString().padStart(2, '0');
  return <span>{transformedMonth}</span>;
}
