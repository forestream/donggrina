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
    const localDate = new Date(data.year, data.month - 1, data.day + 1).toISOString().split('T')[0];
    const formData = { ...data, localDate };

    if (formData.weight) {
      formData.weight = parseFloat(formData.weight);
    }

    // eslint-disable-next-line
    const { year, month, day, ...rest } = formData;
    console.log(rest);
  };

  return (
    <div style={{ paddingTop: '54px' }}>
      <Form onSubmit={handleSubmit(onSubmit)} methods={methods}>
        <Form.MainInput name="이름" label="이름" />
        <Form.DateInput label="생일" />
        <Form.WeightInput name="weight" label="무게" />
        <Form.SelectInput
          name="kind"
          label="품종"
          options={options}
          control={control}
          placeholder="품종을 선택해주세요"
        />
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </Form>
    </div>
  );
}
