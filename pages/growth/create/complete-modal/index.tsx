import React from 'react';
import styles from './complete-modal.module.scss';
import Button from '@/components/common/button/button';

interface CompleteModalProps {
  closeModal: () => void;
}
export default function CompleteModal({ closeModal }: CompleteModalProps) {
  return (
    <div className={styles.box}>
      <p className={styles.text}>성장기록 등록이 완료되었습니다.</p>
      <div className={styles.buttonBox}>
        <Button className="primary" type="button" onClick={closeModal}>
          닫기
        </Button>
      </div>
    </div>
  );
}
