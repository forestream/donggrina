import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '@/components/common/Input';
import styles from './Form.module.scss';

interface FormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}

const Form = ({ onSubmit, children }: FormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className={styles.wrapper}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </div>
    </FormProvider>
  );
};

Form.Input = FormInput;

export default Form;
