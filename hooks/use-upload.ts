import { imageUpload } from '@/api/image-api';
import { useRef, useState } from 'react';

export default function useUpload() {
  const [previewUrl, setPreviewUrl] = useState('');
  const uploadRef = useRef<HTMLInputElement>(null);

  const handlePreview = async () => {
    const file = uploadRef.current && uploadRef.current.files![0];
    const fileReader = new FileReader();

    try {
      await imageUpload({ files: file! });
    } catch (error) {
      throw new Error('이미지 요청하는데 에러가 났어요.');
    }

    fileReader.readAsDataURL(file!);
    fileReader.onloadend = () => {
      setPreviewUrl(fileReader.result as string);
    };
  };

  return {
    uploadRef,
    previewUrl,
    handlePreview,
  };
}
