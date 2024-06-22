import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FamilyGrowthItem from '../item/family-growth-item';
import 'swiper/css';
import styles from './family-growth-list.module.scss';
import { GrowthData } from '@/types/growth';
import { motion } from 'framer-motion';
import { childrenHorizontalVariants, containerVariants } from '@/components/framer';

interface FamilyGrowthListProps {
  growthList: GrowthData[];
}

export default function FamilyGrowthList(props: FamilyGrowthListProps) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Swiper className={styles['growth-list']} slidesPerView="auto" spaceBetween={10} wrapperTag="ul">
        {props.growthList.map((growth) => (
          <SwiperSlide className={styles['growth-list__item']} tag="li" key={growth.id}>
            <motion.div className={styles.motionBox} variants={childrenHorizontalVariants}>
              <FamilyGrowthItem {...growth} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
