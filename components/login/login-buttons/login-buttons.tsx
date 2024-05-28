import GoogleButton from '../google-button/google-button';
import KakaoButton from '../kakao-button/kakao-button';
import styles from './login-buttons.module.scss';

export default function LoginButtons() {
  return (
    <ul className={styles.buttonBox}>
      <li>
        <GoogleButton />
      </li>
      <li>
        <KakaoButton />
      </li>
    </ul>
  );
}
