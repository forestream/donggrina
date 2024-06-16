import React from 'react';
import { useFetchGrowth } from '@/hooks/queries/family';
import FamilyGrowthList from './family-growth-list';
import FamilyGrowthEmpty from './family-growth-empty';

export default function FamilyGrowthContents() {
  const growthQuery = useFetchGrowth('2024-06-16');

  if (!growthQuery.data!.length) return <FamilyGrowthEmpty />;

  return <FamilyGrowthList />;
}
