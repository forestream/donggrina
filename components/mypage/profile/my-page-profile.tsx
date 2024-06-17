import { useFetchProfile } from '@/hooks/queries/my/user';
import Upload from '@/components/mypage/profile/upload/upload';
import ProfileInput from '@/components/mypage/profile/input/profile-input';
import styles from '@/components/mypage/profile/my-page-profile.module.scss';

export default function MyPageProfile() {
  const profileQuery = useFetchProfile();

  if (profileQuery.isLoading) return <p>Loading...</p>;

  return (
    <section className={styles.profile}>
      <h3>마이 페이지</h3>
      <div className={styles['profile-layout']}>
        <Upload image={profileQuery.data!.profileImageUrl} />
        <ProfileInput nickname={profileQuery.data!.nickname} />
      </div>
    </section>
  );
}
