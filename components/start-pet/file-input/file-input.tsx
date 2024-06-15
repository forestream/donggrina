import { PetEntryInfoType } from '@/pages/start-pet';
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form';
import FileButtonSVG from '@/public/images/start-pet/fileButton.svg';
import styles from './file-input.module.scss';
import { useRef } from 'react';

interface FileInputType {
  id: string;
  name: keyof PetEntryInfoType;
  control: UseFormReturn<FieldValues>['control'];
}

export default function FileInput({ id, name, control }: FileInputType) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <button className={styles.fileButton} type="button" onClick={handleButtonClick} title="프로필 이미지 변경">
          <input
            className={styles.fileInput}
            type="file"
            accept="image/*"
            id={id}
            onChange={(e) => field.onChange(e.target.files)}
            ref={(e) => {
              field.ref(e);
              fileInputRef.current = e;
            }}
          />
          <FileButtonSVG />
        </button>
      )}
    />
  );
}
