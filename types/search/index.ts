import { TodoByQueries } from '@/api/calendar/request.type';

export interface Filter {
  imageOn: string;
  imageOff: string;
  name: string;
}

export interface SearchFormProps {
  onSubmit: (newItems: TodoByQueries[]) => void;
  service: 'family' | 'calendar' | 'diary' | 'growth';
}
