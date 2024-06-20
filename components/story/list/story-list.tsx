import StoryItem from '@/components/story/item/story-item';
import { StoryData } from '@/types/story';
import styles from './story-list.module.scss';

interface StoryListProps {
  data: StoryData[];
}

export default function StoryList(props: StoryListProps) {
  return (
    <ul className={styles.wrapper}>
      {props.data.map((page) => page.response.map((story) => <StoryItem {...story} />))}
    </ul>
  );
}
