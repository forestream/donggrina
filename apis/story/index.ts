import { axiosInstance } from '../index';
import { StoryData } from '../../types/story/index';
import { CreateCommentData, StoryDetailsData, UpdateCommentData } from '@/types/story/details';

export class StoryAPI {
  async fetchStory(page = 0, size = 10) {
    return (await axiosInstance.get(`stories?page=${page}&size=${size}`)).data.data as StoryData;
  }

  async fetchDetailStory(diaryId: number) {
    return (await axiosInstance.get(`stories/${diaryId}`)).data.data as StoryDetailsData;
  }

  async postLikeStory(diaryId: number) {
    return (await axiosInstance.post(`hearts/${diaryId}`)).data;
  }

  async deleteLikeStory(diaryId: number) {
    return (await axiosInstance.delete(`hearts/${diaryId}`)).data;
  }

  async createCommentStory({ diaryId, data }: CreateCommentData) {
    return (await axiosInstance.post(`comments/${diaryId}`, data)).data;
  }

  async deleteCommentStory(commentId: number) {
    return await axiosInstance.delete(`comments/parent/${commentId}`);
  }

  async updateCommentStory({ commentId, data }: UpdateCommentData) {
    return await axiosInstance.put(`comments/${commentId}`, data);
  }

  async deleteReplyStroy(commentId: number) {
    return await axiosInstance.delete(`comments/child/${commentId}`);
  }

  async deleteStory(diaryId: number) {
    return await axiosInstance.delete(`stories/${diaryId}`);
  }
}

const storyApiInstance = new StoryAPI();

export default storyApiInstance;
