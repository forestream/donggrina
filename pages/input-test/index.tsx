import React from 'react';
<<<<<<< HEAD
import Form from '@/components/common/Form';

export default function InputTest() {
  const onSubmit = (data: any) => {
    const localDate = new Date(data.year, data.month - 1, data.day).toISOString().split('T')[0];
    const formData = { ...data, localDate };

    const { year, month, day, ...rest } = formData;
    console.log(rest);
    // console.log(formData);
  };

  return (
    <div style={{ paddingTop: '54px' }}>
      <Form onSubmit={onSubmit}>
        <Form.MainInput name="이름" label="이름" />
        <Form.DateInput label="생일" />
        <button type="submit">Submit</button>
      </Form>
    </div>
=======
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import FormInput from '@/components/common/Input';
import FormLabel from '@/components/common/Label';
import styles from './index.module.scss';

interface FormData {
  name: string;
  nickname: string;
}

function App() {
  const methods = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <FormLabel htmlFor="name">가족의 이름을 알려주세요!</FormLabel>
          <FormInput name="name" />
        </div>
        <div>
          <FormLabel htmlFor="nickname">가족 내 본인의 이름을 입력해주세요.</FormLabel>
          <FormInput name="nickname" />
        </div>
      </form>
    </FormProvider>
>>>>>>> develop
  );
}
