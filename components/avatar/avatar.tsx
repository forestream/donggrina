import React, { ImgHTMLAttributes, PropsWithChildren } from 'react';
import Image from 'next/image';
import styles from './avatar.module.scss';

interface AvatarImageProps extends Pick<ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
  image: string;
  size?: 'small';
  border?: 'gray' | 'main';
}

interface AvatarProps {
  image: string;
  size?: 'small';
  border?: 'gray' | 'main';
  name: string;
}

export default function Avatar(props: PropsWithChildren<AvatarProps>) {
  return (
    <div className={styles.layout}>
      <AvatarImage image={props.image} size={props.size} border={props.border} />
      <AvatarName>{props.name}</AvatarName>
    </div>
  );
}

export function AvatarImage(props: AvatarImageProps) {
  const border = props.border || 'gray';
  const image = props.image || '/images/family/default-image.svg';
  const className = `${styles['avatar-image']} ${props.size && styles[props.size]} ${styles[`border-${border}`]}`;
  return (
    <div className={className}>
      <Image src={image} alt={props.alt || ''} fill />
    </div>
  );
}

export function AvatarName(props: PropsWithChildren) {
  return <span className={styles['avatar-name']}>{props.children}</span>;
}
