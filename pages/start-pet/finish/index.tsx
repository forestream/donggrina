import Title from '@/components/common/title/title';
import styles from './index.module.scss';
import PetsList from '@/components/start-pet/finish/pets-list/pets-list';
import PetsLinkList from '@/components/start-pet/finish/pets-link-list/pets-link-list';

export default function FinishPet() {
  return (
    <section className={styles.section}>
      <div>
        <Title>반려동물 등록 완료</Title>
        <PetsList />
        <p className={styles.petsInfoText}>가족 초대와 관련된 안내 문구</p>
        <ul className={styles.linkList}>
          <PetsLinkList />
        </ul>
      </div>
    </section>
  );
}
