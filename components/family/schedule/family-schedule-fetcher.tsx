import React, { PropsWithChildren } from 'react';
import { useFetchSchedule } from '@/hooks/queries/family';

export default function FamilyScheduleFetcher(props: PropsWithChildren) {
  const scheduleQueries = useFetchSchedule('2024-06-16');

  if (scheduleQueries.isLoading) return <p>로딩중입니다.</p>;

  return props.children;
}
