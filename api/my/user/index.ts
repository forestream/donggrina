import { axiosInstance } from '../../index';
import { User } from '../../../types/my-page/user/index';

class MyPageAPI {
  async getProfile() {
    return (await axiosInstance.get<User>('my/profiles')).data.data;
  }

  async updateProfile() {
    return await axiosInstance.put('my/profiles');
  }
}

const myPageApiInstance = new MyPageAPI();

export default myPageApiInstance;
