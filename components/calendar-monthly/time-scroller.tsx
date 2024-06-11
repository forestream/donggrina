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
  let eventCount = 0;
  let timer: NodeJS.Timeout;

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (eventCount < 5) eventCount++;
    if (e.deltaY > 0 && ref.current) ref.current.scrollTop += 14 * eventCount;
    if (e.deltaY < 0 && ref.current) ref.current.scrollTop -= 14 * eventCount;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      eventCount = 0;
    }, 500);
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
