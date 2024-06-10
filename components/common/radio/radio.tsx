import { UseFormReturn } from 'react-hook-form';
import { RadioContainer } from './context/radio-context';
import { RadioType } from '@/pages/test/radio-test';

interface RadioPropsType {
  options: {
    value: string;
    text: string;
    id: string;
    name: string;
  }[];
  control: UseFormReturn<RadioType>['control'];
  inputName: keyof RadioType;
}

export default function Radio({ options, control, inputName }: RadioPropsType) {
  return (
    <RadioContainer control={control}>
      {options.map((item, index) => {
        return <RadioContainer.RadioItemList key={index} inputName={inputName} {...item} />;
      })}
    </RadioContainer>
  );
}
