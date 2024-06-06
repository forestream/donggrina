import styles from './create.module.scss';
import CatCheckbox from '@/components/calendar/cat-checkbox';
import DogCheckbox from '@/components/calendar/dog-checkbox';

export default function Create() {
  return (
    <div className={styles.outer}>
      <form>
        <input className={styles.title} id="title" type="text" placeholder="제목" />
        <textarea
          className={styles.description}
          id="description"
          placeholder={`메모\n어떤 일정인지 자세하게 기록하실 수 있어요!`}
        />
        <div className={styles.division}></div>
        <div className={styles.petSelector}>
          반려동물 선택
          <div className={styles.petLabelContainer}>
            <DogCheckbox />
            <CatCheckbox />
          </div>
        </div>
      </form>
      할일 만들기 페이지
    </div>
  );
}
