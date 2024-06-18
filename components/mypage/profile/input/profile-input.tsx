import React from 'react';
import Image from 'next/image';
import useModal from '@/hooks/use-modal';
import NicknameModal from '@/components/mypage/profile/modal/nickname-modal';
import styles from './profile-input.module.scss';

interface ProfileInputProps {
  nickname: string;
}

export default function ProfileInput(props: ProfileInputProps) {
  const [Modal, handleModal] = useModal();

  return (
    <div className={styles['profile-name']}>
      <span>{props.nickname}</span>
      <button onClick={() => handleModal(true)}>
        <Image src="images/edit-gray-icon.svg" alt="닉네임 변경하기" width={17} height={17} />
      </button>
      <NicknameModal modal={Modal} nickname={props.nickname} />
    </div>
  );
}
