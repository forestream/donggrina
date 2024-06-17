import { useRef, useState } from 'react';

export default function useUpload() {
  const [previewUrl, setPreviewUrl] = useState('');
  const uploadRef = useRef<HTMLInputElement>(null);

  const handlePreview = () => {
    const file = uploadRef.current && uploadRef.current.files![0];
    const fileReader = new FileReader();

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
