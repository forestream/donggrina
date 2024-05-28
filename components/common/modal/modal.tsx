import { createPortal } from 'react-dom';
import styles from './modal.module.scss';
import { ReactNode, useEffect, useState } from 'react';

interface CommonProps {
  message: string;
  handleClose: () => void;
}

interface ModalProps extends CommonProps {
  buttons: ReactNode;
}

interface ModalPortalProps extends CommonProps {
  buttons: {
    text: string;
    event: () => void;
  }[];
}

function Modal({ message, buttons, handleClose }: ModalProps) {
  return (
    <div className={styles.outer} onClick={handleClose}>
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttonContainer}>{buttons}</div>
      </div>
    </div>
  );
}

export default function ModalPortal({ message, buttons, handleClose }: ModalPortalProps) {
  const [portalRef, setPortalRef] = useState<HTMLElement | null>(null);

  const buttonComps = buttons.map((button, i) => (
    <button className={`${styles.button} ${i === buttons.length - 1 ? styles.greenButton : ''}`} onClick={button.event}>
      {button.text}
    </button>
  ));

  useEffect(() => {
    setPortalRef(document.getElementById('__modal'));
  }, []);

  return (
    <>
      {portalRef &&
        createPortal(
          <Modal message={message} buttons={buttonComps} handleClose={handleClose} />,
          portalRef as HTMLElement,
        )}
    </>
  );
}
