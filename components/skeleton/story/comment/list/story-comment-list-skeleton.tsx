import StoryCommentListItemSkeleton from '../item/story-comment-list-item-skeleton';
import styles from './story-comment-list-skeleton.module.scss';

export default function StoryCommentListSkeleton() {
  return (
    <ul className={styles.list}>
      <li>
        <StoryCommentListItemSkeleton />
      </li>
      <li>
        <StoryCommentListItemSkeleton />
      </li>
      <li>
        <StoryCommentListItemSkeleton />
      </li>
    </ul>
  );
}
