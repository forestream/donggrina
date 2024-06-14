import Button from '@/components/common/button/button';
import ClipboardButton from '@/components/common/share/clipboard-button/clipboard-button';
import KakaoShareButton from '@/components/common/share/kakao-share-button/kakao-share-button';
import styles from './share-modal.module.scss';

interface ShareModalType {
  closeModal: () => void;
}

export default function ShareModal({ closeModal }: ShareModalType) {
  return (
    <>
      <div className={styles.box}>
        <p>가족 초대 코드를 전달해보세요!</p>
        <ul>
          <li>
            <ClipboardButton text="임시" />
          </li>
          <li>
            <KakaoShareButton />
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
