import Button from '@/components/common/button/button';
import RenameModal from './rename-modal/rename-modal';
import useModal from '@/hooks/use-modal';

interface RenameType {
  renameData: {
    name: string;
    id: number;
  };
}

export default function FamilyRenameButton({ renameData }: RenameType) {
  const [Modal, handleModal] = useModal();
  const handleOpen = () => {
    handleModal(true);
  };
  return (
    <>
      <Button type="button" className="secondary" round onClick={handleOpen}>
        가족 이름 변경
      </Button>
      <RenameModal Modal={Modal} handleModal={handleModal} renameData={renameData} />
    </>
  );
}
