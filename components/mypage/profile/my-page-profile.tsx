import Image from 'next/image';
import Link from 'next/link';
import { useFetchProfile } from '@/hooks/queries/my/user';
import useUpload from '@/hooks/use-upload';
import styles from '@/components/mypage/profile/my-page-profile.module.scss';

export default function MyPageProfile() {
  const profileQuery = useFetchProfile();

  const { uploadRef, previewUrl, handlePreview } = useUpload();

  if (profileQuery.isLoading) return <p>Loading...</p>;

  return (
    <section className={styles.profile}>
      <h3>마이 페이지</h3>
      <div className={styles['profile-layout']}>
        <div className={styles['image-wrapper']}>
          <label htmlFor="profile" className={styles['profile-label']}>
            <Image
              src={previewUrl || profileQuery.data!.profileImageUrl}
              objectFit="cover"
              objectPosition="center"
              alt=""
              fill
              className={styles['profile-image']}
            />
            <Image
              src="images/start-pet/fileButton.svg"
              alt="프로필 이미지 수정하기"
              className={styles['profile-image-icon']}
              width={34}
              height={34}
            />
          </label>
          <input
            type="file"
            id="profile"
            className={styles['profile-input']}
            ref={uploadRef}
            onChange={handlePreview}
          />
        </div>
        <div className={styles['profile-name']}>
          <span>{profileQuery.data!.nickname}</span>
          <Link href="">
            <Image src="images/edit-gray-icon.svg" alt="닉네임 변경하기" width={17} height={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
