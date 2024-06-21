import useModal from '@/hooks/use-modal';

export default function ModalTest() {
  const [Modal, handleModal] = useModal();

  return (
    <>
      <button style={{ marginTop: '54px' }} onClick={() => handleModal(true)}>
        toggleOpen
      </button>
      <Modal>
        <div>modal test</div>
      </Modal>
    </>
  );
}
