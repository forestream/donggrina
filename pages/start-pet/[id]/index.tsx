import Title from '@/components/common/title/title';
import { useRouter } from 'next/router';
import EntryForm from '@/components/start-pet/entry-form/entry-form';
import styles from './index.module.scss';
import Button from '@/components/common/button/button';
import { usePetsModifyQuery } from '@/hooks/queries/my/pets/usePostPetsQueries';
import { FieldValues } from 'react-hook-form';
import { imageUpload } from '@/api/image-api';
import { useGetPetsDetailsQuery } from '@/hooks/queries/my/pets/useGetPetsQueries';

export default function PetEntryModify() {
  const router = useRouter();
  const { query } = router;
  const { data, isLoading } = useGetPetsDetailsQuery(query!.id as string);
  const { id } = router.query;
  const { mutate } = usePetsModifyQuery();

  const handleSubmit = async (data: FieldValues) => {
    if (typeof data.imageId === 'object' && data.imageId !== null) {
      const submitData = { files: data.imageId[0] };
      const response = await imageUpload(submitData);
      data.imageId = response.data.data[0];
    }
    if (data.petProfileImageId && data.imageId === null) {
      data.imageId = data.petProfileImageId;
    }
    if (id) {
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
        petsId: id.toString(),
      });
    }
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
