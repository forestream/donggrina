import Image from 'next/image';
import styles from './pet-radio.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '@/pages/calendar/create';

interface PetRadio {
  register: UseFormRegister<IFormInput>;
  petName: string;
}

export default function PetRadio({ register, petName }: PetRadio) {
  return (
    <label className={styles.petLabel}>
      <div className={styles.petImage}>
        <input
          {...register('petName', { validate: (selected) => !!selected || '*반려동물을 선택해주세요.' })}
          value={petName}
          className={styles.petInput}
          type="radio"
        />

        <Image className={styles.petOn} src={`/images/calendar/${'dog'}-on.svg`} alt="반려동물 선택 상태" fill />
        <Image className={styles.petOff} src={`/images/calendar/${'dog'}-off.svg`} alt="반려동물 선택 해제 상태" fill />
      </div>
      <p className={styles.petName}>{petName}</p>
    </label>
  );
}
