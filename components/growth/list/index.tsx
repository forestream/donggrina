import React from 'react';
import styles from './list.module.scss';
import Link from 'next/link';
import ListHeader from './list-header';

interface GrowthListProps {
  writerImage: string;
  petImage: string;
  nickname: string;
  category: string;
  text: string;
  isMine: boolean;
}

export default function GrowthList({ isMine, nickname, text, writerImage, petImage, category }: GrowthListProps) {
  return (
    <div className={styles.container}>
      <ListHeader
        isMine={isMine}
        nickname={nickname}
        writerImage={writerImage}
        category={category}
        petImage={petImage}
      />
      <Link href="/" className={styles.text}>
        {text}
      </Link>
    </div>
  );
}
