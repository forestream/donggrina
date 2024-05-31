import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '@/components/common/Input';

function App() {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInput name="name" label="가족의 이름을 알려주세요!" />
        <FormInput name="nickname" label="가족 내 본인의 이름을 입력해주세요." />
      </form>
    </FormProvider>
  );
}

export default App;
