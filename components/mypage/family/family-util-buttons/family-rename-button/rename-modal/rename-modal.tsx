import { PropsWithChildren, ReactNode } from 'react';
import Form from '@/components/common/Form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/common/button/button';
import styles from './rename-modal.module.scss';
import { useFamilyModifyQuery } from '@/hooks/queries/my/family/usePostFamilyQueries';

interface RenameModalType {
  Modal: ({ children }: PropsWithChildren) => ReactNode;
  handleModal: (isOpen: boolean) => void;
  renameData: {
    name: string;
    id: number;
  };
}

export default function RenameModal({ Modal, handleModal, renameData }: RenameModalType) {
  const methods = useForm<FieldValues>({
    defaultValues: {
      name: renameData.name,
    },
    mode: 'onBlur',
  });
  const { handleSubmit, formState } = methods;
  const buttonClassCondition = formState.isSubmitting ? 'disabled' : 'primary';
  const { mutate } = useFamilyModifyQuery();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutate({ data: { name: data.name }, groupId: renameData.id });
    handleModal(false);
  };
  return (
    <Modal>
      <div className={styles.form}>
        <Form onSubmit={handleSubmit(onSubmit)} methods={methods}>
          <div className={styles.inputBox}>
            <Form.Label htmlFor="name">가족이름 변경하기</Form.Label>
            <Form.MainInput name="name" placeholder="gg" />
          </div>
          <div className={styles.buttonBox}>
            <Button type="submit" className={buttonClassCondition}>
              변경하기
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
