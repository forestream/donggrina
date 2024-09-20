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

  async myFamilyDelete() {
    return await axiosInstance.delete(`/my/groups`);
  }

  async myFamilyModify(formData: NameModifyType) {
    return await axiosInstance.put(`/my/groups`, formData);
  }

  async myFamilyAddMember(formData: FieldValues) {
    return await axiosInstance.post(`/my/groups/members`, formData);
  }

  async myFamilyDeleteMember(targetId: number) {
    return await axiosInstance.post(`/my/groups/members/${targetId}`);
  }
}
