import Script from 'next/script';
import KakaoShareButton from '@/components/common/share/kakao-share-button/kakao-share-button';
import ClipboardButton from '@/components/common/share/clipboard-button/clipboard-button';
import styles from './index.module.scss';
import useModal from '@/hooks/use-modal';
import Button from '@/components/common/button/button';
import { getCode, getRefresh } from '@/api/my';
import { getCookie, setCookie } from 'cookies-next';

export default function ShareTest() {
  const [Modal, handleModal] = useModal();
  const handleGetCode = async () => {
    try {
      const response = await getCode();
      console.log(response);
    } catch {
      console.log('에러');
    }
  };
  const openModal = () => {
    handleModal(true);
    handleGetCode();
  };
  const closeModal = () => {
    handleModal(false);
  };
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* 모달 열리는 버튼 클릭시 초대코드 setter 함수로 값 변경 후 보내야함 */}
      <Modal>
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
      </Modal>
      <Button className="primary" type="button" onClick={openModal}>
        클릭
      </Button>

      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity={process.env.NEXT_PUBLIC_KAKAO_INTEGRITY_VALUE}
        crossOrigin="anonymous"
      ></Script>
    </div>
  );
}
