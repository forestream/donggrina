import DiaryCreate from '@/components/diaries/diary-create/diary-create';
import styles from './create.module.scss';

const Create = () => {
  return (
    <div className={styles.container}>
      <DiaryCreate />
    </div>
  );
};

export default Create;
