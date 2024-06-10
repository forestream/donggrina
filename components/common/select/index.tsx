import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './select.module.scss';
import { FormInput } from '../Input/input-type';
import { Control, useController } from 'react-hook-form';
import DropDownUpIcon from '@/public/images/select/dropdown-up.svg';
import DropDownDownIcon from '@/public/images/select/dropdown-down.svg';
import Dropdown from './drop-down';

interface SelectProps extends FormInput {
  name: string;
  options: string[];
  control: Control;
}

export default function Select({ name, label, control, options, placeholder }: SelectProps) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const buttonRef = useRef(null);
  const { field } = useController({
    name,
    control,
    rules: { required: true },
  });

  const handleButtonClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleDropDownClick = (event: React.MouseEvent) => {
    field.onChange((event.target as HTMLLIElement).innerText);
    setShowDropDown(false);
  };
  const handleClose = () => {
    setShowDropDown(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>|</span>
        <label htmlFor={name}>{label}</label>
      </div>
      <div className={styles.select}>
        <button
          className={classNames(styles.button, { [styles.buttonActive]: showDropDown })}
          onClick={handleButtonClick}
          type="button"
        >
          <input
            id={name}
            className={classNames(styles.input, { [styles.inputActive]: showDropDown })}
            readOnly
            placeholder={placeholder}
            type="text"
            tabIndex={-1}
            value={field.value || ''}
          />
          {showDropDown ? (
            <DropDownUpIcon alt="arrowUpIcon" className={styles.upIcon} />
          ) : (
            <DropDownDownIcon alt="arrowDownIcon" className={styles.downIcon} />
          )}
          {showDropDown && (
            <Dropdown
              buttonRef={buttonRef}
              options={options}
              showDropDown={showDropDown}
              handleClick={handleDropDownClick}
              handleClose={handleClose}
            />
          )}
        </button>
      </div>
    </div>
  );
}
