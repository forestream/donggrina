export default abstract class Core {
  protected date: Date;
  public currentYear: number;
  public currentMonth: number;
  public currentDate: number;
  public currentDay: number;
  public startDayOfWeek: number;
  public startDay: number;

  constructor(date: Date) {
    this.date = date;
    this.currentYear = this.date.getFullYear();
    this.currentMonth = this.date.getMonth();
    this.currentDate = this.date.getDate();
    this.currentDay = this.date.getDay();

    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 1);
    this.startDayOfWeek = firstDayOfMonth.getDay();
    this.startDay = firstDayOfMonth.getDate();
  }
}
