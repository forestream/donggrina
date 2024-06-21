import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './button.module.scss';
import { ButtonClassType } from './types/button-type';

interface ButtonPropsType extends ButtonClassType {
  round?: boolean;
  rightRound?: boolean;
  leftRound?: boolean;
}

export default function Button({
  round = false,
  rightRound = false,
  leftRound = false,
  className,
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & ButtonPropsType>) {
  const roundStyle: React.CSSProperties = {
    borderBottomLeftRadius: leftRound ? '10px' : 'none',
    borderBottomRightRadius: rightRound ? '10px' : 'none',
    borderRadius: round ? '32px' : 'none',
  };
  return (
    <button style={roundStyle} className={styles[className]} {...props}>
      {children}
    </button>
  );
}
