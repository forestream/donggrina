import styles from './text-box.module.scss';

export default function TextBox() {
  return (
    <div className={styles.textBox}>
      <h2>
        <span>너! 내 가족이 되라!</span>
        <br />
        가족만들기
      </h2>
      <p>
        가족과 관련된 소개 문구
        <br /> ex. 동그리나는 가족, 친구,연인과 함께 사용할 수 있는 플랫폼이에요. 동그리나에서 같이 사용할 가족을
        만들어보세요.
      </p>
    </div>
  );
}
