import { PropsWithChildren } from 'react';
import styles from './title.module.scss';

export default function Title({ children }: PropsWithChildren) {
  return <h2 className={styles.title}>{children}</h2>;
}
