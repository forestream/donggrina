import { PropsWithChildren } from 'react';
import styles from './background.module.scss';
import LogoSVG from '@/public/images/header/logo.svg';
import { motion } from 'framer-motion';
import { textVariants } from '../framer';

interface CircleClassType {
  className: 'circle' | 'smallCircle';
}
function Circle({ className }: CircleClassType) {
  return <div className={styles[className]}></div>;
}

export default function BackGround({ children }: PropsWithChildren) {
  return (
    <article className={styles.article}>
      <section className={styles.section}>
        <motion.header aria-label="동그리나 로고" variants={textVariants} initial="hidden" animate="visible" custom={0}>
          <LogoSVG />
        </motion.header>
        <div className={styles.titleBox}>
          <motion.h2 variants={textVariants} initial="hidden" animate="visible" custom={1}>
            반려동물 <strong>1등</strong> 다이어리
            <br />
            <strong>동그리나</strong>
          </motion.h2>
          <motion.p variants={textVariants} initial="hidden" animate="visible" custom={2}>
            동그리나는 가족, 친구,연인과 함께 사용할 수 있는 플랫폼이에요.
            <br /> 동그리나에서 같이 사용할 가족을 만들어보세요.
          </motion.p>
        </div>
        <div className={styles.circleBox1}>
          <Circle className="circle" />
        </div>
        <div className={styles.circleBox2}>
          <Circle className="circle" />
        </div>
        <div className={styles.circleBox3}>
          <Circle className="smallCircle" />
        </div>
      </section>
      {children}
    </article>
  );
}
