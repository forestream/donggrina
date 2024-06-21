import Image from 'next/image';
import styles from '../Header.module.scss';
import useModal from '@/hooks/use-modal';
import WarningModal from '../warning-modal';

interface HeaderProps {
  handleCreateClick?: () => void;
  headerName: string;
}

export default function CreateHeader({ handleCreateClick, headerName }: HeaderProps) {
  const [Modal, handleModal] = useModal();
  const handleOpen = () => {
    handleModal(true);
  };

  return (
    <>
      <header className={styles.header}>
        <button className={`${styles.leftIcon} ${styles.backIcon}`} onClick={handleOpen}>
          <Image src="/images/header/arrow-left-black.svg" alt="뒤로 가기" width={20} height={20} />
        </button>
        <div className={`${styles.imageBox} ${styles.headerName}`}>{headerName}</div>
        <button className={`${styles.rightIcon} ${styles.createButton}`} onClick={handleCreateClick}>
          등록
        </button>
      </header>
      <WarningModal Modal={Modal} handleModal={handleModal} />
    </>
  );
}
