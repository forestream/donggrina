import styles from './create.module.scss';
import { useState } from 'react';
import { CalendarProps } from '..';
import useModal from '@/hooks/use-modal';
import CalendarModal from '@/components/calendar-monthly/calendar-modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import PetRadio from '@/components/calendar-monthly/pet-radio';
import { TODO_CATEGORY } from '@/lib/constants/calendar-constants';
import getDateTimeFrontend from '@/utils/get-date-time-frontend';

export interface DateTime extends CalendarProps {
  ampm: string | null;
  hour: number | null;
  minute: number | null;
}

export interface IFormInput extends CalendarProps {
  title: string;
  memo: string;
  pet: string;
  category: string;
  dateTime: string;
}

export default function Create() {
  const [dateTime, setDateTime] = useState<DateTime>({
    year: null,
    month: null,
    date: null,
    ampm: null,
    hour: null,
    minute: null,
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
    formState: { errors, isValid },
  } = useForm<IFormInput>();

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
              <label key={category} className={styles.categoryLabel}>
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
            <input
              {...register('dateTime', { required: true })}
              type="text"
              id="dateTime"
              placeholder="YYYY-MM-DD 오전/오후 00:00"
              value={getDateTimeFrontend(dateTime)}
              className={styles.input}
              disabled
            />
          </div>
        </div>
        <button className={styles.submit} disabled={!isValid}>
          등록하기
        </button>
      </form>
      <Modal>
        <CalendarModal updateDateTime={updateDateTime} onClose={handleModal.bind(null, false)} />
      </Modal>
    </div>
  );
}
