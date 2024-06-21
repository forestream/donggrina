import React, { PropsWithChildren, RefObject } from 'react';
import Button from '@/components/common/button/button';
import styles from './image-upload-modal.module.scss';
import { useUpdateProfile } from '@/hooks/queries/my/user/mutation';

interface ModalImageProps {
  modal: (props: PropsWithChildren) => React.ReactNode;
  uploadRef: RefObject<HTMLInputElement>;
  onPreview: () => void;
  imageId: number | null;
  nickname: string;
}

export default function ImageUploadModal(props: ModalImageProps) {
  const handleUpload = async () => props.uploadRef.current!.click();

  const profileMutation = useUpdateProfile();
  const handleResetImage = () => profileMutation.mutate({ imageId: null, nickname: props.nickname });

  return (
    <props.modal>
      <p className={styles['modal-text']}>프로필 사진을 변경하시겠습니까?</p>
      <div className={styles['modal-button-layout']}>
        <Button className="default" onClick={handleResetImage}>
          이미지 초기화 하기
        </Button>
        <Button className="primary" onClick={handleUpload}>
          이미지 변경하기
        </Button>
      </div>
      <input
        type="file"
        id="profile"
        accept="image/*"
        className={styles['profile-input']}
        ref={props.uploadRef}
        onChange={props.onPreview}
      />
    </props.modal>
  );
}
