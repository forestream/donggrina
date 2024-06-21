import { MouseEventHandler, useEffect, useRef, useState } from 'react';
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
  const [offsetY, setOffsetY] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  const handleWheel = (e: WheelEvent) => {
    if ((e.deltaY > 5 || e.deltaY < -5) && ref.current) {
      e.preventDefault();
      ref.current.scrollTop += e.deltaY * 0.2;
    }
  };

  const handleMouseDown: MouseEventHandler = (e) => {
    setMouseDown(true);
    setOffsetY(e.clientY);
    ref.current && ref.current.classList.add(styles.pauseSnap);
  };
  const handleMouseMove: MouseEventHandler = (e) => {
    if (!mouseDown || !ref.current) return;
    ref.current.scrollTop -= e.movementY;
  };
  const handleMouseUp: MouseEventHandler = () => {
    setMouseDown(false);
    ref.current && ref.current.classList.remove(styles.pauseSnap);
  };
  const handleClickItem: MouseEventHandler = (e) => {
    if (!ref.current) return;
    ref.current.scrollTop = getTimeScrollPosition(
      ref.current?.scrollHeight,
      className,
      (e.target as HTMLElement).innerText,
    );
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', handleMouseMove as unknown as EventListenerOrEventListenerObject);
    document.body.addEventListener('mouseup', handleMouseUp as unknown as EventListenerOrEventListenerObject);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove as unknown as EventListenerOrEventListenerObject);
      document.body.removeEventListener('mouseup', handleMouseUp as unknown as EventListenerOrEventListenerObject);
    };
  }, [mouseDown, offsetY]);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.scrollTop += getTimeScrollPosition(ref.current.scrollHeight, className, selectedItem);

    ref.current.addEventListener('wheel', handleWheel);

    return () => {
      if (ref.current) ref.current.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={ref} onMouseDown={handleMouseDown} className={styles.scroller}>
      {scrollItems.map((item, i) => (
        <div
          key={i}
          ref={refPusher}
          onClick={handleClickItem}
          className={`${className} ${styles.scrollItem} ${item === selectedItem.toString().padStart(2, '0') ? styles.magnify : ''}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
