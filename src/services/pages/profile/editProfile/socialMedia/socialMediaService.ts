import axios from 'axios';
import { AddSocialMediaRequest } from '../../../../../models/requests/SocialMedia/addSocialMediaRequest';
import { AddSocialMediaResponse } from '../../../../../models/responses/SocialMedia/addSocialMediaResponse';
import { DeleteSocialMediaResponse } from '../../../../../models/responses/SocialMedia/deleteSocialMediaResponse';
import { GetAllSocialMediaResponse } from '../../../../../models/responses/SocialMedia/getAllSocialMediaResponse';

const BASE_API_URL = 'http://localhost:6280/api';

export const socialMediaService = {
  addSocialMedia: async (newSocialMedia: AddSocialMediaRequest): Promise<AddSocialMediaResponse> => {
    try {
      console.log('Request Data:', newSocialMedia);
      const response = await axios.post<AddSocialMediaResponse>(
        `${BASE_API_URL}/SocialMediaAccounts/Add`,
        newSocialMedia
      );
      console.log('Response Data:', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteSocialMedia: async (socialMediaId: number): Promise<DeleteSocialMediaResponse> => {
    try {
      const response = await axios.delete<DeleteSocialMediaResponse>(
        `${BASE_API_URL}/SocialMediaAccounts/Delete?Id=${socialMediaId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAllSocialMedia: async (userId: string): Promise<GetAllSocialMediaResponse[]> => {
    try {
      const response = await axios.get<GetAllSocialMediaResponse[]>(
        `${BASE_API_URL}/SocialMediaAccounts/GetUsersAllSocialMediaAccount?userId=${userId}`
      );
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
