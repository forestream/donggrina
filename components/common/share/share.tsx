import ShareModal from '@/components/start-pet/finish/share-modal/share-modal';
import { PropsWithChildren, ReactNode } from 'react';

interface ShareType {
  Modal: ({ children }: PropsWithChildren) => ReactNode;
  handleModal: (isOpen: boolean) => void;
  code: string;
}

export default function Share({ Modal, handleModal, code }: ShareType) {
  const closeModal = () => {
    handleModal(false);
  };
  return (
    <Modal>
      <ShareModal closeModal={closeModal} code={code} />
    </Modal>
  );
}
