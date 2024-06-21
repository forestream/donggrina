import { useFetchDiary } from '@/hooks/queries/family';
import FamilyDiaryItem from '@/components/family/diary/item/family-diary-item';
import FamilyDiaryContentsEmpty from '@/components/family/diary/empty/family-diary-empty';
import CalendarInstance from '@/utils/date/date.utils';

export default function FamilyDiaryContents() {
  const date = CalendarInstance.getTodayData();
  const diaryQuery = useFetchDiary(date);

  if (!diaryQuery.data!.length) return <FamilyDiaryContentsEmpty />;

  return <FamilyDiaryItem />;
}
