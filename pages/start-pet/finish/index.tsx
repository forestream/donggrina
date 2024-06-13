import Title from '@/components/common/title/title';
import styles from './index.module.scss';
import { useQuery } from '@tanstack/react-query';
import PetsApi from '@/api/my/pets';

export default function FinishPet() {
  const petsApi = new PetsApi();
  const handleApi = () => {
    petsApi.petsAllInquiry();
  };
  const { data, refetch } = useQuery({
    queryKey: ['pets'],
    queryFn: handleApi,
    enabled: false, // 컴포넌트가 마운트될 때 자동으로 실행되지 않도록 설정.
  });
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
