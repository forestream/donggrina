import React from 'react';
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
  );
}
