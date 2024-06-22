import FamilyDiaryItem from '@/components/family/diary/item/family-diary-item';
import FamilyDiaryContentsEmpty from '@/components/family/diary/empty/family-diary-empty';
import CalendarInstance from '@/utils/date/date.utils';
import { useDiaries } from '@/hooks/queries/diary/use-diary-query';

export default function FamilyDiaryContents() {
  const date = CalendarInstance.getTodayData();
  const diaryQuery = useDiaries(date);
  const randomIndex = Math.floor(Math.random() * diaryQuery.data!.length);
  const diary = diaryQuery.data![randomIndex];

  if (!diaryQuery.data!.length) return <FamilyDiaryContentsEmpty />;

  return <FamilyDiaryItem {...diary} />;
}
