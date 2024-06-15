import styles from './create.module.scss';
import { useEffect, useState } from 'react';
import useModal from '@/hooks/use-modal';
import CalendarModal from '@/components/calendar-monthly/calendar-modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import PetRadio from '@/components/calendar-monthly/pet-radio';
import { TODO_CATEGORY } from '@/utils/constants/calendar-constants';
import getDateTimeFrontend from '@/utils/get-date-time-frontend';
import classNames from 'classnames';
import { fetchPets, postTodo } from '@/api/calendar/request';
import { Pet } from '@/api/calendar/request.type';
import { DateTime, IFormInput } from '@/types/calendar';

export default function Create() {
  const handleLoad = async () => {
    const data = await fetchPets();
    setPets(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const {
    setValue,
    trigger,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>();

  const [dateTime, setDateTime] = useState<DateTime>({
    year: null,
    month: null,
    date: null,
    ampm: null,
    hour: null,
    minute: null,
  });
  const [pets, setPets] = useState<Pet[]>([]);

  const [Modal, handleModal] = useModal();

  const updateDateTime = (newDateTime: DateTime) => {
    setDateTime((prevDateTime) => ({
      ...prevDateTime,
      ...newDateTime,
    }));
  };

  useEffect(() => {
    setValue('dateTime', getDateTimeFrontend(dateTime));
    if (errors.dateTime) trigger('dateTime');
  }, [dateTime]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const [date, ampm, time] = data.dateTime.split(' ');
    const dateTimeBackend = new Date([date, time, ampm === '오전' ? 'am' : 'pm', 'UTC+0'].join(' '))
      .toISOString()
      .slice(0, -8);
    postTodo({ ...data, dateTime: dateTimeBackend });
  };

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
            {!!pets.length &&
              pets.map((pet, i) => <PetRadio key={i} register={register} petName={pet.name} petImage={pet.imageUrl} />)}
          </div>
          {errors.petName && <p className={styles.error}>{errors.petName.message}</p>}
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
              {...register('dateTime', {
                validate: (value) => !!value || '*날짜를 선택해주세요.',
              })}
              type="text"
              id="dateTime"
              placeholder="YYYY-MM-DD 오전/오후 00:00"
              className={styles.input}
              readOnly
            />
          </div>
        </div>
        {errors.dateTime && <p className={styles.error}>{errors.dateTime.message}</p>}

        <button
          className={classNames(styles.submit, {
            [styles.disabled]: !isValid,
          })}
        >
          등록하기
        </button>
      </form>
      <Modal>
        <CalendarModal updateDateTime={updateDateTime} onClose={handleModal.bind(null, false)} />
      </Modal>
    </div>
  );
}
