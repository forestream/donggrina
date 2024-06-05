import React from 'react';
import Form from '@/components/common/Form';

export default function InputTest() {
  const onSubmit = (data: any) => {
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
      <Form onSubmit={onSubmit}>
        <Form.MainInput name="이름" label="이름" />
        <Form.DateInput label="생일" />
        <Form.WeightInput name="weight" label="무게" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
