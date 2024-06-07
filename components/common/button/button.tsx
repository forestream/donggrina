import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './button.module.scss';
import { ButtonClassType } from './types/button-type';

interface ButtonPropsType extends ButtonClassType {
  round?: boolean;
}

export default function Button({
  round = false,
  className,
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & ButtonPropsType>) {
  const roundStyle: React.CSSProperties = {
    borderRadius: round ? '32px' : 'none',
  };
  return (
    <button style={roundStyle} className={styles[className]} {...props}>
      {children}
    </button>
  );
}
