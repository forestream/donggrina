import { PropsWithChildren } from 'react';
import styles from './background.module.scss';
import LogoSVG from '@/public/images/header/logo.svg';

export default function BackGround({ children }: PropsWithChildren) {
  return (
    <article className={styles.article}>
      <section className={styles.section}>
        <header aria-label="동그리나 로고">
          <LogoSVG />
        </header>
        <div>
          <h2>
            반려동물 <strong>1등</strong>다이어리
            <br />
            <strong>동그리나</strong>
          </h2>
          <p>
            동그리나는 가족, 친구,연인과 함께 사용할 수 있는 플랫폼이에요.
            <br /> 동그리나에서 같이 사용할 가족을 만들어보세요.
          </p>
        </div>
      </section>
      {children}
    </article>
  );
}
