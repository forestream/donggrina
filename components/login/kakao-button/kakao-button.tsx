import styles from './kakao-button.module.scss';
import KakaoSVG from '@/public/images/login/kakao_logo.svg';

export default function KakaoButton() {
  const kakaoURL = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <button className={styles.kakaoButton} onClick={handleLogin} type="button">
      <KakaoSVG />
      <span>카카오로 로그인</span>
    </button>
  );
}
