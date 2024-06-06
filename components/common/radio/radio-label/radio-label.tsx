import { ReactNode } from 'react';

interface LabelType {
  id: string;
  children: ReactNode;
  updateValue: (value: string) => void;
  value: string;
}

export default function RadioLabel({ id, children, updateValue, value }: LabelType) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter') {
      updateValue(value);
    }
  };
  return (
    <label htmlFor={id} onKeyDown={handleKeyDown}>
      {children}
    </label>
  );
}
