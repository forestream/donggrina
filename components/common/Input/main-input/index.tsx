import React, { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './main-input.module.scss';

interface FormInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
}

export default function MainInput({ name, label, type = 'text' }: FormInput) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>|</span>
        <label htmlFor={name}>{label}</label>
      </div>
      <input
        className={styles.input}
        id={name}
        type={type}
        {...register(name, {
          required: '필수 정보입니다.',
        })}
      />
      {errors[name] && <p className={styles.error}>{errors[name]?.message as string}</p>}
    </div>
  );
}
