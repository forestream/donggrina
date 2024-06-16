import Title from '@/components/common/title/title';
import styles from './index.module.scss';
import EntryForm from '@/components/start-pet/entry-form/entry-form';
import { imageUpload } from '@/api/image-api';
import { FieldValues } from 'react-hook-form';
import Button from '@/components/common/button/button';
import { usePetsAddQuery } from '@/hooks/queries/my/pets/usePostPetsQueries';

export default function StartPet() {
  const { mutate } = usePetsAddQuery();
  const handleSubmit = async (data: FieldValues) => {
    try {
      if (data.imageId && data.imageId[0]) {
        const submitData = { files: data.imageId[0] };
        const response = await imageUpload(submitData);
        data.imageId = response.data.data[0];
      }
      mutate({
        data: {
          imageId: data.imageId,
          name: data.name,
          sex: data.sex,
          birthDate: data.birthDate,
          adoptionDate: data.adoptionDate,
          type: data.type,
          species: data.species,
          weight: Number(data.weight),
          isNeutered: Boolean(data.isNeutered),
        },
      });
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };
  return (
    <section className={styles.section}>
      <Title>반려동물 추가</Title>
      <EntryForm onSubmit={handleSubmit}>
        <Button type="submit" className="primary" round>
          반려동물 추가하기
        </Button>
      </EntryForm>
    </section>
  );
}
