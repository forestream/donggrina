import React, { InputHTMLAttributes, PropsWithChildren } from 'react';

interface RadioType extends PropsWithChildren {
  text: string;
  id: string;
  value: string;
  name: string;
}

export default function index() {
  return <div></div>;
}

function Radio(props: PropsWithChildren & InputHTMLAttributes<HTMLInputElement>) {
  <input type="radio" id={props.id} value={props.value} name={props.name} />;
}
