import { Control, useController } from 'react-hook-form';
import styles from './date-input.module.scss';
import { FormInput } from '../input-type';
import { ChangeEvent } from 'react';
interface DateInputProps extends FormInput {
  control: Control;
}

export default function DateInput({ name, control, type = 'text' }: DateInputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: '날짜를 입력해 주세요.',
      pattern: {
        value: /^\d{4}-\d{2}-\d{2}$/,
        message: '날짜 형식이 올바르지 않습니다.',
      },
    },
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    let formattedDate = input;

    if (input.length >= 5) formattedDate = `${input.slice(0, 4)}-${input.slice(4, 6)}`;
    if (input.length >= 7) formattedDate = `${input.slice(0, 4)}-${input.slice(4, 6)}-${input.slice(6, 8)}`;

    field.onChange(formattedDate);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input type={type} id={name} {...field} onChange={handleInputChange} placeholder="YYYY-MM-DD" />
      </div>
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}
