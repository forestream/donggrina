import GrowthDetailSkeleton from '@/components/skeleton/growth/growth-detail';
import GrowthListSkeleton from '@/components/skeleton/growth/growth-list';
import React from 'react';

export default function Test() {
  return (
    <div style={{ paddingTop: '60px' }}>
      {/* <GrowthListSkeleton /> */}
      <GrowthDetailSkeleton />
    </div>
  );
}
