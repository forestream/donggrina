import Title from '@/components/common/title/title';
import EntryForm from '@/components/start-pet/entry-form/entry-form';
import { imageUpload } from '@/apis/image-api';
import { FieldValues } from 'react-hook-form';
import Button from '@/components/common/button/button';
import { usePetsAddQuery } from '@/hooks/queries/my/pets/usePostPetsQueries';
import { useRouter } from 'next/router';

interface AddPetFormType {
  routeUrl: string;
}

export default function AddPetForm({ routeUrl }: AddPetFormType) {
  const router = useRouter();
  const { mutate } = usePetsAddQuery();
  const handleSubmit = async (data: FieldValues) => {
    try {
      if (data.imageId && data.imageId[0]) {
        const submitData = { files: data.imageId[0] };
        const response = await imageUpload(submitData);
        data.imageId = response.data.data[0];
      }
      mutate(
        {
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
        },
        {
          onSuccess: () => {
            router.push(routeUrl);
          },
        },
      );
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };
  return (
    <section style={{ padding: '126px 24px 51px' }}>
      <Title>반려동물 추가</Title>
      <EntryForm onSubmit={handleSubmit}>
        <Button type="submit" className="primary" round>
          반려동물 추가하기
        </Button>
      </EntryForm>
    </section>
  );
}
