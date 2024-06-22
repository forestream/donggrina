import StoryListItemSkeleton from '../item/story-list-item-skeleton';
import styles from './story-list-skeleton.module.scss';

export default function StoryListSkeleton() {
  return (
    <section>
      <ul className={styles.list}>
        <li>
          <StoryListItemSkeleton />
        </li>
        <li>
          <StoryListItemSkeleton />
        </li>
        <li>
          <StoryListItemSkeleton />
        </li>
      </ul>
    </section>
  );
}
