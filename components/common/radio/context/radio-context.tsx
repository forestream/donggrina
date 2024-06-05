import { ChangeEvent, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';
import styles from '../radio.module.scss';

interface ContextType {
  radioValue: string;
  setRadioValue: React.Dispatch<SetStateAction<string>>;
  setValue: React.Dispatch<SetStateAction<string>>;
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

const radioContext = createContext<ContextType | undefined>(undefined);

export function RadioContainer({ values, children, setValue }: RadioContainerPropsType) {
  const [radioValue, setRadioValue] = useState(values[0]);
  const providerState = {
    radioValue,
    setRadioValue,
    setValue,
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
  const { setRadioValue, radioValue, setValue } = context;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
    setValue(e.target.value);
  };
  return (
    <li>
      <input type="radio" value={value} id={id} name={name} onChange={handleChange} checked={value === radioValue} />
      <label htmlFor={id}>
        <span>{text}</span>
      </label>
    </li>
  );
}

RadioContainer.RadioItemList = RadioItemList;
