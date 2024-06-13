import Title from '@/components/common/title/title';
import styles from './index.module.scss';
import EntryForm from '@/components/start-pet/entry-form/entry-form';
import { imageUpload } from '@/api/image-api';
import PetsApi from '@/api/my/pets';
import { FieldValues } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function StartPet() {
  const router = useRouter();
  const petsApi = new PetsApi();
  const handleSubmit = async (data: FieldValues) => {
    try {
      if (data.imageId && data.imageId[0]) {
        const submitData = { files: data.imageId[0] };
        const response = await imageUpload(submitData);
        data.imageId = response.data.data[0];
      }
      await petsApi.petsAdd({
        imageId: data.imageId,
        name: data.name,
        sex: data.sex,
        birthDate: data.birthDate,
        adoptionDate: data.adoptionDate,
        type: data.type,
        species: data.species,
        weight: Number(data.weight),
        isNeutered: Boolean(data.isNeutered),
      });
      router.replace('/start-pet/finish');
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };
  return (
    <section className={styles.section}>
      <Title>반려동물 추가</Title>
      <EntryForm onSubmit={handleSubmit} />
    </section>
  );
}
