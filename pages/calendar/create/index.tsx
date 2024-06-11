import styles from './create.module.scss';
import validateDate from '@/utils/validate-date';
import validateMonth from '@/utils/validate-month';
import validateYear from '@/utils/validate-year';
import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { CalendarProps } from '..';
import useModal from '@/hooks/use-modal';
import CalendarModal from '@/components/calendar/calendar-modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import PetRadio from '@/components/calendar/pet-radio';
import { TODO_CATEGORY } from '@/lib/constants/calendar-constants';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let {
    query: { year, month, date },
  } = context;

  if (typeof year === 'object') year = year[0];
  if (typeof month === 'object') month = month[0];
  if (typeof date === 'object') date = date[0];

  const today = new Date();
  const [yearToday, monthToday] = [today.getFullYear(), today.getMonth() + 1];

  if (!validateYear(year)) year = String(yearToday);
  if (!validateMonth(month)) month = String(monthToday);
  if (!validateDate(date)) date = '1';

  return { props: { year: +(year as string), month: +(month as string), date: +(date as string) } };
}

export interface DateTime extends CalendarProps {
  [key: string]: string | number;
  ampm: string;
  hour: number;
  minute: number;
}

export interface IFormInput extends CalendarProps {
  title: string;
  memo: string;
  pet: string;
  category: string;
}

export default function Create({ year, month, date }: CalendarProps) {
  const [dateTime, setDateTime] = useState<DateTime>({
    year,
    month,
    date,
    ampm: '오전',
    hour: 12,
    minute: 0,
  });

  const updateDateTime = (newDateTime: DateTime) => {
    setDateTime((prevDateTime) => ({
      ...prevDateTime,
      ...newDateTime,
    }));
  };

  const [Modal, handleModal] = useModal();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  console.log(errors);

  return (
    <div className={styles.outer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('title', { required: '*제목을 입력해주세요.' })}
          className={styles.title}
          id="title"
          type="text"
          placeholder="제목"
        />
        {errors.title && <p className={styles.error}>{errors.title.message}</p>}

        <textarea
          {...register('memo', { required: '*내용을 입력해주세요.' })}
          className={styles.memo}
          id="memo"
          placeholder={`메모\n어떤 일정인지 자세하게 기록하실 수 있어요!`}
        />
        {errors.memo && <p className={styles.error}>{errors.memo.message}</p>}

        <div className={styles.division}></div>
        <div className={styles.petSelector}>
          반려동물 선택
          <div className={styles.petLabelContainer}>
            <PetRadio register={register} petName="dog" />
            <PetRadio register={register} petName="cat" />
          </div>
          {errors.pet && <p className={styles.error}>{errors.pet.message}</p>}
        </div>

        <div className={styles.categorySelectorOuter}>
          <div className={styles.categorySelectorInner}>
            {TODO_CATEGORY.map((category) => (
              <label className={styles.categoryLabel}>
                <input
                  {...register('category', { validate: (selected) => !!selected || '*카테고리를 선택해주세요.' })}
                  value={category}
                  className={styles.categoryInput}
                  type="radio"
                />
                <div className={styles.categoryIcon}></div>
                <p>{category}</p>
              </label>
            ))}
          </div>
          {errors.category && <p className={styles.error}>{errors.category.message}</p>}
        </div>

        <div className={styles.todoDate}>
          <button type="button" onClick={handleModal.bind(null, true)} className={styles.todoDateText}>
            날짜 / 시간
          </button>
          <div className={styles.todoDateSelector}>
            {Object.keys(dateTime).map((key) => (
              <div key={key} className={`${styles.input} ${styles[key]}`}>
                {dateTime[key].toString().padStart(2, '0')}
                <input
                  {...register(key as keyof IFormInput, { required: true })}
                  type="hidden"
                  id={key}
                  value={dateTime[key].toString().padStart(2, '0')}
                />
              </div>
            ))}
          </div>
        </div>
        <button className={styles.submit}>등록하기</button>
      </form>
      <Modal>
        <CalendarModal updateDateTime={updateDateTime} dateTime={dateTime} onClose={handleModal.bind(null, false)} />
      </Modal>
    </div>
  );
}
