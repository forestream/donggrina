import { useGetFamilyAllQuery } from '@/hooks/queries/my/family/useGetFamilyQueries';
import FamilyListItem from '../family-list-item/family-list-item';
import { Member } from '@/types/my-page/family';

export default function FamilyList() {
  const { data } = useGetFamilyAllQuery();
  if (!data) return null;
  return (
    <ul>
      {data.members.map((membersData: Member) => {
        return <FamilyListItem key={membersData.id} membersCount={data.membersCount} {...membersData} />;
      })}
    </ul>
  );
}
