import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper/modules';
import styles from './month.module.scss';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const CALENDAR_MONTH: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const MonthSwiper = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const handleMonthClick = (month: string) => {
    setSelectedMonth(month);
    console.log(month);
  };

  return (
    <Swiper
      className={styles.month}
      modules={[Scrollbar, Pagination]}
      slidesPerView={7}
      spaceBetween={17}
      freeMode={true}
    >
      {CALENDAR_MONTH.map((month) => (
        <SwiperSlide
          key={month}
          onClick={() => handleMonthClick(month)}
          className={month === selectedMonth ? styles.selected : ''}
        >
          {month}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MonthSwiper;
