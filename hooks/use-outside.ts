import { RefObject, useEffect, useRef } from 'react';
import { isTargetIncludes } from '@/utils';

interface UseOutSide<U> {
  isOpen: boolean;
  onCloseToggle: () => void;
  modalRef: RefObject<U>;
}

export default function useOutside<T extends HTMLElement, U extends HTMLElement>({
  isOpen,
  onCloseToggle,
  modalRef,
}: UseOutSide<U>) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!isTargetIncludes(event, ref) && !isTargetIncludes(event, modalRef)) onCloseToggle();
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseToggle();
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onCloseToggle]);

  return ref;
}
