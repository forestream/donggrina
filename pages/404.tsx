import styles from './404.module.scss';
import Button from '@/components/common/button/button';
import ErrorSVG from '@/public/images/404/Group 2948.svg';
import { useRouter } from 'next/router';

export default function Page404() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <article className={styles.page404}>
      <section>
        <div className={styles.textBox}>
          <p>!</p>
          <span>404</span>
        </div>
        <div className={styles.mainTextBox}>
          <ErrorSVG />
          <p>페이지를 찾지 못했습니다.</p>
        </div>
        <div className={styles.buttonBox}>
          <Button onClick={handleBack} type="button" className="primary" round>
            이전 페이지로 돌아가기
          </Button>
        </div>
      </section>
    </article>
  );
}
