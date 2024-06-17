interface Member {
  id: number;
  name: string;
  nickname: string;
  profileImageUrl: string;
}

export interface Group {
  id: number;
  name: string;
  invitationCode: string;
  members: Member[];
  membersCount: number;
}
