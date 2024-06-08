import Radio from '@/components/common/radio/radio';
import { useEffect, useState } from 'react';

export default function RadioTest() {
  const [test, setTest] = useState('');

  useEffect(() => {
    console.log(test);
  }, [test]);

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
  return <Radio options={radioValue} setValue={setTest} />;
}
