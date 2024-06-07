import { InputHTMLAttributes, PropsWithChildren } from 'react';

interface LabelType {
  updateValue: (value: string) => void;
}

export default function RadioLabel({
  id,
  children,
  updateValue,
  value,
}: PropsWithChildren<InputHTMLAttributes<HTMLInputElement> & LabelType>) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter') {
      updateValue(value!.toString());
    }
  };
  return (
    <label htmlFor={id} onKeyDown={handleKeyDown} tabIndex={0}>
      {children}
    </label>
  );
}
