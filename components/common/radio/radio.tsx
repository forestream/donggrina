import { SetStateAction } from 'react';
import { RadioContainer } from './context/radio-context';

interface RadioPropsType {
  options: {
    value: string;
    text: string;
    id: string;
    name: string;
  }[];
  setValue: React.Dispatch<SetStateAction<string>>;
}

// Radio는 상태 설정 함수, 배열을 받습니다.
// 배열에는 value, text, id, name을 포함합니다.
export default function Radio({ options, setValue }: RadioPropsType) {
  const optionValues = options.map((item) => item.value);

  return (
    <RadioContainer values={optionValues} setValue={setValue}>
      {options.map((item, index) => {
        return <RadioContainer.RadioItemList key={index} {...item} />;
      })}
    </RadioContainer>
  );
}
