import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './file-image.module.scss';

interface ImageValueType {
  imageValue: FileList;
  imageUrl: string | undefined;
}

export default function FileImage({ imageValue, imageUrl }: ImageValueType) {
  const url = imageUrl ? imageUrl : '/images/start-pet/Dog.png';
  const [imageSrc, setImageSrc] = useState<string>(url);
  useEffect(() => {
    if (imageValue && imageValue.length > 0) {
      const file = imageValue[0];
      if (file instanceof File) {
        setImageSrc(URL.createObjectURL(file));
      }
    }
  }, [imageValue]);
  return (
    <div className={styles.imgBox}>
      <Image src={imageSrc} fill priority sizes="100%" alt="프로필 이미지" />
    </div>
  );
}
