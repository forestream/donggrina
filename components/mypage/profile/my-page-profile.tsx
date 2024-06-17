import { useFetchProfile } from '@/hooks/queries/my/user';
import useModal from '@/hooks/use-modal';
import Button from '@/components/common/button/button';
import Upload from '@/components/mypage/profile/upload/upload';
import ProfileInput from '@/components/mypage/profile/input/profile-input';
import styles from '@/components/mypage/profile/my-page-profile.module.scss';

export default function MyPageProfile() {
  const profileQuery = useFetchProfile();

  const [Modal, handleModal] = useModal();

  if (profileQuery.isLoading) return <p>Loading...</p>;

  return (
    <section className={styles.profile}>
      <h3>마이 페이지</h3>
      <div className={styles['profile-layout']}>
        <Upload onOpenModal={handleModal} image={profileQuery.data!.profileImageUrl} />
        <ProfileInput onOpenModal={handleModal} nickname={profileQuery.data!.nickname} />

        <Modal>
          <p className={styles['modal-text']}>프로필 사진을 변경하시겠습니까?</p>
          <div className={styles['modal-button-layout']}>
            <Button className="default">이미지 초기화 하기</Button>
            <Button className="primary">이미지 변경하기</Button>
          </div>
        </Modal>
      </div>
    </section>
  );
}

{
  /* <label htmlFor="profile" className={styles['profile-label']}>
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
  accept="image/*"
  className={styles['profile-input']}
  ref={uploadRef}
  onChange={handlePreview}
/> */
}
