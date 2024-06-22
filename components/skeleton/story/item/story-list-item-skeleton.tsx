import styles from './story-list-item-skeleton.module.scss';

export default function StoryListItemSkeleton() {
  return (
    <div>
      <div className={styles.profileBox}>
        <div></div>
        <p></p>
      </div>
      <div className={styles.imgBox}></div>
      <div className={styles.textBox}>
        <span></span>
        <p></p>
      </div>
      <div className={styles.commentBox}></div>
    </div>
  );
}
