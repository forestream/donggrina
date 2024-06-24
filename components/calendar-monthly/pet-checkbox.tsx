import Image from 'next/image';
import styles from './pet-radio.module.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IFormInput } from '@/types/calendar';
import { GrowthDetailsData } from '@/types/growth/details';
import { DiaryDetail } from '@/types/diary/details';
import { ChangeEvent } from 'react';

interface PetRadio {
  register:
    | UseFormRegister<IFormInput & FieldValues>
    | UseFormRegister<GrowthDetailsData & FieldValues>
    | UseFormRegister<{ [key: string]: string[] } & FieldValues>;
  petName: string;
  petImage: string;
  defaultPet?: string;
  petId: number;
}

/**
 * @param register - react-hook-form의 register 함수를 넣어주세요.
 * @param {string} petName - 반려동물 이름
 * @param {string} petImage - 반려동물 이미지 url
 * @param {string} defaultPet - 수정 페이지에서 체크되어 있어야 하는 반려동물 이름
 */
export default function PetCheckbox({ petId, register, petName, petImage, defaultPet = '' }: PetRadio) {
  return (
    <label className={styles.petLabel}>
      <div className={styles.petImageContainer}>
        <input
          {...register('pets')}
          value={+petId}
          className={styles.petInput}
          type="checkbox"
          name="pets"
          defaultChecked={defaultPet === petName}
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
