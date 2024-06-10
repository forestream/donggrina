import { RadioType } from '@/pages/test/radio-test';
import { InputHTMLAttributes, PropsWithChildren } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

interface LabelType extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  field: ControllerRenderProps<RadioType>;
}

export default function RadioLabel({ id, children, value, field }: LabelType) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter') {
      field.onChange(value);
    }
  };
  return (
    <label htmlFor={id} onKeyDown={handleKeyDown} tabIndex={0}>
      {children}
    </label>
  );
}
