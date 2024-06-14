import Hyperlink from '@/components/common/button/hyperlink';
import Button from '@/components/common/button/button';
import useModal from '@/hooks/use-modal';
import ShareModal from '../share-modal/share-modal';

export default function PetsLinkList() {
  const [Modal, handleModal] = useModal();
  const openModal = () => {
    handleModal(true);
  };
  const closeModal = () => {
    handleModal(false);
  };
  return (
    <>
      <li>
        <Hyperlink className="secondary" href="/start-pet" round>
          반려동물 추가하기
        </Hyperlink>
      </li>
      <li>
        <Button type="button" className="primary" round onClick={openModal}>
          가족 초대하기
        </Button>
      </li>
      <li>
        <Hyperlink className="tertiary" href="/family" round>
          다음에 초대하기
        </Hyperlink>
      </li>
      <Modal>
        <ShareModal closeModal={closeModal} />
      </Modal>
    </>
  );
}
