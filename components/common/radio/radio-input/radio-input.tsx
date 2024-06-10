import { RadioType } from '@/pages/test/radio-test';
import { InputHTMLAttributes } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  field: ControllerRenderProps<RadioType>;
}

export default function RadioInput({ value, id, name, field }: RadioInputProps) {
  return (
    <input
      type="radio"
      tabIndex={-1}
      value={value}
      id={id}
      name={name}
      onChange={() => field.onChange(value)}
      checked={field.value === value}
    />
  );
}
