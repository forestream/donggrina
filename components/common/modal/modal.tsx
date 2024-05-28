import styles from './modal.module.scss';
import { ReactNode } from 'react';

export interface CommonProps {
  message: string;
  handleClose: () => void;
}

interface ModalProps extends CommonProps {
  buttons: ReactNode;
}

export default function Modal({ message, buttons, handleClose }: ModalProps) {
  return (
    <div className={styles.outer} onClick={handleClose}>
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttonContainer}>{buttons}</div>
      </div>
    </div>
  );
}
