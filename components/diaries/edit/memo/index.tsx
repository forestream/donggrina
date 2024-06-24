import React from 'react';
import styles from './diary-edit-memo.module.scss';
import { useFormContext } from 'react-hook-form';

export default function MemoItem() {
  const { register } = useFormContext<{ memo: string }>();

  return (
    <div className={styles.wrapper}>
      <textarea
        {...register('memo')}
        className={styles.memo}
        id="content.memo"
        placeholder={`메모\n어떤 일정인지 자세하게 기록하실 수 있어요!`}
      />
    </div>
  );
}
