import { PropsWithChildren } from 'react';
import styles from './sub-title.module.scss';

export default function SubTitle({ children }: PropsWithChildren) {
  return <span className={styles.subTitle}>{children}</span>;
}
