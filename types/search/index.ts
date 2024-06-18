export interface Filter {
  imageOn: string;
  imageOff: string;
  name: string;
}

export interface SearchFormProps {
  service: 'family' | 'calendar' | 'diary' | 'growth';
}
