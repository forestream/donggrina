import { axiosInstance } from '../index';
import { StoryData } from '../../types/story/index';

class StoryAPI {
  async fetchStory(page = 0, size = 10) {
    return (await axiosInstance.get(`stories?page=${page}&size=${size}`)).data.data as StoryData;
  }
}

const storyApiInstance = new StoryAPI();

export default storyApiInstance;
