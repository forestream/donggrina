import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './main-input.module.scss';
import { FormInput } from '../input-type';

export default function MainInput({ name, type = 'text', ...props }: FormInput) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        id={name}
        type={type}
        {...props}
        {...register(name as string, {
          required: '필수 정보입니다.',
        })}
      />
      {errors[name as string] && <p className={styles.error}>{errors[name as string]?.message as string}</p>}
    </div>
  );
}
