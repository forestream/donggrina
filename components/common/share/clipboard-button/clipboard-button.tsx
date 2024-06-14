import { onCopy } from '@/utils/clipboard';
import ClipboardSVG from '@/public/images/share/Copy_alt.svg';
import styles from './clipboard-button.module.scss';

interface ClipboardType {
  text: string;
}

export default function ClipboardButton({ text }: ClipboardType) {
  const handleClick = async () => {
    try {
      await onCopy(text);
      console.log('복사 완료');
    } catch {
      console.log('복사 실패');
    }
  };
  return (
    <div className={styles.ClipboardButtonBox}>
      <button type="button" onClick={handleClick} title="초대코드 복사하기">
        <ClipboardSVG />
      </button>
      <span>클립보드</span>
    </div>
  );
}
