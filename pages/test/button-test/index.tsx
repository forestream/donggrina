import Button from '@/components/common/button/button';
import Modal from '@/components/common/modal/modal';
import styles from './index.module.scss';

function Buttons() {
  const handleClick = () => {
    console.log('b');
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
  const handleClose = () => {
    console.log('a');
  };
  return (
    <>
      <div>
        <Modal message="테스트" onClose={handleClose} buttons={<Buttons />} />
      </div>
    </>
  );
}
