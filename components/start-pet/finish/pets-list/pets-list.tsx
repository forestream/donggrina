import { useQuery } from '@tanstack/react-query';
import PetsApi from '@/api/my/pets';
import { PetData } from '@/types/my-page/pet';
import PetsListItem from '../pets-list-item/pets-list-item';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import styles from './pets-list.module.scss';

export default function PetsList() {
  const petsApi = new PetsApi();
  const { data, isLoading } = useQuery({
    queryKey: ['pets'],
    queryFn: () => {
      return petsApi.petsAllInquiry().then((res) => res.data);
    },
  });
  if (isLoading) return null;
  return (
    <Swiper className={styles.petSwiper} slidesPerView="auto" spaceBetween={16} wrapperTag="ul">
      {data.map((petsData: PetData) => {
        return (
          <SwiperSlide className={styles.swiperList} tag="li" key={petsData.petId}>
            <PetsListItem {...petsData} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
