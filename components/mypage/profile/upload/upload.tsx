import React from 'react';
import Image from 'next/image';
import styles from './upload.module.scss';
import useUpload from '@/hooks/use-upload';
import useModal from '@/hooks/use-modal';
import ImageUploadModal from '@/components/mypage/profile/modal/image-upload-modal';

interface UploadProps {
  image: string;
}

export default function Upload(props: UploadProps) {
  const [Modal, handleModal] = useModal();
  const { uploadRef, previewUrl, handlePreview } = useUpload({ handleModal });

  return (
    <div className={styles['image-wrapper']}>
      <button onClick={() => handleModal(true)}>
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
      <ImageUploadModal modal={Modal} uploadRef={uploadRef} onPreview={handlePreview} />
    </div>
  );
}
