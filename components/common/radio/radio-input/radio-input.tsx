import { ControllerRenderProps } from 'react-hook-form';

interface RadioInputProps {
  value: string | boolean;
  id: string;
  name: string;
  // eslint-disable-next-line
  field: ControllerRenderProps<any>;
}

export default function RadioInput({ value, id, name, field }: RadioInputProps) {
  const inputValue = typeof value === 'boolean' ? String(value) : value;
  return (
    <input
      type="radio"
      tabIndex={-1}
      value={inputValue}
      id={id}
      name={name}
      onChange={() => field.onChange(value)}
      checked={field.value === value}
    />
  );
}
