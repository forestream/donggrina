import { ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  className: string;
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  onClick: () => void;
  disabled: boolean;
}

export default function Buttons({ className, children, type, onClick, disabled }: ButtonProps) {
  return (
    <button type={type} className={styles[className]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
