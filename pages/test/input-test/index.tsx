import React from 'react';
import Form from '@/components/common/Form';
import { useForm } from 'react-hook-form';

const options = ['고양이', '강아지'];

export default function InputTest() {
  // eslint-disable-next-line
  const methods = useForm<any>({
    mode: 'onBlur',
  });
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = methods;

  // eslint-disable-next-line
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div style={{ paddingTop: '54px' }}>
      <Form onSubmit={handleSubmit(onSubmit)} methods={methods}>
        <Form.Label htmlFor="이름">이름</Form.Label>
        <Form.MainInput name="이름" />
        <Form.Label htmlFor="생일">생일</Form.Label>
        <Form.DateInput name="생일" control={control} />
        <Form.Label htmlFor="입양일">입양일</Form.Label>
        <Form.DateInput name="입양일" control={control} />
        <Form.Label htmlFor="무게">무게</Form.Label>
        <Form.WeightInput name="weight" />
        <Form.Label htmlFor="품종">품종</Form.Label>
        <Form.SelectInput name="kind" options={options} control={control} placeholder="품종을 선택해주세요" />
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </Form>
    </div>
  );
}
