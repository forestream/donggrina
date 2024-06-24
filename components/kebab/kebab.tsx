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

function Kebab(props: { color?: 'black' | 'gray' }) {
  const dropdownContext = useContext(DropdownMenuContext);
  const ref = useOutside<HTMLButtonElement, HTMLUListElement>({
    isOpen: dropdownContext.isOpen,
    onCloseToggle: dropdownContext.onCloseToggle,
    modalRef: dropdownContext.modalRef!,
  });

  const defaultColor = props.color || 'black';
  const svgColor = defaultColor === 'black' ? '#000' : '#9e9e9e';

  return (
    <button className={styles.kebab} onClick={dropdownContext.onOpenToggle} ref={ref}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
          stroke={svgColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
          stroke={svgColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
          stroke={svgColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

DropdownMenu.Kebab = Kebab;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;
