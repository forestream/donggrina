import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FamilyGrowthItem from './family-growth-item';
import 'swiper/css';
import styles from './family-growth-list.module.scss';

export default function FamilyGrowthList() {
  return (
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
  );
}
