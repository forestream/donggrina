import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

export type CustomRegisterType = {
  register: UseFormRegister<FieldValues>;
  inputType: 'year' | 'month' | 'day';
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
type CustomInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const CustomRegister = ({
  register,
  inputType,
  handleBlur,
  handleInput,
}: CustomRegisterType): CustomInputProps => {
  const config = {
    required: '필수 정보입니다.',
    valueAsNumber: true,
    validate: (value: number) => {
      if (inputType === 'month' && (value < 1 || value > 12)) {
        return '월은 1부터 12 사이의 숫자여야 합니다.';
      }
      if (inputType === 'day' && (value < 1 || value > 31)) {
        return '일은 1부터 31 사이의 숫자여야 합니다.';
      }
      if (inputType === 'year' && (value < 1900 || value > 9999)) {
        return '연도는 1900 이상이어야 합니다.';
      }
      return true;
    },
  };
  const registerProps = register(inputType, config);

  return {
    ...registerProps,
    onBlur: handleBlur,
    onInput: handleInput,
  };
};
