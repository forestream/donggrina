import Button from '@/components/common/button/button';
import ClipboardButton from '@/components/common/share/clipboard-button/clipboard-button';
import KakaoShareButton from '@/components/common/share/kakao-share-button/kakao-share-button';
import styles from './share-modal.module.scss';
import { useState } from 'react';

interface ShareModalType {
  closeModal: () => void;
  code: string;
}

export default function ShareModal({ closeModal, code }: ShareModalType) {
  const [clipboardText, setClipboardText] = useState(false);
  const handleClipboardText = () => {
    setClipboardText(true);
  };
  return (
    <>
      <div className={styles.box}>
        <p className={styles.shareTitle}>
          가족 초대 코드를 전달해보세요!
          {clipboardText && <span className={styles.clipboardSuccess}>클립보드에 저장되었습니다.</span>}
        </p>
        <ul>
          <li>
            <ClipboardButton code={code} onClick={handleClipboardText} />
          </li>
          <li>
            <KakaoShareButton code={code} />
          </li>
        </ul>
        <div className={styles.buttonBox}>
          <Button className="primary" type="button" onClick={closeModal} leftRound rightRound>
            닫기
          </Button>
        </div>
      </div>
    </>
  );
}
