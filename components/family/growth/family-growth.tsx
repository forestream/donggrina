import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './family-growth.module.scss';
import FamilyGrowthItem from './family-growth-item';
import FamilyGrowthEmpty from './family-growth-empty';
import { useFetchGrowth } from '@/hooks/queries/family';

export default function FamilyGrowth() {
  const growthQuery = useFetchGrowth('2024-06-16');

  if (growthQuery.isLoading) return <p>로딩중...</p>;

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>성장기록</h2>
      {!growthQuery.data!.length && <FamilyGrowthEmpty />}
      {!!growthQuery.data!.length && (
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
      )}
    </section>
  );
}
