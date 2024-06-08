import React, { MouseEventHandler } from 'react';

interface DropDownProps {
  showDropDown: boolean;
  options: string[];
  buttonRef: React.RefObject<HTMLElement>;
  handleClick: MouseEventHandler;
  handleClose: () => void;
}
export default function Dropdown({ showDropdown, options, buttonRef, handleClick, handleClose }: DropDownProps) {
  return <div>index</div>;
}
