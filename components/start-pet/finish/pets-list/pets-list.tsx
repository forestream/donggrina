import { PetData } from '@/types/my-page/pet';
import PetsListItem from '../pets-list-item/pets-list-item';
import { useGetPetsAllQuery } from '@/hooks/queries/my/pets/useGetPetsQueries';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import styles from './pets-list.module.scss';
import PetImageSkeleton from '@/components/skeleton/mypage/pet/pet-image-skeleton';

export default function PetsList() {
  const { data, isLoading } = useGetPetsAllQuery();
  if (isLoading) return <PetImageSkeleton />;
  if (!data) return null;
  return (
    <Swiper className={styles.petSwiper} slidesPerView="auto" spaceBetween={16} wrapperTag="ul">
      {data.data.map((petsData: PetData) => {
        return (
          <SwiperSlide className={styles.swiperList} tag="li" key={petsData.petId}>
            <PetsListItem {...petsData} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
