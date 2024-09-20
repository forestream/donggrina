import { useFormContext } from 'react-hook-form';
import DiaryEditPetList from '@/components/diaries/edit/pets/diary-edit-pet-list';
import styles from './diary-edit-pets.module.scss';
import { Pet } from '@/apis/calendar/request.type';

interface DiaryEditPetsProps {
  pets: Pet[];
  selectedPets: number[];
}

export default function DiaryEditPets(props: DiaryEditPetsProps) {
  const { setValue } = useFormContext();
  const handleAllSelectedPet = () => {
    setValue(
      'pets',
      props.pets.map((pet) => String(pet.petId)),
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <h2>반려동물 선택</h2>
        <button onClick={handleAllSelectedPet} type="button">
          전체 선택
        </button>
      </div>
      <DiaryEditPetList pets={props.pets} selectedPets={props.selectedPets} />
    </div>
  );
}
