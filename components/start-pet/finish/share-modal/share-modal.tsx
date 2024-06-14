import Button from '@/components/common/button/button';
import ClipboardButton from '@/components/common/share/clipboard-button/clipboard-button';
import KakaoShareButton from '@/components/common/share/kakao-share-button/kakao-share-button';
import styles from './share-modal.module.scss';

interface ShareModalType {
  closeModal: () => void;
  code: string;
}

export default function ShareModal({ closeModal, code }: ShareModalType) {
  return (
    <>
      <div className={styles.box}>
        <p>가족 초대 코드를 전달해보세요!</p>
        <ul>
          <li>
            <ClipboardButton code={code} />
          </li>
          <li>
            <KakaoShareButton code={code} />
          </li>
        </ul>
        <div className={styles.buttonBox}>
          <Button className="primary" type="button" onClick={closeModal}>
            닫기
          </Button>
        </div>
      </div>
    </>
  );
}
