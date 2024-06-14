import Image from 'next/image';
import { PropsWithChildren, createContext, useContext } from 'react';
import { DropdownMenuContextProps } from './kebab.type';
import useOutside from '@/hooks/use-outside';
import styles from './kebab.module.scss';

export const DropdownMenuContext = createContext<DropdownMenuContextProps>({
  isOpen: false,
  onOpenToggle: () => {},
  onCloseToggle: () => {},
});

export default function DropdownMenu(props: PropsWithChildren<{ value: DropdownMenuContextProps }>) {
  return (
    <DropdownMenuContext.Provider value={props.value}>
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
  return dropdownContext.isOpen && <ul className={styles['dropdown-menu__content']}>{props.children}</ul>;
}

function DropdownMenuItem(props: PropsWithChildren) {
  return (
    <li className={styles['dropdown-list']}>
      <button>{props.children}</button>
    </li>
  );
}

function Kebab() {
  const dropdownContext = useContext(DropdownMenuContext);
  const ref = useOutside<HTMLButtonElement>({
    isOpen: dropdownContext.isOpen,
    onCloseToggle: dropdownContext.onCloseToggle,
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
