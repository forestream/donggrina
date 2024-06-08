import { TIME_SELECTOR } from '@/lib/constants/calendar-constants';
import styles from './calendar-modal-time-selector.module.scss';
import { useRef, useEffect, BaseSyntheticEvent } from 'react';
import TimeScroller from './time-scroller';
import { DateTime } from '@/pages/calendar/create';

interface CalendarModalTimeSelectorProps {
  dateTime: DateTime;
  onSelect: (type: string, e: BaseSyntheticEvent | IntersectionObserverEntry) => void;
}

export default function CalendarModalTimeSelector({ dateTime, onSelect }: CalendarModalTimeSelectorProps) {
  const { ampm, hour, minute } = dateTime;

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
      if (entry.target.matches('.ampm') && entry.isIntersecting) onSelect('ampm', entry);
      if (entry.target.matches('.hour') && entry.isIntersecting) onSelect('hour', entry);
      if (entry.target.matches('.minute') && entry.isIntersecting) onSelect('minute', entry);
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
    <div className={styles.outer}>
      <div className={styles.selected}>
        <span>{ampm}</span>
        <span>{hour.toString().padStart(2, '0')}</span>
        <span>{minute.toString().padStart(2, '0')}</span>
      </div>
      <div className={styles.selector}>
        <div ref={observerRootRef} id="observerRoot" className={styles.observerRoot}>
          <TimeScroller className="ampm" refPusher={pushAmpmRef} scrollItems={TIME_SELECTOR.ampm} selectedItem={ampm} />
          <TimeScroller
            className="hour"
            refPusher={pushHoursRef}
            scrollItems={TIME_SELECTOR.hour}
            selectedItem={hour}
          />
          <TimeScroller
            className="minute"
            refPusher={pushMinutesRef}
            scrollItems={TIME_SELECTOR.minute}
            selectedItem={minute}
          />
        </div>
      </div>
    </div>
  );
}
