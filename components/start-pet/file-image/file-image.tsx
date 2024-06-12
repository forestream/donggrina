import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './file-image.module.scss';

interface ImageValueType {
  imageValue: FileList;
}

export default function FileImage({ imageValue }: ImageValueType) {
  const [imageSrc, setImageSrc] = useState<string>('/images/start-pet/Dog.png');
  useEffect(() => {
    if (imageValue && imageValue.length > 0) {
      const file = imageValue[0];
      setImageSrc(URL.createObjectURL(file));
    }
  }, [imageValue]);
  return (
    <div className={styles.imgBox}>
      <Image src={imageSrc} objectFit="cover" fill alt="프로필 이미지" />
    </div>
  );
}
