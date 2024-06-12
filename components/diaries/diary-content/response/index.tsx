import React from 'react';
import styles from './response.module.scss';
import Heart from '@/public/images/diaries/heart.svg';
import HeartClick from '@/public/images/diaries/heart-click.svg';
import Message from '@/public/images/diaries/message.svg';

interface ResponseProps {
  commentCount: number;
  favoriteCount: number;
  favoriteState: boolean;
}

const Response: React.FC<ResponseProps> = ({ commentCount, favoriteCount, favoriteState }) => {
  return (
    <div className={styles.responseContainer}>
      <div className={styles.comment}>
        <Message alt="message" width={20} height={20} />
        <p>{commentCount}</p>
      </div>
      <div className={styles.favorite}>
        {favoriteState ? (
          <HeartClick alt="heart click" width={20} height={20} />
        ) : (
          <Heart alt="heart" width={20} height={20} />
        )}
        <p>{favoriteCount}</p>
      </div>
    </div>
  );
};

export default Response;
