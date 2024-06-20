import React from 'react';
import StoryItemHeader from './story-item-header';
import StoryItemSwiper from './story-item-swiper';
import StoryItemInfo from './story-item-info';
import { Story } from '@/types/story';

export default function StoryItem(props: Story) {
  return (
    <li>
      <StoryItemHeader content={props.content} author={props.author} authorImage={props.authorImage} />
      {props.images.length !== 0 && <StoryItemSwiper images={props.images} />}
      <StoryItemInfo
        authorGroup={props.authorGroup}
        createdDate={props.createdDate}
        content={props.content}
        favoriteCount={props.favoriteCount}
        commentCount={props.commentCount}
      />
    </li>
  );
}
