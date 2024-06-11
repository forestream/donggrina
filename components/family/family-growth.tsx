import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './family-growth.module.scss';
import Image from 'next/image';
import 'swiper/css';

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
      <div className={styles['growth-item__image']}>
        <Image src="images/family/default-image.svg" alt="멤버 이름" fill />
      </div>
      <div className={styles['growth-item__image']}>
        <Image src="images/family/default-image.svg" alt="반려동물 이름" fill />
      </div>
    </Link>
  );
}
