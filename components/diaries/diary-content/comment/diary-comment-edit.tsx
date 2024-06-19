import useCommentPostMutation from '@/hooks/queries/diary/use-comment-mutation';
import styles from './diary-comment-edit.module.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface DiaryCommentEditProps {
  diaryId: string;
  defaultValue: string;
  onCancel: () => void;
}

export default function DiaryCommentEdit({ diaryId, defaultValue, onCancel }: DiaryCommentEditProps) {
  const commentMutation = useCommentPostMutation(diaryId);

  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    commentMutation.mutate({ content: formData.comment });
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
