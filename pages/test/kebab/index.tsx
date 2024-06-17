import React from 'react';
import useToggle from '../../../hooks/use-toggle';
import DropdownMenu from '../../../components/kebab/kebab';

export default function index() {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  const updateFn = () => {
    console.log('Update');
    onCloseToggle();
  };

  const deleteFn = () => {
    console.log('Delete');
    onCloseToggle();
  };

  return (
    <div style={{ paddingTop: '54px' }}>
      <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
        <DropdownMenu.Kebab />
        <DropdownMenu.Content>
          <DropdownMenu.Item onClick={updateFn}>수정</DropdownMenu.Item>
          <DropdownMenu.Item onClick={deleteFn}>삭제</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  );
}
