import { axiosInstance } from '../index';
import { StoryData } from '../../types/story/index';
import { StoryDetailsData } from '@/types/story/details';

class StoryAPI {
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

  async createCommentStory({ diaryId, data }: CommentData) {
    return (await axiosInstance.post(`comments/${diaryId}`, data)).data;
  }
}

interface CommentData {
  diaryId: number;
  data: {
    content: string;
  };
}

const storyApiInstance = new StoryAPI();

export default storyApiInstance;
