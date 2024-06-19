import React from 'react';
import styles from './content-image.module.scss';

interface ContentImageProps {
  contentImage?: string; // contentImage를 문자열로 설정
}

const ContentImage: React.FC<ContentImageProps> = ({ contentImage }) => {
  if (!contentImage) return null; // 이미지가 없으면 아무것도 렌더링하지 않음

  return (
    <div className={styles.diarycontentImage}>
      <img src={contentImage} alt="content image" />
    </div>
  );
};

export default ContentImage;
