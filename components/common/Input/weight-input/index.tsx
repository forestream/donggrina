import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './weight-input.module.scss';
import { FormInput } from '../input-type';

export default function WeightInput({ name, type = 'text' }: FormInput) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const formatInputValue = (value: string): string => {
    return value.replace(/[^0-9.]/g, '');
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

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          id={name}
          type={type}
          {...register(name as string, {
            required: '필수 정보입니다.',
            validate: {
              min: (value) => parseFloat(value) >= 0.01 || '값은 0.01kg보다 커야 합니다.',
              max: (value) => parseFloat(value) <= 100 || '값은 100kg보다 작아야 합니다.',
            },
          })}
          onInput={handleInput}
        />
        <span>KG</span>
      </div>
      {errors[name as string] && <p className={styles.error}>{errors[name as string]?.message as string}</p>}
    </div>
  );
}
