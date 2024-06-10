import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './date-input.module.scss';
import { FormInput } from '../input-type';
import { CustomRegister } from '@/utils/validations/validate-date';
import FormLabel from '../../Label';

export default function DateInput({ label, type = 'text' }: FormInput) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const formatInputValue = (value: string): string => {
    return value.replace(/[^0-9]/g, '');
  };
  const updateInputValue = (input: HTMLInputElement, value: string) => {
    input.value = value;
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatInputValue(value);
    if (value !== formattedValue) {
      updateInputValue(e.target, formattedValue);
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputType = e.target.id;
    trigger(inputType);
  };

  return (
    <div className={styles.container}>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${styles.year}`}
          id="year"
          type={type}
          placeholder="YYYY"
          {...CustomRegister({ register, inputType: 'year', handleBlur, handleInput })}
        />
        <span>-</span>
        <input
          className={`${styles.input} ${styles.year}`}
          id="month"
          type={type}
          placeholder="MM"
          {...CustomRegister({ register, inputType: 'month', handleBlur, handleInput })}
        />
        <span>-</span>
        <input
          className={`${styles.input} ${styles.year}`}
          id="day"
          type={type}
          placeholder="DD"
          {...CustomRegister({ register, inputType: 'day', handleBlur, handleInput })}
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
