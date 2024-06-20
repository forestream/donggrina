import React from 'react';
import styles from './story.module.scss';
import StoryItem from './item/story-item';

export default function Story() {
  return (
    <ul className={styles.wrapper}>
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </ul>
  );
}
