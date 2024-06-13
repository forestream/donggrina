import Title from '@/components/common/title/title';
import styles from './index.module.scss';
import { useQuery } from '@tanstack/react-query';
import PetsApi from '@/api/my/pets';

export default function FinishPet() {
  const petsApi = new PetsApi();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['pets'],
    queryFn: () => {
      return petsApi.petsAllInquiry();
    },
  });
  if (isLoading) return null;
  console.log(data);
  return (
    <section className={styles.section}>
      <div>
        <Title>반려동물 등록 완료</Title>
        <button type="button">불러오기</button>
      </div>
    </section>
  );
}
