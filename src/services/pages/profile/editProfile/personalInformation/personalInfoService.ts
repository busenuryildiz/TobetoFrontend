import axios from 'axios';
import { UpdatedUserAllInformationResponse } from '../../../../../models/responses/Users/updatedUserAllInformationResponse';
import { UpdatedUserAllInformationRequest } from '../../../../../models/requests/Users/updateUserAllInformationRequest';
import { BASE_API_URL } from '../../../../../enviroment/enviroment';


export const PersonalInformationService = {
  // Kullanıcı bilgilerini getirme
  getUserInformation: async (userId: string): Promise<UpdatedUserAllInformationResponse> => {
    try {
      const response = await axios.get(`${BASE_API_URL}/Users/GetAllUserInformationById?id=${userId}`);
      return response.data as UpdatedUserAllInformationResponse;
    } catch (error) {
      throw error;
    }
  },

  // Kullanıcı bilgilerini güncelleme
  updateUserInformation: async (
    updatedInfo: UpdatedUserAllInformationRequest
  ): Promise<UpdatedUserAllInformationResponse> => {
    try {
      const response = await axios.put(`${BASE_API_URL}/Users/UpdateAllUserInformation`, updatedInfo);
      return response.data as UpdatedUserAllInformationResponse;
    } catch (error) {
      throw error;
    }
  }
};




export default PersonalInformationService;