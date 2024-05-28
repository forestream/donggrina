import { createPortal } from 'react-dom';
import styles from './modal.module.scss';
import { useEffect, useState } from 'react';

function Modal({ message }) {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <p>{message}</p>
        <button>y</button>
        <button>n</button>
      </div>
    </div>
  );
}

export default function ModalPortal({ message }) {
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRef(document.getElementById('__modal'));
  }, []);

  return <>{ref && createPortal(<Modal message={message} />, ref as HTMLElement)}</>;
}
