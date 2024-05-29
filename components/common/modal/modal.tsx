import styles from './modal.module.scss';
import { MouseEvent, ReactNode } from 'react';

export interface CommonProps {
  message: string;
  onClose: () => void;
}

interface ModalProps extends CommonProps {
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
