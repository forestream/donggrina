import React, { InputHTMLAttributes } from 'react';

interface FormLabel extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
}

const FormLabel = ({ htmlFor, children }: FormLabel) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default FormLabel;
