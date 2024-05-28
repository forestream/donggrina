import GoogleButton from '../googleButton/googleButton';
import KakaoButton from '../kakaoButton/kakaoButton';
import styles from './loginButtons.module.scss';

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
