import { PropsWithChildren } from 'react';
import { useFetchGrowth } from '../../../hooks/queries/family';

export default function FamilyGrowthFetcher(props: PropsWithChildren) {
  const growthQuery = useFetchGrowth('2024-06-16');

  if (growthQuery.isLoading) return <p>로딩중...</p>;

  return props.children;
}
