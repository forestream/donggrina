import FamilyListItem from '../family-list-item/family-list-item';
import { Member, MyPageDetails } from '@/types/my-page/family';

export default function FamilyList({ data }: MyPageDetails) {
  if (!data) return null;
  const owner = data.members[0].id;
  return (
    <ul>
      {data.members.map((membersData: Member, index) => {
        const membersValue = {
          membersCount: data.membersCount,
          index: index,
          owner: owner,
          ...membersData,
        };
        return <FamilyListItem key={membersData.id} membersValue={membersValue} />;
      })}
    </ul>
  );
}
