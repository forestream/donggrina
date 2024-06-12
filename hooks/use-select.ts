import { useState } from 'react';

export default function useSelect<T>(item: T) {
  const [selectedItem, setSelectedItem] = useState<T>(item);
  const handleSelectedItem = (item: T) => setSelectedItem(item);

  return {
    selectedItem,
    handleSelectedItem,
  };
}
