import { useEffect, useRef } from 'react';

interface UseOutSide {
  isOpen: boolean;
  onCloseToggle: () => void;
}

export default function useOutside<T extends HTMLElement>({ isOpen, onCloseToggle }: UseOutSide) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) onCloseToggle();
    };

    if (isOpen) document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [onCloseToggle]);

  return ref;
}
