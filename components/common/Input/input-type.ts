import { InputHTMLAttributes } from 'react';

export interface FormInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  placeholder?: string;
}
