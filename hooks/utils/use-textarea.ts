import { ChangeEventHandler, useRef, useState } from 'react';

export default function useTextarea(defaultValue?: string) {
  const [value, setValue] = useState(defaultValue || '');
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleValueChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => setValue(event.target.value);

  const handleResizeHeight = () => {
    if (!ref.current) return;
    ref.current.style.height = 'auto';
    ref.current.style.height = ref.current.scrollHeight + 'px';
  };

  const handleResetValue = () => setValue('');

  const isDisbaled = value.trim().length === 0;

  return {
    ref,
    value,
    isDisbaled,
    handleValueChange,
    handleResizeHeight,
    handleResetValue,
  };
}
