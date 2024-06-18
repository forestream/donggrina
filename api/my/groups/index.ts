import { MyPageDetails } from '@/types/my-page/family';
import { axiosInstance } from '../..';
import { FieldValues } from 'react-hook-form';

interface MyCodeType {
  code: number;
  data: {
    id: number;
    code: string;
  };
  message: string;
}

interface NameModifyType {
  name: string;
}

export default class MyFamilyApi {
  constructor() {}

  async myFamilyCreate(formData: FieldValues) {
    return axiosInstance.post('/my/groups', formData);
  }

  async myFamilyDetails() {
    return (await axiosInstance.get<MyPageDetails>('/my/groups')).data;
  }

  async myFamilyCode() {
    return (await axiosInstance.get<MyCodeType>('/my/groups/code')).data;
  }

  async myFamilyDelete(groupId: number) {
    return axiosInstance.delete(`/my/groups/${groupId}`);
  }

  async myFamilyModify(formData: NameModifyType, groupId: number) {
    return axiosInstance.put(`/my/groups/${groupId}`, formData);
  }

  async myFamilyAddMember(formData: FieldValues) {
    return axiosInstance.post(`/my/groups/members`, formData);
  }

  async myFamilyDeleteMember(groupId: number, targetId: number) {
    return axiosInstance.post(`/my/groups/${groupId}/members/${targetId}`);
  }
}
