import Buttons from '@/components/common/common-button/button';
import Modal from '@/components/common/modal/modal';
import styles from './index.module.scss';

function Button() {
  const handleClick = () => {
    console.log('b');
  };
  return (
    // <div className={styles.box}>
    //   <Buttons type="button" className="empty" onClick={handleClick} disabled={false}>
    //     흰버튼
    //   </Buttons>
    //   <Buttons type="button" className="primary" onClick={handleClick} disabled={false}>
    //     색버튼
    //   </Buttons>
    // </div>
    <div className={styles.box}>
      <Buttons type="button" className="primary" onClick={handleClick} disabled={false}>
        색버튼
      </Buttons>
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
        <Modal message="테스트" onClose={handleClose} buttons={<Button />} />
      </div>
    </>
  );
}
