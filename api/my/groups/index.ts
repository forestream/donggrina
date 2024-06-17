import { MyPageData } from '@/types/my-page/family';
import { axiosInstance } from '../..';
import { FieldValues } from 'react-hook-form';

interface MyCodeType {
  id: number;
  code: string;
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
    return (await axiosInstance.get<MyPageData>('/my/groups')).data;
  }

  async myFamilyCode() {
    return (await axiosInstance.get<MyCodeType>('/my/groups/code')).data;
  }

  async myFamilyDelete(groupId: string) {
    return axiosInstance.delete(`/my/groups/${groupId}`);
  }

  async myFamilyModify(formData: NameModifyType, groupId: string) {
    return axiosInstance.put(`/my/groups/${groupId}`, formData);
  }

  async myFamilyAddMember(formData: FieldValues) {
    return axiosInstance.post(`/my/groups/members`, formData);
  }

  async myFamilyDeleteMember(groupId: string, targetId: string) {
    return axiosInstance.post(`/my/groups/${groupId}/members/${targetId}`);
  }
}
