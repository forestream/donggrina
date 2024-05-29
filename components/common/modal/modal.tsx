import styles from './modal.module.scss';
import { MouseEvent, ReactNode } from 'react';

export interface ModalCommonProps {
  message: string;
  onClose: () => void;
}

interface ModalProps extends ModalCommonProps {
  buttons: ReactNode;
}

export default function Modal({ message, buttons, onClose }: ModalProps) {
  const handleClose = () => {
    onClose();
  };

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.outer} onClick={handleClose}>
      <div className={styles.inner} onClick={handleClick}>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttonContainer}>{buttons}</div>
      </div>
    </div>
  );
}
