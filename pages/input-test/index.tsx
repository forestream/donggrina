import React from 'react';
import Form from '@/components/common/Form';

export default function InputTest() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div style={{ paddingTop: '54px' }}>
      <Form onSubmit={onSubmit}>
        <Form.Input name="이름" label="이름" />
        <Form.Input name="생일" label="생일" />
        <Form.Input name="입양일" label="입양일" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
