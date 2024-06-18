import { Member } from '@/api/search/index.type';
import CalendarTodoProfile from '../calendar-monthly/calendar-todo-profile';
import styles from './search-member-filter.module.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

interface SearchMemberFilterProps {
  member: Member;
  register: UseFormRegister<FieldValues>;
  selected: string[];
}

export default function SearchMemberFilter({ member, register, selected }: SearchMemberFilterProps) {
  const isSelected = selected.includes(member.nickname);

  return (
    <label
      className={classNames(styles.member, {
        [styles.selected]: isSelected,
      })}
    >
      <input type="checkbox" value={member.nickname} className={styles.checkbox} {...register('members')} />
      <CalendarTodoProfile name={member.nickname} src={member.profileImageUrl} />
    </label>
  );
}
