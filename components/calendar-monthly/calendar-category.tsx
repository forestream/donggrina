import classNames from 'classnames';
import styles from './calendar-category.module.scss';
import { CALENDAR_CATEGORIES, TODO_CATEGORY } from '@/utils/constants/calendar-constants';
import Image from 'next/image';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IFormInput } from '@/types/calendar';

interface CalendarCategoryProps {
  register: UseFormRegister<FieldValues & IFormInput>;
  initCategory?: string;
}

export default function CalendarCategory({ register, initCategory = '' }: CalendarCategoryProps) {
  return (
    <>
      {TODO_CATEGORY.map((category) => (
        <label key={category} className={styles.categoryLabel}>
          <input
            {...register('category', { validate: (selected) => !!selected || '*카테고리를 선택해주세요.' })}
            value={category}
            className={styles.categoryInput}
            type="radio"
            defaultChecked={category === initCategory}
          />
          <div className={classNames(styles.categoryIcon, styles[CALENDAR_CATEGORIES[category].value])}>
            <Image src={CALENDAR_CATEGORIES[category].image} alt={category} fill />
          </div>
          <p>{category}</p>
        </label>
      ))}
    </>
  );
}
