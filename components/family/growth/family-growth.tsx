import FamilyGrowthSkeleton from '@/components/skeleton/family/growth';
import styles from './family-growth.module.scss';
import FamilyGrowthContents from '@/components/family/growth/family-growth-contents';
import Suspensive from '@/components/suspensive/suspensive';
import { useGetGrotwthByDateQuery } from '@/hooks/queries/growth/use-get-growth-queries';
import CalendarInstance from '@/utils/date/date.utils';

const FamilyGrowthSkeletonContainer = () => {
  return (
    <div className={styles.skeletonContainer}>
      <FamilyGrowthSkeleton />
      <FamilyGrowthSkeleton />
      <FamilyGrowthSkeleton />
      <FamilyGrowthSkeleton />
    </div>
  );
};

export default function FamilyGrowth() {
  const date = CalendarInstance.getTodayData();
  const growthQuery = useGetGrotwthByDateQuery(date);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>성장기록</h2>
      <Suspensive fallback={<FamilyGrowthSkeletonContainer />} isLoading={growthQuery.isLoading}>
        <FamilyGrowthContents />
      </Suspensive>
    </section>
  );
}
