import React, { ReactNode } from 'react';
import styles from './button.module.scss';
import { ButtonClassType } from '@/utils/constants/button-class';

interface ButtonPropsType extends ButtonClassType {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  onClick: () => void;
  disabled?: boolean;
  round?: boolean;
}

export default function Button({ round = false, className, children, ...props }: ButtonPropsType) {
  const roundStyle: React.CSSProperties = {
    borderRadius: round ? '32px' : 'none',
  };
  return (
    <button style={roundStyle} className={styles[className]} {...props}>
      {children}
    </button>
  );
}
