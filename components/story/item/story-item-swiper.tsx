import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './story-item-swiper.module.scss';
import { Story } from '@/types/story';

export default function StoryItemSwiper(props: Pick<Story, 'images'>) {
  return (
    <Swiper
      className={styles.swiper}
      slidesPerView={1}
      wrapperTag="ul"
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {props.images.map((image) => (
        <SwiperSlide className={styles['image-wrapper']} tag="li" key={image}>
          <Image src={image} alt="" fill objectFit="cover" objectPosition="center" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
