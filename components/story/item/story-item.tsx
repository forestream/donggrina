import React from 'react';
import Link from 'next/link';
import StoryItemHeader from './story-item-header';
import StoryItemSwiper from './story-item-swiper';
import StoryItemInfo from './story-item-info';
import { Story } from '@/types/story';

export default function StoryItem(props: Story) {
  return (
    <li>
      <Link href={`/story/${props.diaryId}`}>
        <StoryItemHeader {...props} />
        {props.images.length !== 0 && <StoryItemSwiper images={props.images} />}
        <StoryItemInfo {...props} storyId={props.diaryId} commentCount={props.commentCount} />
      </Link>
    </li>
  );
}
