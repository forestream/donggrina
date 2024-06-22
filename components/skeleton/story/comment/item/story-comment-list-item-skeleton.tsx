import styles from './story-comment-list-item-skeleton.module.scss';

export default function StoryCommentListItemSkeleton() {
  return (
    <div>
      <div className={styles.profileBox}>
        <div className={styles.imgBox}></div>
        <div className={styles.textBox}>
          <p></p>
          <span></span>
        </div>
      </div>
      <div className={styles.commentBox}>
        <p></p>
        <span></span>
      </div>
    </div>
  );
}
