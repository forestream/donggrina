import React, { InputHTMLAttributes } from 'react';
import styles from './label.module.scss';

interface FormLabel extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
}

export default function FormLabel({ htmlFor, children }: FormLabel) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      <span className={styles.labelText}>{children}</span>
    </label>
  );
}
