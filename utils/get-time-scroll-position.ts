import { TIME_SELECTOR, TIME_SELECTOR_HEIGHT } from '@/lib/constants/calendar-constants';

export default function getTimeScrollPosition(scrollHeight: number, className: string, selectedItem: string | number) {
  const scrollY =
    ((scrollHeight - TIME_SELECTOR_HEIGHT) / TIME_SELECTOR[className].length) *
      TIME_SELECTOR[className].indexOf(selectedItem.toString().padStart(2, '0')) +
    10;

  return scrollY;
}
