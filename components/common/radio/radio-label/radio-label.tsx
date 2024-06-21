import { PropsWithChildren } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

interface LabelType extends PropsWithChildren {
  id: string;
  value: string | boolean;
  // eslint-disable-next-line
  field: ControllerRenderProps<any>;
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
