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
  petName: string;
  id: number;
}

export default function GrowthList({
  petName,
  isMine,
  nickname,
  text,
  writerImage,
  petImage,
  category,
  id,
}: GrowthListProps) {
  return (
    <div className={styles.container}>
      <ListHeader
        isMine={isMine}
        nickname={nickname}
        writerImage={writerImage}
        category={category}
        petImage={petImage}
        petName={petName}
        id={id}
      />
      <Link href="/" className={styles.text}>
        {text}
      </Link>
    </div>
  );
}
