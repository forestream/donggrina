import React from 'react';
import styles from './profile.module.scss';
import ProfileImage from '@/public/images/diaries/profile.svg';
import Vector from '@/public/images/diaries/vector.svg';

interface ProfileProps {
  author: string;
}

const Profile: React.FC<ProfileProps> = ({ author }) => {
  return (
    <div className={styles.authorContainer}>
      <ProfileImage alt="Profile Image" width={20} height={20} />
      <p className={styles.author}>{author}</p>
      <Vector alt="vector" width={10} height={15} />
    </div>
  );
};

export default Profile;
