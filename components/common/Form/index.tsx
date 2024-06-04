import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '@/components/common/Input/main-input';
import styles from './Form.module.scss';

interface FormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}

const Form = ({ onSubmit, children }: FormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.wrapper}>
        {children}
      </form>
    </FormProvider>
  );
};

Form.Input = FormInput;

export default Form;
