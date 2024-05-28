import ModalPortal, { Buttons } from '@/components/common/modal/modal-portal';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

export default function useModal(
  message: string,
  buttons: Buttons,
): [() => ReactNode, Dispatch<SetStateAction<boolean>>] {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const Modal = () => <>{isOpen && <ModalPortal message={message} buttons={buttons} handleClose={handleClose} />}</>;

  return [Modal, setIsOpen];
}
