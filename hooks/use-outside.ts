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
      if (!isTargetIncludes(event, ref) && !isTargetIncludes(event, modalRef)) {
        onCloseToggle();
      }
    };

    if (isOpen) document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [onCloseToggle]);

  return ref;
}
