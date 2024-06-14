import Image from 'next/image';
import styles from './pet-radio.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '@/pages/calendar/create';

interface PetRadio {
  register: UseFormRegister<IFormInput>;
  petName: string;
  petImage: string;
}

export default function PetRadio({ register, petName, petImage }: PetRadio) {
  return (
    <label className={styles.petLabel}>
      <div className={styles.petImage}>
        <input
          {...register('petName', { validate: (selected) => !!selected || '*반려동물을 선택해주세요.' })}
          value={petName}
          className={styles.petInput}
          type="radio"
        />
        <Image src={petImage} alt="반려동물 프로필 사진" fill />
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
