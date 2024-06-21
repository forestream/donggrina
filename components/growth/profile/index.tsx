import React from 'react';
import styles from './profile.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

interface ProfileProps {
  name: string;
  className?: string;
  image: string;
}
export default function Profile({ name, className, image }: ProfileProps) {
  return (
    <div className={classNames(styles.profile, className)}>
      <Image className={styles.image} src={image} alt="반려동물 프로필 사진" width="20" height="20" />
      <div className={styles.name}>{name}</div>
    </div>
  );
}
