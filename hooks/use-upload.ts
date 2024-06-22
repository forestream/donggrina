import { imageUpload } from '@/apis/image-api';
import { useRef, useState } from 'react';
import { useUpdateProfile } from './queries/my/user/mutation';

interface UseUpload {
  handleModal?: (isOpen: boolean) => void;
  nickname: string;
}

export default function useUpload({ handleModal, nickname }: UseUpload) {
  const [previewUrl, setPreviewUrl] = useState('');
  const [imageId, setImageId] = useState<number | null>(null);
  const uploadRef = useRef<HTMLInputElement>(null);

  const profileMutation = useUpdateProfile();

  const handlePreview = async () => {
    const file = uploadRef.current && uploadRef.current.files![0];
    const fileReader = new FileReader();

    try {
      const result = (await imageUpload({ files: file! })).data;
      setImageId(result.data[0]);
      profileMutation.mutateAsync({ imageId: result.data[0], nickname });
    } catch (error) {
      throw new Error('이미지 요청하는데 에러가 났어요.');
    }

    fileReader.readAsDataURL(file!);
    fileReader.onloadend = () => {
      setPreviewUrl(fileReader.result as string);
    };

    handleModal && handleModal(false);
  };

  return {
    uploadRef,
    previewUrl,
    handlePreview,
    imageId,
  };
}
