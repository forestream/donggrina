import Image from 'next/image';
import styles from './login-top.module.scss';

export default function LoginTop() {
  return (
    <dl className={styles.container}>
      <dt className={styles.imgBox}>
        <Image src="/images/login/logo.png" alt="로고" layout="fill" />
      </dt>
      <dd className={styles.text}>동그리나와 관련된 소개 문구</dd>
    </dl>
  );
}
