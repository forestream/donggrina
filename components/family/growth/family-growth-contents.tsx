import React from 'react';
import { useFetchGrowth } from '@/hooks/queries/family';
import FamilyGrowthList from './list/family-growth-list';
import FamilyGrowthEmpty from './empty/family-growth-empty';
import CalendarInstance from '@/utils/date/date.utils';

export default function FamilyGrowthContents() {
  const date = CalendarInstance.getTodayData();
  const growthQuery = useFetchGrowth(date);

  if (!growthQuery.data!.length) return <FamilyGrowthEmpty />;

  return <FamilyGrowthList />;
}
