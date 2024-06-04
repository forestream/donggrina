import React from 'react';
import Form from '@/components/common/Form';

export default function InputTest() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div style={{ paddingTop: '54px' }}>
      <Form onSubmit={onSubmit}>
        <Form.MainInput name="이름" label="이름" />
        <Form.DateInput name="생일" label="생일" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
