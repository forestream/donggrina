import { InputHTMLAttributes, useContext } from 'react';
import { RadioContext } from '../context/radio-context';

export default function RadioInput({ value, id, name }: InputHTMLAttributes<HTMLInputElement>) {
  const context = useContext(RadioContext);
  if (context === undefined) {
    throw new Error('잘못된 접근 입니다.');
  }
  const { updateValue, radioValue } = context;
  const handleChange = () => {
    updateValue(value!.toString());
    console.log(radioValue);
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
