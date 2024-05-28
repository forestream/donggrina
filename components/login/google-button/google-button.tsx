import GoogleSVG from '@/public/images/login/google_logo.svg';
import styles from './google-button.module.scss';
import Link from 'next/link';

export default function GoogleButton() {
  const googleUrl = `백엔드에서 받기`;

  return (
    <Link className={styles.googleButton} href={googleUrl}>
      <GoogleSVG />
      <span>구글로 로그인</span>
    </Link>
  );
}
