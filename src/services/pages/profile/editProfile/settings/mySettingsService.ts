import axios from 'axios';
import { UpdateChangePasswordResponse } from '../../../../../models/responses/Users/updateChangePasswordResponse';
import { UpdateChangePasswordRequest } from '../../../../../models/requests/Users/updateChangePasswordRequest';
import { UpdateUsersResponse } from '../../../../../models/responses/Users/updateUsersResponse';
import { GetByIdUsersResponse } from '../../../../../models/responses/Users/getByIdUsersResponse';
import { BASE_API_URL } from '../../../../../enviroment/enviroment';


export const MySettingsService = {
 

  // Kullanıcı bilgilerini getirme
  getUserInformation: async (userId: string): Promise<GetByIdUsersResponse> => {
    try {
      const response = await axios.get(`${BASE_API_URL}/Users/GetById?id=${userId}`);
      return response.data as GetByIdUsersResponse;
    } catch (error) {
      throw error;
    }
  },

  // Kullanıcı bilgilerini güncelleme
  updateUserPassword: async (
    userId: string,
    newPassword: string
  ): Promise<UpdateChangePasswordResponse> => {
    try {
      const response = await axios.put(
        `${BASE_API_URL}/Users/UpdateChangePassword`,
        { userId, changePassword: newPassword }
      );
      return response.data as UpdateChangePasswordResponse;
    } catch (error) {
      throw error;
    }
  },
};





export default MySettingsService;




