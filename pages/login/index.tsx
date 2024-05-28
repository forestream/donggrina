import styles from './index.module.scss';
import LoginTop from '@/components/login/login-top/login-top';
import LoginButtons from '@/components/login/login-buttons/login-buttons';

export default function Login() {
  return (
    <article className={styles.article}>
      <LoginTop />
      <LoginButtons />
    </article>
  );
}
