import { useState } from 'react';
import Modal, { ModalCommonProps } from './modal';
import { createPortal } from 'react-dom';

export type Buttons = {
  text: string;
  event: () => void;
}[];

export default function ModalPortal({ children, onClose }: ModalCommonProps) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  if (!portalElement) setPortalElement(document.getElementById('__container'));

  return (
    <>{portalElement && createPortal(<Modal onClose={onClose}>{children}</Modal>, portalElement as HTMLElement)}</>
  );
}
