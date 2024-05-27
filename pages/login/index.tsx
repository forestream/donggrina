import styles from './index.module.css';
import LoginTop from '@/components/login/loginTop/loginTop';

export default function Login() {
  return (
    <article className={styles.article}>
      <LoginTop />
    </article>
  );
}
