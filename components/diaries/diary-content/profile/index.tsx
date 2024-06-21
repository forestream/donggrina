import React from 'react';
import styles from './profile.module.scss';
import Vector from '@/public/images/diaries/vector.svg';

interface ProfileProps {
  author: string;
  authorImage: string;
  petImages: string[];
}

const Profile: React.FC<ProfileProps> = ({ author, authorImage, petImages }) => {
  const displayPetImages = petImages.slice(0, 3);
  const extraImagesCount = petImages.length - 3;

  return (
    <div className={styles.profileContainer}>
      <img src={authorImage} alt="Profile Image" width={20} height={20} className={styles.authorImage} />
      <p className={styles.author}>{author}</p>
      <Vector alt="vector" />
      <div className={styles.petImagesContainer}>
        {displayPetImages.map((image, index) => (
          <img key={index} src={image} alt={`Pet ${index}`} width={20} height={20} className={styles.petImage} />
        ))}
        {extraImagesCount > 0 && <div className={styles.extraImages}>+{extraImagesCount}</div>}
      </div>
    </div>
  );
};

export default Profile;
