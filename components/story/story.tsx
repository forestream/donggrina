import React from 'react';
import { useFetchStory } from '@/hooks/queries/story';
import Suspensive from '@/components/suspensive/suspensive';
import styles from './story.module.scss';
import StoryList from '@/components/story/list/story-list';

export default function Story() {
  const storyQuery = useFetchStory({});

  return (
    <div className={styles.wrapper}>
      <Suspensive isLoading={storyQuery.isLoading}>
        <StoryList />
      </Suspensive>
    </div>
  );
}
