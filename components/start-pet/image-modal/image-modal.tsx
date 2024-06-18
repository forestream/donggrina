import { PropsWithChildren, ReactNode } from 'react';
import styles from './image-modal.module.scss';
import Button from '@/components/common/button/button';
import CloseSVG from '@/public/images/pets/plus-circle.svg';

interface ImageModalType {
  Modal: ({ children }: PropsWithChildren) => ReactNode;
  handleModal: (isOpen: boolean) => void;
}

export default function ImageModal({ Modal, handleModal }: ImageModalType) {
  const handleClose = () => {
    handleModal(false);
  };
  return (
    <Modal>
      <div className={styles.modalContainer}>
        <p>프로필 사진을 변경하시겠습니까?</p>
        <div className={styles.buttonBox}>
          <Button type="button" className="default">
            이미지 초기화 하기
          </Button>
          <Button type="button" className="primary">
            이미지 변경하기
          </Button>
        </div>
        <button className={styles.modalCloseButton} onClick={handleClose} type="button" title="모달 닫기">
          <CloseSVG />
        </button>
      </div>
    </Modal>
  );
}
