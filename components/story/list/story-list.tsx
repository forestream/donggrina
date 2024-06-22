import StoryItem from '@/components/story/item/story-item';
import { StoryData } from '@/types/story';
import styles from './story-list.module.scss';
import { motion } from 'framer-motion';
import { containerVariants } from '@/components/framer';

interface StoryListProps {
  data: StoryData[];
}

export default function StoryList(props: StoryListProps) {
  return (
    <motion.ul variants={containerVariants} initial="hidden" animate="visible" className={styles.wrapper}>
      {props.data.map((page) => page.response.map((story) => <StoryItem {...story} />))}
    </motion.ul>
  );
}
