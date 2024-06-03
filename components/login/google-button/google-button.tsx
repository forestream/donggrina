import GoogleSVG from '@/public/images/login/google_logo.svg';
import styles from './google-button.module.scss';
import Link from 'next/link';
import { config } from '@/config';

export default function GoogleButton() {
  const googleUrl = config.googleAuth;

  return (
    <Link className={styles.googleButton} href={googleUrl}>
      <GoogleSVG />
      <span>구글로 로그인</span>
    </Link>
  );
}
