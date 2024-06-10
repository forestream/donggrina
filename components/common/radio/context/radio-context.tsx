import { InputHTMLAttributes, PropsWithChildren, createContext, useContext } from 'react';
import styles from '../radio.module.scss';
import RadioInput from '../radio-input/radio-input';
import RadioLabel from '../radio-label/radio-label';
import { Controller, UseFormReturn } from 'react-hook-form';
import { RadioType } from '@/pages/test/radio-test';

interface RadioContainerPropsType {
  control: UseFormReturn<RadioType>['control'];
}

interface RadioItemListType {
  text: string;
  name: keyof RadioType;
}

const InitialState = {
  control: {} as UseFormReturn<RadioType>['control'],
};

export const RadioContext = createContext<RadioContainerPropsType>(InitialState);

export function RadioContainer({ children, control }: PropsWithChildren<RadioContainerPropsType>) {
  const contextValue = {
    control,
  };
  return (
    <RadioContext.Provider value={contextValue}>
      <ul className={styles.radioBox}>{children}</ul>
    </RadioContext.Provider>
  );
}

function RadioItemList({ text, id, value, name }: InputHTMLAttributes<HTMLInputElement> & RadioItemListType) {
  const context = useContext(RadioContext);
  if (context === undefined) {
    throw new Error('잘못된 접근 입니다.');
  }
  const { control } = context;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <li>
          <RadioInput value={value} id={id} name={name} field={field} />
          <RadioLabel value={value} id={id} field={field}>
            {text}
          </RadioLabel>
        </li>
      )}
    />
  );
}

RadioContainer.RadioItemList = RadioItemList;
