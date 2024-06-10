import Radio from '@/components/common/radio/radio';
import { useForm } from 'react-hook-form';

export interface RadioType {
  type: string;
}

export default function RadioTest() {
  const { control, handleSubmit } = useForm<RadioType>({
    defaultValues: {
      type: 'dog',
    },
  });

  const onSubmit = (data: RadioType) => {
    console.log(data);
  };

  const radioValue = [
    {
      value: 'dog',
      text: '강아지',
      id: 'dog',
    },
    {
      value: 'cat',
      text: '고양이',
      id: 'cat',
    },
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Radio options={radioValue} control={control} name={'type'} />
      <button type="submit">버튼</button>
    </form>
  );
}
