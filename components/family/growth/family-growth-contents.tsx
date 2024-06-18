import React from 'react';
import FamilyGrowthList from './list/family-growth-list';
import FamilyGrowthEmpty from './empty/family-growth-empty';
import CalendarInstance from '@/utils/date/date.utils';
import { useGetGrotwthByDateQuery } from '@/hooks/queries/growth/use-get-growth-queries';

export default function FamilyGrowthContents() {
  const date = CalendarInstance.getTodayData();
  const growthQuery = useGetGrotwthByDateQuery(date);

  if (!growthQuery.data!.data.length) return <FamilyGrowthEmpty />;

  return <FamilyGrowthList growthList={growthQuery.data!.data} />;
}
