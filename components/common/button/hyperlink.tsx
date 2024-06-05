import Link from 'next/link';
import styles from './button.module.scss';
import { ReactNode } from 'react';
import { ButtonClassType } from '@/utils/constants/button-class';

interface LinkPropsType extends ButtonClassType {
  href: string;
  children: ReactNode;
  round?: boolean;
}

export default function Hyperlink({ round = false, className, href, children }: LinkPropsType) {
  const roundStyle: React.CSSProperties = {
    borderRadius: round ? '32px' : 'none',
  };
  return (
    <Link style={roundStyle} className={styles[className]} href={href}>
      {children}
    </Link>
  );
}
