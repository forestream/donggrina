import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/mypage/profile/my-page-profile.module.scss';

export default function MyPageProfile() {
  return (
    <section className={styles.profile}>
      <h3>마이 페이지</h3>
      <div className={styles['profile-layout']}>
        <div className={styles['image-wrapper']}>
          <Image src="" alt="" fill className={styles['profile-image']} />
          <Image
            src="images/start-pet/fileButton.svg"
            alt="프로필 이미지 수정하기"
            className={styles['profile-image-icon']}
            width={34}
            height={34}
          />
        </div>
        <div className={styles['profile-name']}>
          <span>홍길동</span>
          <Link href="">
            <Image src="images/edit-gray-icon.svg" alt="닉네임 변경하기" width={17} height={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
