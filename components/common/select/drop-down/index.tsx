import useCloseDropDown from '@/hooks/use-close-dropdown';
import React, { MouseEventHandler, useRef } from 'react';
import styles from './drop-down.module.scss';

interface DropDownProps {
  showDropDown: boolean;
  options: string[];
  handleClick: MouseEventHandler;
  handleClose: () => void;
}

export default function Dropdown({ showDropDown, options, handleClick, handleClose }: DropDownProps) {
  const dropDownRef = useRef<HTMLDivElement>(null);
  useCloseDropDown(showDropDown, handleClose, dropDownRef);

  return (
    <div className={styles.optionContainer} ref={dropDownRef}>
      <ul className={styles.optionList}>
        {options &&
          options.map((option, index) => {
            return (
              <li className={styles.optionItem} key={index}>
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
