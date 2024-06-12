export interface InitialState {
  year: number;
  month: number;
  date: number;
  onSelectedMonth: (month: number) => void;
  onSelectedDate: (date: number) => void;
  onSelectedYear: (year: number) => void;
  onResetToday: () => void;
}
