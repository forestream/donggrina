import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';
import { useGetGrowthDetailQuery } from '@/hooks/queries/growth/use-get-growth-queries';
import { useModifyGrowthMutation } from '@/hooks/queries/growth/use-post-growth-query';
import useModal from '@/hooks/use-modal';
import { GrowthDetailsContent, GrowthDetailsData } from '@/types/growth/details';
import { GROWTH_CATEGORY } from '@/utils/constants/growth';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../create/create.module.scss';
import CategoryInputs from '../../create/category-inputs';
import classNames from 'classnames';
import CompleteModal from '../../create/complete-modal';
import PetRadio from '@/components/calendar-monthly/pet-radio';
import useCalenderDateStore from '@/store/calendar.store';
import { convertToLocalDate } from '@/utils/convert-local-date';

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

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [memo, setMemo] = useState<string>('');
  const [content, setContent] = useState({});
  const [initPetName, setInitPetName] = useState('');
  const year = useCalenderDateStore.use.year().toString();
  const month = (useCalenderDateStore.use.month() + 1).toString();
  const date = useCalenderDateStore.use.date().toString();
  const localDate = convertToLocalDate({ year, month, day: date });

  useEffect(() => {
    if (growthList?.data) {
      setMemo(growthList.data.content.memo);
      setSelectedCategory(growthList.data.category);
      setContent(growthList.data.content);
      setInitPetName(growthList.data.petName);
    }
  }, [growthList]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<GrowthDetailsData>({
    mode: 'onBlur',
    defaultValues: {
      date: localDate,
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

  const onSubmit: SubmitHandler<GrowthDetailsData> = (data) => {
    console.log(data);
    modifyMutation.mutate(data, {
      onSuccess: () => {
        openModal();
      },
      onError: (error) => {
        console.error('Error:', error);
      },
    });
  };
  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.petSelector}>
            반려동물 선택
            <div className={styles.petLabelContainer}>
              {!!pets.length &&
                initPetName !== '' &&
                pets.map((pet, i) => (
                  <PetRadio
                    key={i}
                    defaultPet={initPetName}
                    register={register}
                    petName={pet.name}
                    petImage={pet.imageUrl}
                  />
                ))}
            </div>
            {errors.petName && <p className={styles.error}>{errors.petName.message}</p>}
          </div>
          <div className={styles.division}></div>
          <textarea
            {...register('content.memo')}
            className={styles.memo}
            id="content.memo"
            placeholder={`메모\n어떤 일정인지 자세하게 기록하실 수 있어요!`}
            defaultValue={memo}
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
                    defaultValue={category}
                  />
                  <div className={styles.categoryIcon}></div>
                  <p className={styles.categoryName}>{category}</p>
                </label>
              ))}
            </div>
          </div>
          <CategoryInputs
            defaultValue={content as GrowthDetailsContent}
            errors={errors}
            selectedCategory={selectedCategory}
            register={register}
          />
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
