import useModal from '@/hooks/use-modal';

export default function ModalTest() {
  const buttons = [
    { text: '돌아가기', event: () => {} },
    { text: '계속하기', event: () => {} },
  ];

  const [Modal, setModalOpen] = useModal(
    '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 testtesttesttesttesttesttesttesttesttesttesttesttesttesttest',
    buttons,
  );

  return (
    <>
      <button style={{ marginTop: '54px' }} onClick={() => setModalOpen(true)}>
        toggleOpen
      </button>
      <Modal />
    </>
  );
}
