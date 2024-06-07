import Script from 'next/script';
import KakaoShareButton from '@/components/common/share/kakao-share-button/kakao-share-button';
import ClipboardButton from '@/components/common/share/clipboard-button/clipboard-button';
import styles from './index.module.scss';

export default function ShareTest() {
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* 모달 열리는 버튼 클릭시 초대코드 setter 함수로 값 변경 후 보내야함 */}
      <div className={styles.box}>
        <KakaoShareButton />
        <ClipboardButton text="임시" />
      </div>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity={process.env.NEXT_PUBLIC_KAKAO_INTEGRITY_VALUE}
        crossOrigin="anonymous"
      ></Script>
    </div>
  );
}
