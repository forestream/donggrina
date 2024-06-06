import { useContext } from 'react';
import { radioContext } from '../context/radio-context';

interface InputType {
  value: string;
  id: string;
  name: string;
}

export default function RadioInput({ value, id, name }: InputType) {
  const context = useContext(radioContext);
  if (context === undefined) {
    return null;
  }
  const { updateValue, radioValue } = context;
  const handleChange = () => {
    updateValue(value);
  };
  return (
    <input
      type="radio"
      tabIndex={-1}
      value={value}
      id={id}
      name={name}
      onChange={handleChange}
      checked={value === radioValue}
    />
  );
}
