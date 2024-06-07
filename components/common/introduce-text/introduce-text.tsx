import { PropsWithChildren } from 'react';
import styles from './introduce-text.module.scss';

interface TextPropsType {
  subTitle?: string;
  title: string;
}

export default function IntroduceText({ subTitle, title, children }: PropsWithChildren<TextPropsType>) {
  return (
    <div className={styles.textBox}>
      <h2>
        <IntroduceSubTitle subTitle={subTitle} />
        {title}
      </h2>
      <p>
        가족과 관련된 소개 문구
        <br /> ex. 동그리나는 가족, 친구,연인과 함께 사용할 수 있는 플랫폼이에요. 동그리나에서 같이 사용할 가족을
        만들어보세요.
      </p>
    </div>
  );
}

function IntroduceSubTitle({ subTitle }: Pick<TextPropsType, 'subTitle'>) {
  if (!subTitle) return null;
  return (
    <>
      <span>{subTitle}</span>
      <br />
    </>
  );
}
