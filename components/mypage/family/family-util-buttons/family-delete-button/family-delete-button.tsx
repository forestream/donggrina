import Button from '@/components/common/button/button';
import useModal from '@/hooks/use-modal';
import DeleteModal from './delete-modal/delete-modal';

interface DeleteButtonType {
  groupId: number;
}

export default function FamilyDeleteButton({ groupId }: DeleteButtonType) {
  const [Modal, handleModal] = useModal();
  const handleOpen = () => {
    handleModal(true);
  };
  return (
    <>
      <Button type="button" className="tertiary" round onClick={handleOpen}>
        가족 페쇄
      </Button>
      <DeleteModal Modal={Modal} handleModal={handleModal} groupId={groupId} />
    </>
  );
}
