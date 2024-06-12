import React from 'react';
import styles from './profile.module.scss';
import ProfileIcon from '@/public/images/growth/profile-icon.svg';
import classNames from 'classnames';

interface ProfileProps {
  name: string;
  className?: string;
}
export default function Profile({ name, className }: ProfileProps) {
  return (
    <div className={classNames(styles.profile, className)}>
      <ProfileIcon alt="프로필 아이콘" />
      <div className={styles.name}>{name}</div>
    </div>
  );
}
