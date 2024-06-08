import { TIME_SELECTOR } from '@/lib/constants/calendar-constants';
import styles from './calendar-modal-time-selector.module.scss';
import { useRef, useEffect } from 'react';

interface CalendarModalTimeSelectorProps {
  onAmpmSelect: (value: string) => void;
  onHourSelect: (value: number) => void;
  onMinuteSelect: (value: number) => void;
  ampm: string;
  hour: number;
  minute: number;
}

export default function CalendarModalTimeSelector({
  onAmpmSelect,
  onHourSelect,
  onMinuteSelect,
  ampm,
  hour,
  minute,
}: CalendarModalTimeSelectorProps) {
  const observerRootRef = useRef<HTMLDivElement | null>(null);
  const ampmRef = useRef<HTMLDivElement[]>([]);
  const hoursRef = useRef<HTMLDivElement[]>([]);
  const minutesRef = useRef<HTMLDivElement[]>([]);
  const pushAmpmRef = (el: HTMLDivElement) => {
    ampmRef.current.push(el);
  };
  const pushHoursRef = (el: HTMLDivElement) => {
    hoursRef.current.push(el);
  };
  const pushMinutesRef = (el: HTMLDivElement) => {
    minutesRef.current.push(el);
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.target.matches('.ampm') && entry.isIntersecting) onAmpmSelect(entry.target.innerHTML);
      if (entry.target.matches('.hour') && entry.isIntersecting) onHourSelect(+entry.target.innerHTML);
      if (entry.target.matches('.minute') && entry.isIntersecting) onMinuteSelect(+entry.target.innerHTML);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { root: observerRootRef.current, threshold: 0.5 });

    ampmRef.current.forEach((ampm) => observer.observe(ampm));
    hoursRef.current.forEach((hour) => observer.observe(hour));
    minutesRef.current.forEach((minute) => observer.observe(minute));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className={styles.selected}>
        <span>{ampm}</span>
        <span>{hour.toString().padStart(2, '0')}</span>
        <span>{minute.toString().padStart(2, '0')}</span>
      </div>
      <div className={styles.selector}>
        <div ref={observerRootRef} id="observerRoot" className={styles.observerRoot}>
          <div className={styles.scroller}>
            {TIME_SELECTOR.AM_PM.map((ampm, i) => (
              <div key={i} ref={pushAmpmRef} className={`ampm ${styles.scrollItem}`}>
                {ampm}
              </div>
            ))}
          </div>
          <div className={styles.scroller}>
            {TIME_SELECTOR.HOURS.map((hour, i) => (
              <div key={i} ref={pushHoursRef} className={`hour ${styles.scrollItem}`}>
                {hour}
              </div>
            ))}
          </div>
          <div className={styles.scroller}>
            {TIME_SELECTOR.MINUTES.map((minute, i) => (
              <div key={i} ref={pushMinutesRef} className={`minute ${styles.scrollItem}`}>
                {minute}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
