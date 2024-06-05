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

// Radio는 값을 저장할 set
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
