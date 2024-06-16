import { PropsWithChildren } from 'react';
import { useFetchDiary } from '../../../hooks/queries/family';

export default function FamilyDiaryFetcher(props: PropsWithChildren) {
  const diaryQuery = useFetchDiary('2024-06-16');

  if (diaryQuery.isLoading) return <p>로딩중...</p>;

  return props.children;
}
