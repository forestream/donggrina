import styles from './diary-comment-edit.module.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { UseMutateFunction } from '@tanstack/react-query';

interface DiaryCommentEditProps {
  defaultValue: string;
  mutationFn: UseMutateFunction<void, Error, string, unknown>;
  onCancel: () => void;
}

export default function DiaryCommentEdit({ defaultValue, mutationFn, onCancel }: DiaryCommentEditProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    mutationFn(formData.comment, {
      onSuccess: onCancel,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input className={styles.input} {...register('comment')} type="text" defaultValue={defaultValue} />
      <div className={styles.buttons}>
        <button>수정</button>
        <button type="button" onClick={onCancel}>
          취소
        </button>
      </div>
    </form>
  );
}
