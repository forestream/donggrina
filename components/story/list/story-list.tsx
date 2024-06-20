import { useFetchStory } from '../../../hooks/queries/story';
import StoryItem from '@/components/story/item/story-item';
import styles from './story-list.module.scss';

export default function StoryList() {
  const storyQuery = useFetchStory({});

  return (
    <ul className={styles.wrapper}>
      {storyQuery.data!.data.response.map((story) => (
        <StoryItem {...story} />
      ))}
    </ul>
  );
}
