import styles from './family-growth.module.scss';
import FamilyGrowthContents from '@/components/family/growth/family-growth-contents';
import Suspensive from '@/components/suspensive/suspensive';
import { useFetchGrowth } from '@/hooks/queries/family';

export default function FamilyGrowth() {
  const growthQuery = useFetchGrowth('2024-06-16');

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>성장기록</h2>
      <Suspensive isLoading={growthQuery.isLoading}>
        <FamilyGrowthContents />
      </Suspensive>
    </section>
  );
}
