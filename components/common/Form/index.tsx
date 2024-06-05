import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import MainInput from '@/components/common/Input/main-input';
import DateInput from '../Input/date-input';
import styles from './Form.module.scss';
import WeightInput from '../Input/weight-input';

interface FormProps {
  // eslint-disable-next-line
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}

export default function Form({ onSubmit, children }: FormProps) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.wrapper}>
        {children}
      </form>
    </FormProvider>
  );
}

Form.MainInput = MainInput;
Form.DateInput = DateInput;
Form.WeightInput = WeightInput;
