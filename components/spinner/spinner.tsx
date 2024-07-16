import styles from './spinner.module.scss';
import SpinnerSVG from '@/public/images/icon_refresh.svg';

export default function Spinner() {
  return (
    <div className={styles.box}>
      <SpinnerSVG />
    </div>
  );
}
