export interface MyPageDetails {
  data?: MyPageData;
}

export interface MyPageData {
  id: number;
  name: string;
  invitationCode: string;
  members: Member[];
  membersCount: number;
}

export interface Member {
  id: number;
  name: string;
  nickname: string;
  profileImageUrl: string;
}
