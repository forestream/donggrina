import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styles from './index.module.scss';
import Form from '@/components/common/Form';
import FileInput from '@/components/start-pet/file-input/file-input';
import FileImage from '@/components/start-pet/file-image/file-image';
import Radio from '@/components/common/radio/radio';
import Button from '@/components/common/button/button';
import { KIND_OPTION } from '@/utils/constants/kind-data';
import { GENDER_OPTION } from '@/utils/constants/gender-data';
import { NEUTERED_OPTION } from '@/utils/constants/neutered-data';
import { CAT_BREED_OPTION, DOG_BREED_OPTION } from '@/utils/constants/breed-data';
import { useEffect, useState } from 'react';

export interface PetEntryInfoType {
  files: string;
  name: string;
}

export default function StartPet() {
  const [breedOPtion, setBreedOption] = useState<string[]>();
  const [selectDisabled, setSelectDisabled] = useState<boolean>();
  const methods = useForm<FieldValues>({
    defaultValues: {
      sex: 'female',
      isNeutered: 'true',
    },
  });
  const { control, handleSubmit, watch } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.files[0]) {
      const submitData = {
        files: data.files[0].name,
      };
    }
    console.log(data);
  };
  useEffect(() => {
    if (watch('kind') === '강아지') setBreedOption(DOG_BREED_OPTION);
    if (watch('kind') === '고양이') setBreedOption(CAT_BREED_OPTION);
    if (watch('kind') === undefined) {
      setSelectDisabled(true);
      setBreedOption(DOG_BREED_OPTION);
    } else {
      setSelectDisabled(false);
    }
  }, [watch('kind')]);

  return (
    <section className={styles.section}>
      <div className={styles.fileBox}>
        <FileImage imageValue={watch('files')} />
        <FileInput name="files" id="file" control={control} />
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} methods={methods}>
        <ul>
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
            <Form.Label htmlFor="kind">종류</Form.Label>
            <Form.SelectInput name="kind" options={KIND_OPTION} control={control} placeholder="종류를 선택해주세요" />
          </li>
          <li className={styles.breedInputBox}>
            <Form.Label htmlFor="breed">품종</Form.Label>
            <Form.SelectInput
              name="breed"
              options={breedOPtion!}
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
