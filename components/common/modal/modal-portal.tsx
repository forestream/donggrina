import { useState } from 'react';
import Modal, { ModalCommonProps } from './modal';
import styles from './modal-portal.module.scss';
import { createPortal } from 'react-dom';

export type Buttons = {
  text: string;
  event: () => void;
}[];

interface ModalPortalProps extends ModalCommonProps {
  buttons: Buttons;
}

export default function ModalPortal({ message, buttons, onClose }: ModalPortalProps) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  if (!portalElement) setPortalElement(document.getElementById('__container'));

  const buttonComps = buttons.map((button, i) => (
    <button className={`${styles.button} ${i === buttons.length - 1 ? styles.greenButton : ''}`} onClick={button.event}>
      {button.text}
    </button>
  ));

  return (
    <>
      {portalElement &&
        createPortal(<Modal message={message} buttons={buttonComps} onClose={onClose} />, portalElement as HTMLElement)}
    </>
  );
}
