import FamilyListItem from '../family-list-item/family-list-item';
import { Member, MyPageDetails } from '@/types/my-page/family';

export default function FamilyList({ data }: MyPageDetails) {
  return (
    <ul>
      {data.members.map((membersData: Member) => {
        return <FamilyListItem key={membersData.id} membersCount={data.membersCount} {...membersData} />;
      })}
    </ul>
  );
}
