import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './select.module.scss';
import { FormInput } from '../Input/input-type';
import { Control, useController } from 'react-hook-form';
import DropDownUpIcon from '@/public/images/select/dropdown-up.svg';
import Dropdown from './drop-down';

interface SelectProps extends FormInput {
  name: string;
  options: string[];
  control: Control;
}

export default function Select({ name, control, options, placeholder }: SelectProps) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
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
      <div className={styles.select}>
        <button
          className={classNames(styles.button, { [styles.buttonActive]: showDropDown })}
          onClick={handleButtonClick}
          type="button"
        >
          <div className={styles.inputBox}>
            <input
              id={name}
              className={classNames(styles.input, { [styles.inputActive]: showDropDown })}
              readOnly
              placeholder={placeholder}
              type="text"
              tabIndex={-1}
              value={field.value || ''}
            />
            <DropDownUpIcon alt="arrowUpIcon" className={styles.upIcon} />
          </div>
          {showDropDown && (
            <Dropdown
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
