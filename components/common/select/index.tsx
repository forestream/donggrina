import React from 'react';
import styles from './select.module.scss';
import { FormInput } from '../Input/input-type';

export default function Select({ name, label }: FormInput) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>|</span>
        <label htmlFor={name}>{label}</label>
      </div>
      <select></select>
    </div>
  );
}
