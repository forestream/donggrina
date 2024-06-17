import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './family-growth.module.scss';
import FamilyGrowthItem from './family-growth-item';
import FamilyGrowthEmpty from './family-growth-empty';

export default function FamilyGrowth() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>성장기록</h2>
      {/* <FamilyGrowthEmpty /> */}
      <Swiper className={styles['growth-list']} slidesPerView="auto" spaceBetween={10} wrapperTag="ul">
        <SwiperSlide className={styles['growth-list__item']} tag="li">
          <FamilyGrowthItem />
        </SwiperSlide>
        <SwiperSlide className={styles['growth-list__item']} tag="li">
          <FamilyGrowthItem />
        </SwiperSlide>
        <SwiperSlide className={styles['growth-list__item']} tag="li">
          <FamilyGrowthItem />
        </SwiperSlide>
        <SwiperSlide className={styles['growth-list__item']} tag="li">
          <FamilyGrowthItem />
        </SwiperSlide>
        <SwiperSlide className={styles['growth-list__item']} tag="li">
          <FamilyGrowthItem />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
