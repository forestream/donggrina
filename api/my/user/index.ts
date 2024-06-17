import { axiosInstance } from '../../index';
import { User } from '../../../types/my-page/user/index';

class MyPageAPI {
  async getProfile() {
    return (await axiosInstance.get<User>('my/profiles')).data.data;
  }
}

const myPageApiInstance = new MyPageAPI();

export default myPageApiInstance;
