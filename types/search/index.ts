import { DiaryByQueries, GrowthByQueries, TodoByQueries } from '@/apis/search/index.type';

export interface Filter {
  imageOn: string;
  imageOff: string;
  name: string;
  value: string;
}

export interface SearchFormProps {
  onSubmit:
    | ((newItems: TodoByQueries[]) => void)
    | ((newResults: DiaryByQueries[]) => void)
    | ((newResults: GrowthByQueries[]) => void);
  service: 'calendar' | 'diary' | 'growth';
}
