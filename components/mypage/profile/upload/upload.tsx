import React from 'react';
import Image from 'next/image';
import styles from './upload.module.scss';
import useUpload from '@/hooks/use-upload';

interface UploadProps {
  onOpenModal: (isOpen: boolean) => void;
  image: string;
}

export default function Upload(props: UploadProps) {
  const { uploadRef, previewUrl, handlePreview } = useUpload();

  return (
    <div className={styles['image-wrapper']}>
      <button onClick={() => props.onOpenModal(true)}>
        <Image
          src={previewUrl || props.image}
          objectFit="cover"
          objectPosition="center"
          alt=""
          fill
          className={styles['profile-image']}
        />
        <Image
          src="images/start-pet/fileButton.svg"
          alt="프로필 이미지 수정하기"
          className={styles['profile-image-icon']}
          width={34}
          height={34}
        />
      </button>
    </div>
  );
}
