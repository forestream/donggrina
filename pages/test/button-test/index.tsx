import Button from '@/components/common/button/button';
import styles from './index.module.scss';
import useModal from '@/hooks/use-modal';

function Buttons({ onClose }: { onClose: (v: boolean) => void }) {
  const handleClick = () => {
    console.log('b');
    onClose(false);
  };
  return (
    <div className={styles.box}>
      <Button type="button" className="primary" onClick={handleClick} round>
        색버튼
      </Button>
    </div>
  );
}

export default function ButtonTest() {
  const [Modal, handleModal] = useModal();
  return (
    <Modal>
      <Buttons onClose={handleModal} />
    </Modal>
  );
}
