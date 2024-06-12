import { PropsWithChildren } from 'react';
import styles from './title-text.module.scss';

export default function TitleText({ children }: PropsWithChildren) {
  return <p className={styles.titleText}>{children}</p>;
}
