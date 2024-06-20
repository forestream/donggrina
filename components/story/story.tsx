import React from 'react';
import StoryList from '@/components/story/list/story-list';
import useIntersect from '../../hooks/use-intersect';
import { useInfiniteStory } from '../../hooks/queries/story/index';
import styles from './story.module.scss';

export default function Story() {
  const storyQuery = useInfiniteStory();

  const ref = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (storyQuery.hasNextPage && !storyQuery.isFetching) {
      storyQuery.fetchNextPage();
    }
  });

  if (storyQuery.isLoading) return '로딩중...';

  return (
    <div className={styles.wrapper}>
      <StoryList data={storyQuery.data!.pages} />
      <div ref={ref} style={{ height: '100px' }}></div>
    </div>
  );
}
