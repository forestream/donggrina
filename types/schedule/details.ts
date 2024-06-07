export default interface ScheduleDetails {
  id: number;
  title: string;
  memo: string;
  category: string;
  dateTime: Date;
  writerProfileImageUrl: string;
  writerName: string;
  isFinished: boolean;
}
