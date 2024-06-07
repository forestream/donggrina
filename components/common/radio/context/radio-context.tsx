import { InputHTMLAttributes, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react';
import styles from '../radio.module.scss';
import RadioInput from '../radio-input/radio-input';
import RadioLabel from '../radio-label/radio-label';

interface ContextType {
  radioValue: string;
  updateValue: (value: string) => void;
}

interface RadioContainerPropsType {
  values: string[];
  setValue: React.Dispatch<SetStateAction<string>>;
}

const InitialState = {
  radioValue: '',
  updateValue: () => {},
};

export const RadioContext = createContext<ContextType>(InitialState);

export function RadioContainer({ values, children, setValue }: PropsWithChildren<RadioContainerPropsType>) {
  const [radioValue, setRadioValue] = useState(values[0]);
  const updateValue = (value: string) => {
    setRadioValue(value);
    setValue(value);
  };
  const providerState = {
    radioValue,
    updateValue,
  };
  return (
    <RadioContext.Provider value={providerState}>
      <ul className={styles.radioBox}>{children}</ul>
    </RadioContext.Provider>
  );
}

interface RadioItemListType {
  text: string;
}

function RadioItemList({ text, id, value, name }: InputHTMLAttributes<HTMLInputElement> & RadioItemListType) {
  const context = useContext(RadioContext);
  if (context === undefined) {
    throw new Error('잘못된 접근 입니다.');
  }
  const { updateValue } = context;
  return (
    <li>
      <RadioInput value={value} id={id} name={name} />
      <RadioLabel id={id} updateValue={updateValue} value={value}>
        {text}
      </RadioLabel>
    </li>
  );
}

RadioContainer.RadioItemList = RadioItemList;
