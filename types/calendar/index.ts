export type CalendarProps = {
  year: number | null;
  month: number | null;
  date: number | null;
};

export interface DateTime extends CalendarProps {
  ampm: string | null;
  hour: number | null;
  minute: number | null;
}

export interface IFormInput extends CalendarProps {
  title: string;
  memo: string;
  petName: string;
  category: string;
  dateTime: string;
}
