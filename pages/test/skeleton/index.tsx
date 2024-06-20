import FamilyCalendarSkeleton from '@/components/skeleton/family/calendar';
import FamilyDiarySkeleton from '@/components/skeleton/family/diary';
import FamilyGrowthSkeleton from '@/components/skeleton/family/growth';
import React from 'react';

export default function index() {
  return (
    <div style={{ paddingTop: '54px' }}>
      {/* <FamilyDiarySkeleton /> */}
      {/* <FamilyGrowthSkeleton /> */}
      <FamilyCalendarSkeleton />
    </div>
  );
}
