import { GrowthData } from '@/types/growth';
import { axiosInstance } from '..';
import { LocalDate } from '@/types/date';
import { GrowthDetailsData } from '@/types/growth/details';
import { FieldValues } from 'react-hook-form';
import { GrowthSearchData } from '@/types/growth/search';

export default class GrowthAPI {
  constructor() {}

  async createGrowth(formData: FieldValues) {
    return await axiosInstance.post('/growth', formData);
  }

  async growthByDate(date: LocalDate) {
    return (await axiosInstance.get<GrowthData>(`/growth?date=${date}`)).data;
  }

  async growthDetails(growthId: number) {
    return (await axiosInstance.get<GrowthDetailsData>(`/growth/${growthId}`)).data;
  }

  async searchGrowth(keyword: string, petNames: string[], writerNames: string[]) {
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
