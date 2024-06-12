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
    const localDate = new Date(data.year, data.month - 1, data.day + 1).toISOString().split('T')[0];
    const formData = { ...data, localDate };

    if (formData.weight) {
      formData.weight = parseFloat(formData.weight);
    }

    // rest: 백엔드에 전송할 포메팅 데이터
    // eslint-disable-next-line
    const { year, month, day, ...rest } = formData;
    console.log(rest);
  };

  return (
    <div style={{ paddingTop: '54px' }}>
      <Form onSubmit={handleSubmit(onSubmit)} methods={methods}>
        <Form.Label htmlFor="이름">이름</Form.Label>
        <Form.MainInput name="이름" />
        <Form.Label htmlFor="생일">생일</Form.Label>
        <Form.DateInput />
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
