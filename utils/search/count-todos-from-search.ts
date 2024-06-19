type Data = {
  id: number;
  title: string;
  category: string;
  dateTime: string;
  memberProfileImageUrl: string;
  nickname: string;
  petProfileImageUrl: string;
  petName: string;
  isFinished: boolean;
  isMine: boolean;
};

export default function countTodosFromSearch(data: Data[]): { date: string; count: number }[] {
  const dateTimes = data.map((datum) => datum.dateTime.split('T')[0]);

  const mergedDateTimes = [...new Set(dateTimes)];

  const monthlyTodos = mergedDateTimes.map((mergedDateTime) => ({ date: mergedDateTime, count: 0 }));

  dateTimes.forEach((dateTime) => (monthlyTodos[mergedDateTimes.indexOf(dateTime)].count += 1));

  return monthlyTodos;
}
