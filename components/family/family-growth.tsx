import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AvatarImage } from '../avatar/avatar';
import 'swiper/css';
import styles from './family-growth.module.scss';

export default function FamilyGrowth() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>성장기록</h2>
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

function FamilyGrowthItem() {
  return (
    <Link href="/Hello" className={styles['growth-item__layout']}>
      <div className={styles['growth-item__type']}>{/* 이미지 들어갈 곳. */}</div>
      <AvatarImage border="main" />
      <AvatarImage border="main" />
    </Link>
  );
}
