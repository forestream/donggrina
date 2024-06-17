import React from 'react';
import Image from 'next/image';
import styles from './profile-input.module.scss';

interface ProfileInputProps {
  nickname: string;
  onOpenModal: (isOpen: boolean) => void;
}

export default function ProfileInput(props: ProfileInputProps) {
  return (
    <div className={styles['profile-name']}>
      <span>{props.nickname}</span>
      <button onClick={() => props.onOpenModal(true)}>
        <Image src="images/edit-gray-icon.svg" alt="닉네임 변경하기" width={17} height={17} />
      </button>
    </div>
  );
}
