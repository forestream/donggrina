import React, { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './date-input.module.scss';
// import { validateDay, validateMonth, validateYear } from '@/utils/validations/validate-date';

interface FormInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  type?: string;
}

export default function DateInput({ label, type = 'text' }: FormInput) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>|</span>
        <label htmlFor={label}>{label}</label>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          id="year"
          type={type}
          placeholder="YYYY"
          {...register('year', {
            required: '필수 정보입니다.',
            min: { value: 1000, message: '년도는 4자리 숫자여야 합니다.' },
            max: { value: 9999, message: '년도는 4자리 숫자여야 합니다.' },
            valueAsNumber: true,
          })}
          onBlur={() => trigger('year')}
        />
        <span>-</span>
        <input
          className={styles.input}
          id="month"
          type={type}
          placeholder="MM"
          {...register('month', {
            required: '필수 정보입니다.',
            min: { value: 1, message: '월은 1부터 12 사이의 숫자여야 합니다.' },
            max: { value: 12, message: '월은 1부터 12 사이의 숫자여야 합니다.' },
            valueAsNumber: true,
          })}
          onBlur={() => trigger('month')}
        />
        <span>-</span>
        <input
          className={styles.input}
          id="day"
          type={type}
          placeholder="DD"
          {...register('day', {
            required: '필수 정보입니다.',
            min: { value: 1, message: '일은 1부터 31 사이의 숫자여야 합니다.' },
            max: { value: 31, message: '일은 1부터 31 사이의 숫자여야 합니다.' },
            valueAsNumber: true,
          })}
          onBlur={() => trigger('day')}
        />
      </div>
      {(errors.year || errors.month || errors.day) && (
        <p className={styles.error}>
          {(errors.year?.message || errors.month?.message || errors.day?.message) as string}
        </p>
      )}
    </div>
  );
}
