import React, { useEffect, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import styles from './date-input.module.scss';
import { FormInput } from '../input-type';
import { dateValidation } from '@/utils/validations/date-validation';
import { LocalDate } from '@/types/date';
import { convertToLocalDate } from '@/utils/convert-local-date';

interface DateInputProps extends FormInput {
  control: Control;
}

export default function DateInput({ name, control, type = 'text' }: DateInputProps) {
  const [error, setError] = useState('');
  const [localDate, setLocalDate] = useState<LocalDate>({ year: '', month: '', day: '' });

  const { field } = useController({
    name,
    control,
    rules: { required: true },
  });

  const formatInputValue = (value: string): string => {
    return value.replace(/[^0-9]/g, '');
  };
  const updateInputValue = (input: HTMLInputElement, value: string) => {
    input.value = value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatInputValue(value);
    if (value !== formattedValue) {
      updateInputValue(e.target, formattedValue);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputType = e.target.id;
    const value = e.target.value;
    const valueToNumber = Number(e.target.value);
    const validator = dateValidation[inputType];

    if (validator) {
      if (valueToNumber < validator.min || valueToNumber > validator.max) {
        setError(validator.errorMessage);
      } else {
        setLocalDate((prevState) => ({
          ...prevState,
          [inputType]: value,
        }));
        setError('');
      }
    }
  };

  useEffect(() => {
    const newLocalDate = convertToLocalDate(localDate);
    field.onChange(newLocalDate);
  }, [localDate, field]);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${styles.year}`}
          id="year"
          type={type}
          placeholder="YYYY"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <span>-</span>
        <input
          className={`${styles.input} ${styles.year}`}
          id="month"
          type={type}
          placeholder="MM"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <span>-</span>
        <input
          className={`${styles.input} ${styles.year}`}
          id="day"
          type={type}
          placeholder="DD"
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
