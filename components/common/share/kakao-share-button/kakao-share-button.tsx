import { onKakaoShare } from '@/utils/kakao-share';
import { config } from '@/config';
import KakaoSVG from '@/public/images/share/kakao_logo.svg';
import styles from './kakao-share-button.module.scss';

interface KakaoShareType {
  code: string;
}

export default function KakaoShareButton({ code }: KakaoShareType) {
  const { kakaoShareUrl } = config;
  const shareValue = {
    url: kakaoShareUrl,
    description: `초대 코드 : ${code}`,
    title: '가족 등록하기',
  };
  const handleClick = () => {
    onKakaoShare(shareValue);
  };
  return (
    <div className={styles.kakaoButtonBox}>
      <button type="button" onClick={handleClick} title="카카오톡으로 초대코드 공유하기">
        <KakaoSVG />
      </button>
      <span>카카오톡</span>
    </div>
  );
}
