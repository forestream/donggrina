import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from '@/components/common/Input/Input.module.scss';

const FormInput = ({ name, label, type = 'text' }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.input}
        id={name}
        type={type}
        {...register(name, {
          required: '필수 정보입니다.',
        })}
      />
      {errors[name] && <p className={styles.error}>{errors[name].message}</p>}
    </div>
  );
};

export default FormInput;
