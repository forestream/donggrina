import useToggle from '@/hooks/use-toggle';
import React from 'react';
import DropdownMenu from './kebab';

interface KebabProps {
  updateFn: () => void;
  deleteFn: () => void;
}

export default function Kebab(props: KebabProps) {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  const updateFn = () => {
    props.updateFn();
    onCloseToggle();
  };

  const deleteFn = () => {
    props.deleteFn();
    onCloseToggle();
  };

  return (
    <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
      <DropdownMenu.Kebab color="gray" />
      <DropdownMenu.Content>
        <DropdownMenu.Item onClick={updateFn}>수정</DropdownMenu.Item>
        <DropdownMenu.Item onClick={deleteFn}>삭제</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
