import { Member } from '@/api/search/index.type';
import CalendarTodoProfile from '../calendar-monthly/calendar-todo-profile';
import styles from './search-member-filter.module.scss';

interface SearchMemberFilterProps {
  member: Member;
}

export default function SearchMemberFilter({ member }: SearchMemberFilterProps) {
  return (
    <label className={styles.member}>
      <input type="checkbox" name="member" value={member.name} className={styles.checkbox} />
      <CalendarTodoProfile name={member.name} src={member.profileImageUrl} />
    </label>
  );
}
