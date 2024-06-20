import { useGetPetsAllQuery } from '@/hooks/queries/my/pets/useGetPetsQueries';
import { PetData } from '@/types/my-page/pet';
import PetListItem from '../pet-list-item/pet-list-item';
import FamilySkeleton from '@/components/skeleton/mypage/family/family-skeleton';

export default function PetList() {
  const { data, isLoading } = useGetPetsAllQuery();

  if (isLoading) return <FamilySkeleton />;
  if (!data) return null;

  return (
    <ul>
      {data.data.map((petData: PetData) => (
        <PetListItem key={petData.petId} length={data.data.length} {...petData} />
      ))}
    </ul>
  );
}
