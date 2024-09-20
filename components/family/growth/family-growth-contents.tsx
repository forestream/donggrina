import React from 'react';
import FamilyGrowthList from './list/family-growth-list';
import FamilyGrowthEmpty from './empty/family-growth-empty';
import { GROWTH } from '@/lib/mock/mock';
// import CalendarInstance from '@/utils/date/date.utils';
// import { useGetGrotwthByDateQuery } from '@/hooks/queries/growth/use-get-growth-queries';
// import { Growth } from '@/types/growth';

export default function FamilyGrowthContents() {
  // const date = CalendarInstance.getTodayData();
  // const growthQuery = useGetGrotwthByDateQuery(date);

  const growthQuery = GROWTH;

  if (!growthQuery.data!.data.length) return <FamilyGrowthEmpty />;

  return <FamilyGrowthList growthList={growthQuery.data!.data} />;
}
