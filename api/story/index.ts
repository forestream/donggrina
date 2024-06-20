import { axiosInstance } from '../index';
import { StoryData } from '../../types/story/index';

class StoryAPI {
  async fetchStory(page = 1, size = 10) {
    return (await axiosInstance.get<StoryData>(`stories?page=${page}&size=${size}`)).data;
  }
}

const storyApiInstance = new StoryAPI();

export default storyApiInstance;
