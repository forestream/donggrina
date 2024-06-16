import { AddGrowthData } from '@/types/growth/details';
import { UseFormRegister } from 'react-hook-form';
import styles from './category-inputs.module.scss';

interface CategoryInputsProps {
  selectedCategory: string;
  register: UseFormRegister<AddGrowthData>;
}

export default function CategoryInputs({ selectedCategory, register }: CategoryInputsProps) {
  switch (selectedCategory) {
    case '간식':
      return (
        <div className={styles.inputGroup}>
          <label>간식</label>
          <input {...register('content.snack')} placeholder="간식의 이름을 입력해주세요" className={styles.input} />
        </div>
      );
    case '이상 증상':
      return (
        <div className={styles.inputGroup}>
          <label>이상 증상</label>
          <input
            {...register('content.abnormalSymptom')}
            placeholder="이상증상을 입력해주세요"
            className={styles.input}
          />
        </div>
      );
    case '병원 기록':
      return (
        <>
          <div className={styles.inputGroup}>
            <label>병원명</label>
            <input
              {...register('content.hospitalName')}
              placeholder="병원의 이름을 입력해주세요"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>증상</label>
            <input {...register('content.symptom')} placeholder="증상을 입력해주세요" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label>진료 내용</label>
            <input {...register('content.diagnosis')} placeholder="진료 내용을 입력해주세요" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label>복용 방법</label>
            <input
              {...register('content.medicationMethod')}
              placeholder="복용 방법을 입력해주세요"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>금액</label>
            <input {...register('content.price')} placeholder="1,000 ₩" className={styles.input} />
          </div>
        </>
      );
    default:
      return (
        <div className={styles.inputGroup}>
          <label>사료</label>
          <input {...register('content.food')} placeholder="사료의 이름을 입력해주세요" className={styles.input} />
        </div>
      );
  }
}
