import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styles from './index.module.scss';
import Form from '@/components/common/Form';
import FileInput from '@/components/start-pet/file-input/file-input';
import FileImage from '@/components/start-pet/file-image/file-image';
import Radio from '@/components/common/radio/radio';
import Button from '@/components/common/button/button';
import { useEffect, useState } from 'react';
import Title from '@/components/common/title/title';
import { imageUplolad } from '@/api/image-api';
import {
  CAT_BREED_OPTION,
  DOG_BREED_OPTION,
  GENDER_OPTION,
  KIND_OPTION,
  NEUTERED_OPTION,
} from '@/utils/constants/entry-data';

export default function StartPet() {
  const [speciesOPtion, setSpeciesOption] = useState<string[]>();
  const [selectDisabled, setSelectDisabled] = useState<boolean>();
  const methods = useForm<FieldValues>({
    defaultValues: {
      files: null,
      sex: 'female',
      isNeutered: 'true',
    },
  });
  const { control, handleSubmit, watch, setValue } = methods;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // if (data.files[0]) {
    //   const submitData = {
    //     files: data.files[0],
    //   };
    //   try {
    //     const response = await imageUplolad(submitData);
    //     console.log(...response.data.data);
    //   } catch {
    //     console.log('에러');
    //   }
    // }
    const newData = {
      imageId: data.files,
      name: data.name,
      sex: data.sex,
      birthDate: data.birthDate,
      adoptionDate: data.adoptionDate,
      type: data.type,
      species: data.species,
      weight: Number(data.weight),
      isNeutered: Boolean(data.isNeutered),
    };
    console.log(newData);
  };

  useEffect(() => {
    if (watch('type') === '강아지') setSpeciesOption(DOG_BREED_OPTION);
    if (watch('type') === '고양이') setSpeciesOption(CAT_BREED_OPTION);
    if (watch('type') === undefined) {
      setSelectDisabled(true);
      setSpeciesOption(DOG_BREED_OPTION);
    } else {
      setSelectDisabled(false);
    }
    setValue('breed', '');
  }, [watch('type')]);

  return (
    <section className={styles.section}>
      <Title>반려동물 추가</Title>
      <Form onSubmit={handleSubmit(onSubmit)} methods={methods}>
        <div className={styles.fileBox}>
          <FileImage imageValue={watch('files')} />
          <FileInput name="files" id="file" control={control} />
        </div>
        <ul className={styles.listContainer}>
          <li className={styles.nameInputBox}>
            <Form.Label htmlFor="name">이름</Form.Label>
            <Form.MainInput name="name" />
          </li>
          <li className={styles.sexInputBox}>
            <Form.Label htmlFor="sex">성별</Form.Label>
            <Radio options={GENDER_OPTION} control={control} name="sex" />
          </li>
          <li className={styles.birthInputBox}>
            <Form.Label htmlFor="birthDate">생일</Form.Label>
            <Form.DateInput />
          </li>
          <li className={styles.adoptionInputBox}>
            <Form.Label htmlFor="adoptionDate">입양일</Form.Label>
            <Form.DateInput />
          </li>
          <li className={styles.kindInputBox}>
            <Form.Label htmlFor="type">종류</Form.Label>
            <Form.SelectInput name="type" options={KIND_OPTION} control={control} placeholder="종류를 선택해주세요" />
          </li>
          <li className={styles.breedInputBox}>
            <Form.Label htmlFor="species">품종</Form.Label>
            <Form.SelectInput
              name="species"
              options={speciesOPtion!}
              control={control}
              placeholder="품종을 선택해주세요"
              disabled={selectDisabled}
            />
          </li>
          <li className={styles.weightInputBox}>
            <Form.Label htmlFor="무게">무게</Form.Label>
            <Form.WeightInput name="weight" />
          </li>
          <li className={styles.isNeuteredInputBox}>
            <Form.Label htmlFor="isNeutered">중성화</Form.Label>
            <Radio options={NEUTERED_OPTION} control={control} name="isNeutered" />
          </li>
        </ul>
        <div className={styles.buttonBox}>
          <Button type="submit" className="primary" round>
            가족 등록하기
          </Button>
        </div>
      </Form>
    </section>
  );
}
