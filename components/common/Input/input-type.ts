import { InputHTMLAttributes } from 'react';

export interface FormInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
}
