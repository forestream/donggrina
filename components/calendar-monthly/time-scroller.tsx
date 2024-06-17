import { useEffect, useRef } from 'react';
import styles from './time-scroller.module.scss';
import getTimeScrollPosition from '@/utils/get-time-scroll-position';

interface TimeScrollerProps {
  scrollItems: (string | number)[];
  refPusher: (el: HTMLDivElement) => void;
  className: string;
  selectedItem: string | number;
}

export default function TimeScroller({ scrollItems, refPusher, className, selectedItem }: TimeScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent) => {
    if ((e.deltaY > 5 || e.deltaY < -5) && ref.current) {
      e.preventDefault();
      ref.current.scrollTop += e.deltaY * 0.2;
    }
  };

  useEffect(() => {
    if (!ref.current) return;

    ref.current.scrollTop += getTimeScrollPosition(ref.current.scrollHeight, className, selectedItem);

    ref.current.addEventListener('wheel', handleWheel);

    return () => {
      if (ref.current) ref.current.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={ref} className={styles.scroller}>
      {scrollItems.map((item, i) => (
        <div
          key={i}
          ref={refPusher}
          className={`${className} ${styles.scrollItem} ${item === selectedItem.toString().padStart(2, '0') ? styles.magnify : ''}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
