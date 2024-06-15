import { LocalDate } from '@/types/date';

export const convertToLocalDate = (values: LocalDate): string => {
  const { year, month, day } = values;
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};
