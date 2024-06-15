export interface LocalDate {
  year: string;
  month: string;
  day: string;
}
export interface LocalDateTime extends LocalDate {
  hour: string;
  minute: string;
  second: string;
}
