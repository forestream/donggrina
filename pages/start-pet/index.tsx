import Title from '@/components/common/title/title';
import styles from './index.module.scss';
import EntryForm from '@/components/start-pet/entry-form/entry-form';
import { imageUpload } from '@/api/image-api';
import PetsApi from '@/api/my/pets';
import { FieldValues } from 'react-hook-form';

export default function StartPet() {
  const petsApi = new PetsApi();
  const handleSubmit = async (data: FieldValues) => {
    if (data.files && data.files[0]) {
      const submitData = {
        files: data.files[0],
      };
      try {
        const response = await imageUpload(submitData);
        const imgId = response.data.data[0];
        data.imageId = imgId;
      } catch {
        console.log('에러');
      }
    }
    try {
      const petsResponse = await petsApi.petsAdd({
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
      console.log(petsResponse);
    } catch {
      console.log('에러');
    }
  };
  return (
    <section className={styles.section}>
      <Title>반려동물 추가</Title>
      <EntryForm onSubmit={handleSubmit} />
    </section>
  );
}
