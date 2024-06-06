import { ReactNode, SetStateAction, createContext, useContext, useState } from 'react';
import styles from '../radio.module.scss';
import RadioInput from '../radio-input/radio-input';
import RadioLabel from '../radio-label/radio-label';

interface ContextType {
  radioValue: string;
  updateValue: (value: string) => void;
}

interface RadioContainerPropsType {
  values: string[];
  children: ReactNode;
  setValue: React.Dispatch<SetStateAction<string>>;
}

interface RadioType {
  text: string;
  id: string;
  value: string;
  name: string;
}

export const radioContext = createContext<ContextType | undefined>(undefined);

export function RadioContainer({ values, children, setValue }: RadioContainerPropsType) {
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
    <radioContext.Provider value={providerState}>
      <ul className={styles.radioBox}>{children}</ul>
    </radioContext.Provider>
  );
}

function RadioItemList({ text, id, value, name }: RadioType) {
  const context = useContext(radioContext);
  if (context === undefined) {
    return null;
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
