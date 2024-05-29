import ModalPortal, { Buttons } from '@/components/common/modal/modal-portal';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

/**
 * 모달 메세지와 버튼 텍스트, 이벤트 핸들러 배열을 전달하고 Modal 컴포넌트와 setIsOpen 함수로 모달을 열고 닫으세요.
 * @param {string} message - 모달에 전달할 메세지.
 * @param {{text: string, event: Function}[]} buttons - 모달 버튼 글자(text)와 이벤트 핸들러 배열(event)을 포함하는 객체.
 * @returns {{Modal: Function, setIsOpen: function(boolean)}[]} - setIsOpen에 불리언 값을 전달해서 Modal 컴포넌트를 열고 닫으세요.
 */
export default function useModal(
  message: string,
  buttons: Buttons,
): [() => ReactNode, Dispatch<SetStateAction<boolean>>] {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const Modal = () => <>{isOpen && <ModalPortal message={message} buttons={buttons} onClose={handleClose} />}</>;

  return [Modal, setIsOpen];
}
