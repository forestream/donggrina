import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './create.module.scss';
// import PetRadio from '@/components/calendar-monthly/pet-radio';
// import { Pet } from '@/api/calendar/request.type';
import { GROWTH_CATEGORY } from '@/utils/constants/growth';
import { AddGrowthData } from '@/types/growth/details';
import classNames from 'classnames';
import CategoryInputs from './category-inputs';

export default function CreateGrowth() {
  // const [pets, setPets] = useState<Pet[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(GROWTH_CATEGORY[0]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddGrowthData>({
    mode: 'onBlur',
    defaultValues: {
      category: GROWTH_CATEGORY[0],
    },
  });

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  const onSubmit: SubmitHandler<AddGrowthData> = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.petSelector}>
          반려동물 선택
          {/* <div className={styles.petLabelContainer}>
            {!!pets.length &&
              pets.map((pet, i) => <PetRadio key={i} register={register} petName={pet.name} petImage={pet.imageUrl} />)}
          </div> */}
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
                  {...register('category')}
                  value={category}
                  className={styles.categoryInput}
                  type="radio"
                  checked={selectedCategory === category}
                  onChange={handleCategoryChange}
                />
                <div className={styles.categoryIcon}></div>
                <p className={styles.categoryName}>{category}</p>
              </label>
            ))}
          </div>
        </div>
        <CategoryInputs selectedCategory={selectedCategory} register={register} />
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
