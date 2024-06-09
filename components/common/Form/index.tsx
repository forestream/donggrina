import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import MainInput from '@/components/common/Input/main-input';
import DateInput from '../Input/date-input';
import WeightInput from '../Input/weight-input';
import styles from './Form.module.scss';
import Select from '../select';

interface FormProps {
  // eslint-disable-next-line
  onSubmit: (data: any) => void;
  children: React.ReactNode;
  methods: UseFormReturn;
}

export default function Form({ onSubmit, children, methods }: FormProps) {
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
Form.SelectInput = Select;
