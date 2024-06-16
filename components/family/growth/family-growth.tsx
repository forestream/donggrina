import styles from './family-growth.module.scss';
import FamilyGrowthContents from '@/components/family/growth/family-growth-contents';
import FamilyGrowthFetcher from '@/components/family/growth/family-growth-fetcher';

export default function FamilyGrowth() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>성장기록</h2>
      <FamilyGrowthFetcher>
        <FamilyGrowthContents />
      </FamilyGrowthFetcher>
    </section>
  );
}
