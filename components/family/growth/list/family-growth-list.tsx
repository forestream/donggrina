import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FamilyGrowthItem from '../item/family-growth-item';
import 'swiper/css';
import styles from './family-growth-list.module.scss';
import { GrowthData } from '@/types/growth';

interface FamilyGrowthListProps {
  growthList: GrowthData[];
}

export default function FamilyGrowthList(props: FamilyGrowthListProps) {
  return (
    <Swiper className={styles['growth-list']} slidesPerView="auto" spaceBetween={10} wrapperTag="ul">
      {props.growthList.map((growth) => (
        <SwiperSlide className={styles['growth-list__item']} tag="li" key={growth.id}>
          <FamilyGrowthItem />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
