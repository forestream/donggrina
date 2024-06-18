import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';
import { useGetGrowthDetailQuery } from '@/hooks/queries/growth/use-get-growth-queries';
import { useModifyGrowthMutation } from '@/hooks/queries/growth/use-post-growth-query';
import useModal from '@/hooks/use-modal';
import useCalenderDateStore from '@/store/calendar.store';
import { AddGrowthData } from '@/types/growth/details';
import { GROWTH_CATEGORY } from '@/utils/constants/growth';
import { convertToLocalDate } from '@/utils/convert-local-date';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../create/create.module.scss';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    params: { growthId },
  } = context as Params;

  return { props: { growthId } };
}

export default function GrowthModify({ growthId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { data: growthList } = useGetGrowthDetailQuery(growthId);
  const { data: pets } = usePetsQuery();
  const [Modal, handleModal] = useModal();
  const modifyMutation = useModifyGrowthMutation(growthId);
  const year = useCalenderDateStore.use.year().toString();
  const month = (useCalenderDateStore.use.month() + 1).toString();
  const date = useCalenderDateStore.use.date().toString();
  const localDate = convertToLocalDate({ year, month, day: date });

  const [selectedCategory, setSelectedCategory] = useState(GROWTH_CATEGORY[0]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddGrowthData>({
    mode: 'onBlur',
    defaultValues: {
      date: localDate,
      category: GROWTH_CATEGORY[0],
    },
  });
  const openModal = () => {
    handleModal(true);
  };
  const closeModal = () => {
    handleModal(false);
    router.push('/growth');
  };
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  const onSubmit: SubmitHandler<AddGrowthData> = (data) => {
    modifyMutation.mutate(data, {
      onSuccess: (response) => {
        console.log('Success:', response);
        openModal();
      },
      onError: (error) => {
        console.error('Error:', error);
      },
    });
  };
  console.log(growthList?.data);
  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.petSelector}>
            반려동물 선택
            <div className={styles.petLabelContainer}>
              {!!pets.length &&
                pets.map((pet, i) => (
                  <PetRadio key={i} register={register} petName={pet.name} petImage={pet.imageUrl} />
                ))}
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
          <CategoryInputs errors={errors} selectedCategory={selectedCategory} register={register} />
          <button
            className={classNames(styles.submit, {
              [styles.disabled]: !isValid,
            })}
          >
            등록하기
          </button>
        </form>
      </div>
      <Modal>
        <CompleteModal closeModal={closeModal} text="성장 기록이 등록되었습니다." />
      </Modal>
    </>
  );
}
