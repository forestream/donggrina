import styles from './diary-edit-header.module.scss';
import DiaryEditPets from '@/components/diaries/edit/diary-edit-pets';
import { useFormContext } from 'react-hook-form';
import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';

export default function DiaryEditHeader() {
  const petsQuery = usePetsQuery();
  const { setValue } = useFormContext();

  if (petsQuery.isLoading) return '로딩중...';

  const handleAllSelectedPet = () => petsQuery.data!.map((pet) => setValue(pet.name, pet.name));

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <h2>반려동물 선택</h2>
        <button onClick={handleAllSelectedPet}>전체 선택</button>
      </div>
      <DiaryEditPets />
    </div>
  );
}
