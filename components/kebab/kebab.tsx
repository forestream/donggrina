import Image from 'next/image';
import { PropsWithChildren, createContext, useContext, useRef } from 'react';
import { DropdownMenuContextProps } from './kebab.type';
import useOutside from '@/hooks/use-outside';
import styles from './kebab.module.scss';

export const DropdownMenuContext = createContext<DropdownMenuContextProps>({
  isOpen: false,
  onOpenToggle: () => {},
  onCloseToggle: () => {},
  modalRef: null,
});

export default function DropdownMenu(props: PropsWithChildren<{ value: Omit<DropdownMenuContextProps, 'modalRef'> }>) {
  const modalRef = useRef<HTMLUListElement>(null);
  const value = { ...props.value, modalRef };

  return (
    <DropdownMenuContext.Provider value={value}>
      <div className={styles['dropdown-menu']}>{props.children}</div>
    </DropdownMenuContext.Provider>
  );
}

export function useDropdownMenu() {
  const dropdownContext = useContext(DropdownMenuContext);
  if (!dropdownContext) throw new Error('Dropdown Context에서만 사용해야 합니다.');
  return dropdownContext;
}

function DropdownMenuContent(props: PropsWithChildren) {
  const dropdownContext = useDropdownMenu();
  return (
    dropdownContext.isOpen && (
      <ul className={styles['dropdown-menu__content']} ref={dropdownContext.modalRef}>
        {props.children}
      </ul>
    )
  );
}

function DropdownMenuItem(props: PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <li className={styles['dropdown-list']}>
      <button onClick={props.onClick}>{props.children}</button>
    </li>
  );
}

function Kebab() {
  const dropdownContext = useContext(DropdownMenuContext);
  const ref = useOutside<HTMLButtonElement, HTMLUListElement>({
    isOpen: dropdownContext.isOpen,
    onCloseToggle: dropdownContext.onCloseToggle,
    modalRef: dropdownContext.modalRef!,
  });

  return (
    <button className={styles.kebab} onClick={dropdownContext.onOpenToggle} ref={ref}>
      <Image src="/images/kebab-icon.svg" alt="모달 열기" fill />
    </button>
  );
}

DropdownMenu.Kebab = Kebab;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;
