import useCloseDropDown from '@/hooks/use-close-dropdown';
import React, { MouseEventHandler, useRef } from 'react';
import styles from './drop-down.module.scss';

interface DropDownProps {
  showDropDown: boolean;
  options: string[];
  buttonRef: React.RefObject<HTMLElement>;
  handleClick: MouseEventHandler;
  handleClose: () => void;
}

export default function Dropdown({ showDropDown, options, buttonRef, handleClick, handleClose }: DropDownProps) {
  const dropDownRef = useRef<HTMLDivElement>(null);
  useCloseDropDown(showDropDown, handleClose, dropDownRef, buttonRef);

  return (
    <div ref={dropDownRef}>
      <ul className={styles.optionList}>
        {options &&
          options.map((option) => {
            return (
              <li className={styles.optionItem} key={option}>
                <button className={styles.optionButton} onClick={handleClick} type="button">
                  {option}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
