import styles from './index.module.scss';
import LoginTop from '@/components/login/loginTop/loginTop';
import LoginButtons from '@/components/login/loginBottom/loginButtons';

export default function Login() {
  return (
    <article className={styles.article}>
      <LoginTop />
      <LoginButtons />
    </article>
  );
}
