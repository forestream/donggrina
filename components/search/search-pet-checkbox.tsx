import Image from 'next/image';
import styles from './search-pet-checkbox.module.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface SearchPetCheckboxProps {
  register: UseFormRegister<FieldValues>;
  petName: string;
  petImage: string;
  selected: string[];
}

export default function SearchPetCheckbox({ register, petName, petImage, selected }: SearchPetCheckboxProps) {
  const isSelected = selected.includes(petName);

  return (
    <label className={styles.petLabel}>
      <div className={styles.petImageContainer}>
        <input
          {...register('pets', { validate: (selected: string) => !!selected || '*반려동물을 선택해주세요.' })}
          value={petName}
          className={styles.petInput}
          type="checkbox"
          checked={isSelected}
        />
        <Image className={styles.petImage} src={petImage} alt="반려동물 프로필 사진" fill />
        <Image
          src="/images/calendar/check-circle.svg"
          alt="체크 표시"
          width={20}
          height={20}
          className={styles.check}
        />
      </div>
      <p className={styles.petName}>{petName}</p>
    </label>
  );
}
