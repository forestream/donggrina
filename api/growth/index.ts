import { Growth } from '@/types/growth';
import { axiosInstance } from '..';
import { GrowthDetailsData } from '@/types/growth/details';
import { FieldValues } from 'react-hook-form';
import { GrowthSearchData } from '@/types/growth/search';

export default class GrowthAPI {
  constructor() {}

  async createGrowth(formData: FieldValues) {
    return await axiosInstance.post('/growth', formData);
  }

  async getGrowthByDate(date: string) {
    return (await axiosInstance.get<Growth>(`/growth?date=${date}`)).data;
  }

  async getGrowthDetails(growthId: number) {
    return (await axiosInstance.get<GrowthDetailsData>(`/growth/${growthId}`)).data;
  }

  async getSearchGrowth(keyword: string, petNames: string[], writerNames: string[]) {
    return (
      await axiosInstance.get<GrowthSearchData>(
        `/growth/search?keyword=${keyword}&petNames=${petNames}&writerNames=${writerNames}`,
      )
    ).data;
  }

  async modifyGrowth(growthId: number) {
    return await axiosInstance.post(`/growth/${growthId}`);
  }

  async deleteGrowth(growthId: number) {
    return await axiosInstance.post(`/growth/${growthId}`);
  }
}
