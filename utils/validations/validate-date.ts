import { UseFormRegister, FieldValues } from 'react-hook-form';

type CustomRegisterType = {
  register: UseFormRegister<FieldValues>;
  type: 'year' | 'month' | 'day';
};

export const CustomRegister = ({ register, type }: CustomRegisterType) => {
  const config = {
    required: '필수 정보입니다.',
    valueAsNumber: true,
    ...(type === 'month' && {
      min: { value: 1, message: '월은 1부터 12 사이의 숫자여야 합니다.' },
      max: { value: 12, message: '월은 1부터 12 사이의 숫자여야 합니다.' },
    }),
    ...(type === 'day' && {
      min: { value: 1, message: '일은 1부터 31 사이의 숫자여야 합니다.' },
      max: { value: 31, message: '일은 1부터 31 사이의 숫자여야 합니다.' },
    }),
    ...(type === 'year' && {
      min: { value: 1900, message: '연도는 1900 이상이어야 합니다.' },
      max: { value: 9999, message: `연도는 9999 이하이어야 합니다.` },
    }),
  };

  return register(type, config);
};
