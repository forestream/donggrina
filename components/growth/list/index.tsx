import React, { MouseEventHandler, useRef } from 'react';
import styles from './list.module.scss';
import Link from 'next/link';
import ListHeader from './list-header';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { childrenHorizontalVariants } from '@/components/framer';

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
  const router = useRouter();
  const optionRef = useRef<HTMLDivElement>(null);
  const handleClick: MouseEventHandler = (e) => {
    if (optionRef.current?.contains(e.target as Node)) return;
    router.push(`/growth/${id}`);
  };
  return (
    <motion.div variants={childrenHorizontalVariants} className={styles.container} onClick={handleClick}>
      <ListHeader
        isMine={isMine}
        nickname={nickname}
        writerImage={writerImage}
        category={category}
        petImage={petImage}
        petName={petName}
        id={id}
        optionRef={optionRef}
      />
      <Link href={`growth/${id}`} className={styles.text}>
        {text}
      </Link>
    </motion.div>
  );
}
