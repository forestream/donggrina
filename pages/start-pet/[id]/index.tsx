import PetsApi from '@/api/my/pets';
import Title from '@/components/common/title/title';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import EntryForm from '@/components/start-pet/entry-form/entry-form';
import styles from './index.module.scss';
import Button from '@/components/common/button/button';

export default function PetEntryModify() {
  const { query } = useRouter();
  const petsApi = new PetsApi();
  const { data, isLoading } = useQuery({
    queryKey: ['petsDetail', query.id],
    queryFn: () => {
      return petsApi.petsDetailsInquiry(query.id!.toString());
    },
  });
  const handleSubmit = (data) => {
    console.log(data);
  };
  if (isLoading) return null;
  return (
    <section className={styles.section}>
      <Title>반려동물 수정</Title>
      <EntryForm onSubmit={handleSubmit} defaultData={data.data}>
        <Button type="submit" className="primary" round>
          반려동물 수정하기
        </Button>
      </EntryForm>
    </section>
  );
}
