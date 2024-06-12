import { useCalendarContext } from '../calendar-compound/calendar';
import AddButton from '../common/add-button/add-button';

export default function CreateTodoButton() {
  const calendarContext = useCalendarContext();
  const year = calendarContext.year;
  const month = calendarContext.month + 1;
  const date = calendarContext.date;

  return <AddButton href={`/calendar/create?year=${year}&month=${month}&date=${date}`} />;
}
