import Radio from '@/components/common/radio/radio';
import { useForm } from 'react-hook-form';

export interface RadioType {
  value: string;
}

export default function RadioTest() {
  const { control, handleSubmit } = useForm<RadioType>({
    defaultValues: {
      value: 'dog',
    },
  });

  const onSubmit = (data: RadioType) => {
    console.log(data);
  };

  const radioValue = [
    {
      name: '종류',
      value: 'dog',
      text: '강아지',
      id: 'dog',
    },
    {
      name: '종류',
      value: 'cat',
      text: '고양이',
      id: 'cat',
    },
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Radio options={radioValue} control={control} inputName={'value'} />
      <button type="submit">버튼</button>
    </form>
  );
}
