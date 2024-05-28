import { useEffect, useState } from 'react';
import Modal, { CommonProps } from './modal';
import styles from './modal-portal.module.scss';
import { createPortal } from 'react-dom';

interface ModalPortalProps extends CommonProps {
  buttons: {
    text: string;
    event: () => void;
  }[];
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
