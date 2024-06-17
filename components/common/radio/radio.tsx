import { UseFormReturn } from 'react-hook-form';
import { RadioContainer } from './context/radio-context';

interface RadioPropsType {
  options: {
    value: string | boolean;
    text: string;
    id: string;
  }[];
  // eslint-disable-next-line
  control: UseFormReturn<any>['control'];
  // eslint-disable-next-line
  name: any;
}

export default function Radio({ options, control, name }: RadioPropsType) {
  return (
    <RadioContainer control={control}>
      {options.map((item, index) => {
        return <RadioContainer.RadioItemList key={index} name={name} {...item} />;
      })}
    </RadioContainer>
  );
}
