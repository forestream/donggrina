import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import styles from './family-diary-layout.module.scss';

export default function FamilyDiaryLayout(props: PropsWithChildren) {
  return (
    <div className={styles['wrapper']}>
      {props.children}
      <div className={styles['diary-image']}>
        <Image src="/images/family/family-dog-icon.svg" alt="" fill />
      </div>
    </div>
  );
}
