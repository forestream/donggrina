import Image from 'next/image';
import styles from './pet-radio.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '@/pages/calendar/create';

interface PetRadio {
  register: UseFormRegister<IFormInput>;
  petName: string;
  petImage: string;
}

/**
 * @param register - react-hook-form의 register 함수를 넣어주세요.
 * @param {string} petName - 반려동물 이름
 * @param {string} petImage - 반려동물 이미지 url
 */
export default function PetRadio({ register, petName, petImage }: PetRadio) {
  return (
    <label className={styles.petLabel}>
      <div className={styles.petImageContainer}>
        <input
          {...register('petName', { validate: (selected) => !!selected || '*반려동물을 선택해주세요.' })}
          value={petName}
          className={styles.petInput}
          type="radio"
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
