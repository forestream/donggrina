import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './family-growth.module.scss';
import FamilyGrowthItem from './family-growth-item';
import FamilyGrowthEmpty from './family-growth-empty';

// {
//   "id": 2,
//   "writerProfileImageUrl": "qruwoerwfq.jpeg",
//   "petProfileImageUrl": "qwlrqqwerpowu.jpeg",
//   "category": "간식",
//   "dateTime": "2024-06-04T16:39:19.221816",
//   "nickname": "왕꿈틀이",
//   "isMine": false
//  },

export default function FamilyGrowth() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>성장기록</h2>
      <FamilyGrowthEmpty />
      {/* <Swiper className={styles['growth-list']} slidesPerView="auto" spaceBetween={10} wrapperTag="ul">
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
      </Swiper> */}
    </section>
  );
}
