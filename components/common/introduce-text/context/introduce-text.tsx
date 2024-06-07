import { createContext } from 'react';
import styles from '../introduce-text.module.scss';

const TextContext = createContext();

export function IntroduceText({ children }) {
  return (
    <TextContext.Provider>
      <div className={styles.textBox}>{children}</div>
    </TextContext.Provider>
  );
}
