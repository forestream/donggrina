import { RefObject } from 'react';

export interface DropdownMenuContextProps {
  isOpen: boolean;
  onOpenToggle: () => void;
  onCloseToggle: () => void;
  modalRef: RefObject<HTMLUListElement> | null;
}
