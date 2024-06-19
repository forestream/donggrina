import { useState } from 'react';
import styles from './diary-comment-form.module.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import { UseMutateFunction } from '@tanstack/react-query';

interface DiaryCommentFormProps {
  placeholder: string;
  mutateFn: UseMutateFunction<
    void,
    Error,
    {
      content: string;
      parentCommentId: number | null;
    },
    unknown
  >;
  parentCommentId?: number | null;
}

export default function DiaryCommentForm({ placeholder, mutateFn, parentCommentId = null }: DiaryCommentFormProps) {
  const [isFocused, setIsFocused] = useState(false);

  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    console.log(formData);
    mutateFn(
      { content: formData.comment, parentCommentId },
      {
        onSuccess: () => reset(),
      },
    );
  };

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.commentInput}
        {...register('comment', {
          onBlur: handleBlur,
        })}
        type="text"
        placeholder={placeholder}
        onFocus={handleFocus}
      />
      <button className={styles.commentButton}>
        <Image
          src={isFocused ? '/images/diaries/post-comment-on.svg' : '/images/diaries/post-comment-off.svg'}
          alt="댓글 등록 버튼"
          width={24}
          height={24}
        />
      </button>
    </form>
  );
}
