export default abstract class Core {
  protected date: Date;
  public currentYear: number;
  public currentMonth: number;
  public currentDate: number;
  public currentDay: number;
  public firstDayOfMonth: Date;
  public startDayOfWeek: number;
  public startDay: number;

  constructor(date: Date) {
    this.date = date;
    this.currentYear = this.date.getFullYear();
    this.currentMonth = this.date.getMonth();
    this.currentDate = this.date.getDate();
    this.currentDay = this.date.getDay();

    this.firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    this.startDayOfWeek = this.firstDayOfMonth.getDay();
    this.startDay = this.firstDayOfMonth.getDate();
  }
}
