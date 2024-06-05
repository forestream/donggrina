import Link from 'next/link';
import styles from './button.module.scss';
import { ReactNode } from 'react';

interface LinkPropsType {
  className: 'primary' | 'secondary' | 'tertiary' | 'empty';
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
