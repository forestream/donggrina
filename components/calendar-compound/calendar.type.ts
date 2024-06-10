export interface InitialState {
  years: number[];
  month: number;
  date: number;
  onSelectedMonth: (month: number) => void;
  onSelectedDate: (date: number) => void;
}
