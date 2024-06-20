import Image from 'next/image';
import styles from './search-pet-checkbox.module.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Pet } from '@/api/calendar/request.type';

interface SearchPetCheckboxProps {
  register: UseFormRegister<FieldValues>;
  service: 'family' | 'calendar' | 'diary' | 'growth';
  pet: Pet;
  selected: (string | number)[];
}

export default function SearchPetCheckbox({ register, service, pet, selected }: SearchPetCheckboxProps) {
  const value = pet.name;
  const isSelected = selected.includes(value);
  console.log(selected);

  return (
    <label className={styles.petLabel}>
      <div className={styles.petImageContainer}>
        <input
          {...register('pets', { validate: (selected: string) => !!selected || '*반려동물을 선택해주세요.' })}
          value={value}
          className={styles.petInput}
          type="checkbox"
          checked={isSelected}
        />
        <Image className={styles.petImage} src={pet.imageUrl} alt="반려동물 프로필 사진" fill />
        <Image
          src="/images/calendar/check-circle.svg"
          alt="체크 표시"
          width={20}
          height={20}
          className={styles.check}
        />
      </div>
      <p className={styles.petName}>{pet.name}</p>
    </label>
  );
}
