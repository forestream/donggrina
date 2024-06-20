import React from 'react';
import StoryItemHeader from './story-item-header';
import StoryItemSwiper from './story-item-swiper';
import StoryItemInfo from './story-item-info';

export default function StoryItem() {
  return (
    <li>
      <StoryItemHeader />
      <StoryItemSwiper />
      <StoryItemInfo />
    </li>
  );
}
