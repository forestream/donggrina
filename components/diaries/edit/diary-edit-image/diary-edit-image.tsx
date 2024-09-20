import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './diary-edit-image.module.scss';
import { useRef, useState } from 'react';
import { diaryImageUpload } from '@/apis/image-api';
import { useFormContext } from 'react-hook-form';

interface DiaryEditImageProps {
  images: string[];
}

export default function DiaryEditImage(props: DiaryEditImageProps) {
  const IMAGES_COUNT = 5;
  const existingImageCount = IMAGES_COUNT - props.images.length;

  return (
    <Swiper spaceBetween={10} slidesPerView="auto" tag="div" wrapperTag="ul" className={styles['image-area']}>
      {props.images.map((image, index) => (
        <SwiperSlide tag="li" className={styles['image-item']} key={image}>
          <DiaryEditImageItem index={index} image={image} />
        </SwiperSlide>
      ))}

      {Array(existingImageCount)
        .fill(0)
        .map((_, index) => (
          <SwiperSlide tag="li" className={styles['image-item']} key={index}>
            <DiaryEditImageItem index={index} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export function DiaryEditImageItem({ index, image }: { index: number; image?: string }) {
  const [previewUrl, setPreviewUrl] = useState('');
  const uploadRef = useRef<HTMLInputElement>(null);
  const { setValue, getValues } = useFormContext();

  const handlePreview = async () => {
    const file = uploadRef.current && uploadRef.current.files![0];
    const fileReader = new FileReader();

    try {
      const result = (await diaryImageUpload({ images: file! })).data;
      const values = getValues('images');
      values ? setValue('images', [...values, result.data[0]]) : setValue('images', [result.data[0]]);
      // setImageId(result.data[0]);
      // profileMutation.mutateAsync({ imageId: result.data[0], nickname });
    } catch (error) {
      throw new Error('이미지 요청하는데 에러가 났어요.');
    }

    fileReader.readAsDataURL(file!);
    fileReader.onloadend = () => {
      setPreviewUrl(fileReader.result as string);
    };
  };
  return image ? (
    <Image src={image} alt="" fill objectFit="cover" objectPosition="center" />
  ) : (
    <>
      <label htmlFor={`image-${index}`}></label>
      <input type="file" id={`image-${index}`} onChange={handlePreview} ref={uploadRef} />
      <Image
        src={previewUrl || `/images/diaries/imageupload-default.svg`}
        alt=""
        fill
        objectFit="cover"
        objectPosition="center"
      />
    </>
  );
}
