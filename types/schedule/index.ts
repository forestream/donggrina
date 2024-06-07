export interface Schedule {
  data: ScheduleData[];
}

export interface ScheduleData {
  id: number;
  title: string;
  category: string;
  dateTime: Date;
  writerProfileImageUrl: string;
  writerName: string;
}
