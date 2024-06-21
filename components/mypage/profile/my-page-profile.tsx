import { useFetchProfile } from '@/hooks/queries/my/user/query';
import ImageUpload from '@/components/mypage/profile/upload/image-upload';
import ProfileInput from '@/components/mypage/profile/input/profile-input';
import styles from '@/components/mypage/profile/my-page-profile.module.scss';
import ProfileSkeleton from '@/components/skeleton/mypage/profile-skeleton';

export default function MyPageProfile() {
  const profileQuery = useFetchProfile();

  if (profileQuery.isLoading) return <ProfileSkeleton />;

  return (
    <section className={styles.profile}>
      <h3>마이 페이지</h3>
      <div className={styles['profile-layout']}>
        <ImageUpload image={profileQuery.data!.profileImageUrl} nickname={profileQuery.data!.nickname} />
        <ProfileInput nickname={profileQuery.data!.nickname} imageId={profileQuery.data!.imageId} />
      </div>
    </section>
  );
}
