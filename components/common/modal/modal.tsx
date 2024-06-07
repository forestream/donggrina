import styles from './modal.module.scss';
import { MouseEvent, ReactNode } from 'react';

export interface ModalCommonProps {
  content?: ReactNode;
  onClose: () => void;
}

export default function Modal({ content, onClose }: ModalCommonProps) {
  const handleClose = () => {
    onClose();
  };

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.outer} onClick={handleClose}>
      <div className={styles.inner} onClick={handleClick}>
        {content}
      </div>
    </div>
  );
}
