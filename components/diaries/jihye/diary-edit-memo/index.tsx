import React from 'react';
import styles from './diary-edit-memo.module.scss';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface MemoItemProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  fieldName: Path<T>;
}
export default function MemoItem<T extends FieldValues>({ register, fieldName }: MemoItemProps<T>) {
  return (
    <textarea
      {...register(fieldName)}
      className={styles.memo}
      id="content.memo"
      placeholder={`메모\n어떤 일정인지 자세하게 기록하실 수 있어요!`}
    />
  );
}
