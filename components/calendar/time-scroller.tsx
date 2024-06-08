import styles from './time-scroller.module.scss';

interface TimeScrollerProps {
  scrollItems: (string | number)[];
  refPusher: (el: HTMLDivElement) => void;
  className: string;
  selectedItem: string | number;
}

export default function TimeScroller({ scrollItems, refPusher, className, selectedItem }: TimeScrollerProps) {
  return (
    <div className={styles.scroller}>
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
