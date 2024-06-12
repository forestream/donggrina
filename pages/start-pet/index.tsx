import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styles from './index.module.scss';
import Form from '@/components/common/Form';
import FileInput from '@/components/start-pet/file-input/file-input';
import FileImage from '@/components/start-pet/file-image/file-image';
import Radio from '@/components/common/radio/radio';
import Button from '@/components/common/button/button';

export interface PetEntryInfoType {
  files: string;
  name: string;
}

export default function StartPet() {
  const methods = useForm<FieldValues>({
    defaultValues: {
      sex: 'female',
      isNeutered: 'true',
    },
  });
  const { control, handleSubmit, watch } = methods;
  const imageValue = watch('files');
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data.files[0]) {
      const submitData = {
        files: data.files[0].name,
      };
    }
    console.log(data);
  };
  const options = [
    {
      value: 'female',
      text: '암컷',
      id: 'female',
    },
    {
      value: 'male',
      text: '수컷',
      id: 'male',
    },
  ];
  const NeuteredOptions = [
    {
      value: 'true',
      text: '완료',
      id: 'true',
    },
    {
      value: 'false',
      text: '미완료',
      id: 'false',
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.fileBox}>
        <FileImage imageValue={imageValue} />
        <FileInput name="files" id="file" control={control} />
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} methods={methods}>
        <ul>
          <li>
            <Form.Label htmlFor="name">이름</Form.Label>
            <Form.MainInput name="name" />
          </li>
          <li>
            <Form.Label htmlFor="sex">성별</Form.Label>
            <Radio options={options} control={control} name="sex" />
          </li>
          <li>
            <Form.Label htmlFor="birthDate">생일</Form.Label>
            <Form.DateInput />
          </li>
          <li>
            <Form.Label htmlFor="adoptionDate">입양일</Form.Label>
            <Form.DateInput />
          </li>
          <li>
            <Form.Label htmlFor="kind">종류</Form.Label>
            <Form.SelectInput name="kind" options={options} control={control} placeholder="품종을 선택해주세요" />
          </li>
          <li>
            <Form.Label htmlFor="kind">종류</Form.Label>
            <Form.SelectInput name="kind" options={options} control={control} placeholder="품종을 선택해주세요" />
          </li>
          <li>
            <Form.Label htmlFor="무게">무게</Form.Label>
            <Form.WeightInput name="weight" />
          </li>
          <li>
            <Form.Label htmlFor="isNeutered">중성화</Form.Label>
            <Radio options={NeuteredOptions} control={control} name="isNeutered" />
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
