import { useGetPetsAllQuery } from '@/hooks/queries/my/pets/useGetPetsQueries';
import { PetData } from '@/types/my-page/pet';
import PetListItem from '../pet-list-item/pet-list-item';
import styles from './pet-list.module.scss';

export default function PetList() {
  const { data } = useGetPetsAllQuery();
  if (!data) return null;
  return (
    <ul className={styles.petList}>
      {data.data.map((petData: PetData) => {
        return <PetListItem key={petData.petId} length={data.data.length} {...petData} />;
      })}
    </ul>
  );
}
