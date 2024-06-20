import { PropsWithChildren, ReactNode } from 'react';
import Button from '@/components/common/button/button';
import styles from './delete-member-modal.module.scss';
import { useMemberDeleteQuery } from '@/hooks/queries/my/family/usePostFamilyQueries';

interface DeleteMemberModalType {
  Modal: ({ children }: PropsWithChildren) => ReactNode;
  handleModal: (isOpen: boolean) => void;
  deleteModalValue: {
    id: number;
    nickname: string;
  };
}

export default function DeleteMemberModal({ Modal, handleModal, deleteModalValue }: DeleteMemberModalType) {
  const { id, nickname } = deleteModalValue;
  const { mutate } = useMemberDeleteQuery();
  const handleDelete = () => {
    mutate({ targetId: id });
    handleModal(false);
  };
  const handleClose = () => {
    handleModal(false);
  };
  return (
    <Modal>
      <div className={styles.textBox}>
        <p>
          <strong>{nickname}</strong>님을 내보내겠습니까?
        </p>
      </div>
      <div className={styles.buttonBox}>
        <Button type="button" className="default" onClick={handleDelete} leftRound>
          예
        </Button>
        <Button type="button" className="primary" onClick={handleClose} rightRound>
          아니요
        </Button>
      </div>
    </Modal>
  );
}
