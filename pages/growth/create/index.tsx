import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './create.module.scss';
import PetRadio from '@/components/calendar-monthly/pet-radio';
import { Pet } from '@/api/calendar/request.type';
import { GROWTH_CATEGORY } from '@/utils/constants/growth';
import { AddGrowthData } from '@/types/growth/details';
import classNames from 'classnames';

export default function CreateGrowth() {
  const [pets, setPets] = useState<Pet[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddGrowthData>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<AddGrowthData> = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.petSelector}>
          반려동물 선택
          <div className={styles.petLabelContainer}>
            {!!pets.length &&
              pets.map((pet, i) => <PetRadio key={i} register={register} petName={pet.name} petImage={pet.imageUrl} />)}
          </div>
          {errors.petName && <p className={styles.error}>{errors.petName.message}</p>}
        </div>
        <div className={styles.division}></div>
        <textarea
          {...register('content.memo', { required: '*내용을 입력해주세요.' })}
          className={styles.memo}
          id="content.memo"
          placeholder={`메모\n어떤 일정인지 자세하게 기록하실 수 있어요!`}
        />
        {errors.content?.memo && <p className={styles.error}>{errors.content.memo.message}</p>}

        <div className={styles.categorySelectorOuter}>
          <div className={styles.categorySelectorInner}>
            {GROWTH_CATEGORY.map((category) => (
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
        <button
          className={classNames(styles.submit, {
            [styles.disabled]: !isValid,
          })}
        >
          등록하기
        </button>
      </form>
    </div>
  );
}
