import React from 'react';
import Link from 'next/link';
import StoryItemHeader from './story-item-header';
import StoryItemSwiper from './story-item-swiper';
import StoryItemInfo from './story-item-info';
import { Story } from '@/types/story';

export default function StoryItem(props: Story) {
  return (
<<<<<<< HEAD
    <li>
      <Link href={`/story/${props.diaryId}`}>
        <StoryItemHeader {...props} />
        {props.images.length !== 0 && <StoryItemSwiper images={props.images} />}
        <StoryItemInfo {...props} storyId={props.diaryId} commentCount={props.commentCount} />
      </Link>
    </li>
=======
    <Link href={`/story/${props.diaryId}`}>
      <StoryItemHeader
        content={props.content}
        author={props.author}
        authorImage={props.authorImage}
        weather={props.weather}
        petImages={props.petImages}
      />
      {props.images.length !== 0 && <StoryItemSwiper images={props.images} />}
      <StoryItemInfo
        storyId={props.diaryId}
        favoriteState={props.favoriteState}
        authorGroup={props.authorGroup}
        date={props.date}
        content={props.content}
        favoriteCount={props.favoriteCount}
        commentCount={props.commentCount}
      />
    </Link>
>>>>>>> 7c494cf1b7948d5de365b5ca20fb4e18cbf5c0cc
  );
}
