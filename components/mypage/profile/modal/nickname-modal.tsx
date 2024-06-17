import React, { PropsWithChildren } from 'react';
import Button from '@/components/common/button/button';
import Form from '@/components/common/Form';
import { FieldValues, useForm } from 'react-hook-form';
import styles from './nickname-modal.module.scss';

interface NicknameModalProps {
  modal: (props: PropsWithChildren) => React.ReactNode;
  nickname: string;
}

export default function NicknameModal(props: NicknameModalProps) {
  const methods = useForm<FieldValues>({
    mode: 'onBlur',
    defaultValues: {
      nickname: props.nickname,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const isDisabled = methods.watch().nickname.length === 0 || methods.watch().nickname === props.nickname;
  const buttonClassName = isDisabled ? 'disabled' : 'primary';

  return (
    <props.modal>
      <div className={styles.wrapper}>
        <Form onSubmit={methods.handleSubmit(onSubmit)} methods={methods}>
          <div className={styles['input-layout']}>
            <Form.Label htmlFor="nickname">닉네임 변경하기</Form.Label>
            <Form.MainInput name="nickname" placeholder="변경할 닉네임을 작성해주세요." />
          </div>
          <div className={styles.button}>
            <Button type="submit" className={buttonClassName} disabled={isDisabled}>
              변경하기
            </Button>
          </div>
        </Form>
      </div>
    </props.modal>
  );
}
