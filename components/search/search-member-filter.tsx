import { Member } from '@/api/search/index.type';
import CalendarTodoProfile from '../calendar-monthly/calendar-todo-profile';
import styles from './search-member-filter.module.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface SearchMemberFilterProps {
  member: Member;
  register: UseFormRegister<FieldValues>;
}

export default function SearchMemberFilter({ member, register }: SearchMemberFilterProps) {
  return (
    <label className={styles.member}>
      <input type="checkbox" value={member.name} className={styles.checkbox} {...register('member')} />
      <CalendarTodoProfile name={member.name} src={member.profileImageUrl} />
    </label>
  );
}
