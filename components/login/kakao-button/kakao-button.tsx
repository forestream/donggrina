import Link from 'next/link';
import styles from './kakao-button.module.scss';
import KakaoSVG from '@/public/images/login/kakao_logo.svg';

export default function KakaoButton() {
  const kakaoURL = `/oauth2/authorization/kakao`;

  return (
    <Link className={styles.kakaoButton} href={kakaoURL}>
      <KakaoSVG />
      <span>카카오로 로그인</span>
    </Link>
  );
}
