import axios from 'axios';
import { AddUserExperiencesRequest } from '../../../../../models/requests/UserExperience/addUserExperiencesRequest';
import { AddUserExperiencesResponse } from '../../../../../models/responses/UserExperience/addUserExperiencesResponse';
import { DeleteUserExperienceRequest } from '../../../../../models/requests/UserExperience/deleteUserExperiencesRequest';
import { UserExperiencesResponse } from '../../../../../models/responses/Users/userExperienceResponse';
import { DeleteUserExperiencesResponse } from '../../../../../models/responses/UserExperience/deleteUserExperiencesResponse';

const BASE_API_URL = 'http://localhost:6280/api';

export const MyExperienceService = {
  
  // Yeni deneyim ekleme
  addUserExperience: async (
    newExperience: AddUserExperiencesRequest
  ): Promise<AddUserExperiencesResponse> => {
    try {
      const response = await axios.post(
        `${BASE_API_URL}/UserExperiences/Add`,
        newExperience
      );
      return response.data as AddUserExperiencesResponse;
    } catch (error) {
      throw error;
    }
  },

  // Deneyim silme
  deleteUserExperience: async (
    experienceId: number
  ): Promise<DeleteUserExperiencesResponse> => {
    try {
      const response = await axios.delete(
        `${BASE_API_URL}/UserExperiences/Delete?Id=${experienceId}`
      );
      return response.data as DeleteUserExperiencesResponse;
    } catch (error) {
      throw error;
    }
  },

  // Kullanıcının bütün deneyimlerini getirme
  getAllUserExperiences: async (
    userId: string
  ): Promise<UserExperiencesResponse[]> => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/Users/GetUserExperienceAndEducationByUserId?userId=${userId}`
      );
      return response.data as UserExperiencesResponse[];
    } catch (error) {
      throw error;
    }
  },
};
