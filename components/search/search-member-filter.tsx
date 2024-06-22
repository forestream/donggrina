import { Member } from '@/api/search/index.type';
import styles from './search-member-filter.module.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import Image from 'next/image';

interface SearchMemberFilterProps {
  member: Member;
  register: UseFormRegister<FieldValues>;
  selected: string[];
}

export default function SearchMemberFilter({ member, register, selected }: SearchMemberFilterProps) {
  const isSelected = selected.includes(member.nickname);

  return (
    <label className={styles.label}>
      <div className={styles.imageContainer}>
        <input
          {...register('members', { validate: (selected: string) => !!selected || '*멤버를 선택해주세요.' })}
          value={member.nickname}
          className={styles.input}
          type="checkbox"
          checked={isSelected}
        />
        <Image src="/images/search/check.svg" alt="체크 표시" width={8} height={6} className={styles.check} />
      </div>
      <p className={styles.name}>{member.nickname}</p>
    </label>
  );
}
