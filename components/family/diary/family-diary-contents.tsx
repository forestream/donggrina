import { useFetchDiary } from '../../../hooks/queries/family';
import FamilyDiaryItem from '@/components/family/diary/family-diary-item';
import FamilyDiaryContentsEmpty from '@/components/family/diary/family-diary-empty';

export default function FamilyDiaryContents() {
  const diaryQuery = useFetchDiary('2024-06-16');

  if (!diaryQuery.data!.length) return <FamilyDiaryContentsEmpty />;

  return <FamilyDiaryItem />;
}
