import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './file-image.module.scss';

interface ImageValueType {
  imageValue: FileList;
  imageUrl: string | undefined;
  watchType: string;
}

export default function FileImage({ imageValue, imageUrl, watchType }: ImageValueType) {
  const defaultImageUrl =
    watchType === '강아지' || watchType === '' ? '/images/start-pet/Dog.png' : '/images/start-pet/Cat.png';
  const [imageSrc, setImageSrc] = useState<string>(imageUrl || defaultImageUrl);

  useEffect(() => {
    if (imageValue && imageValue.length > 0) {
      const file = imageValue[0];
      if (file instanceof File) {
        setImageSrc(URL.createObjectURL(file));
        return () => URL.revokeObjectURL(imageSrc); // 메모리 누수 방지
      }
    } else if (!imageUrl) {
      setImageSrc(defaultImageUrl);
    }
  }, [imageValue, imageUrl, watchType, defaultImageUrl]);
  return (
    <div className={styles.imgBox}>
      <Image src={imageSrc} fill priority sizes="100%" alt="프로필 이미지" />
    </div>
  );
}
