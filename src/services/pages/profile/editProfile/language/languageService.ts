import axios from 'axios';
import { LanguageItem } from '../../../../../models/responses/Language/getAllLanguageResponse';
import { LanguageLevelItem } from '../../../../../models/responses/LanguageLevel/getAllLanguageLevelResponse';
import { AddUserLanguageRequest } from '../../../../../models/requests/UserLanguage/addUserLanguageRequest';
import { AddUserLanguageResponse } from '../../../../../models/responses/UserLanguage/addUserLanguageResponse';
import { GetUserLanguageAndLevelResponse } from '../../../../../models/responses/UserLanguage/getUserLanguageAndLevelResponse';
import { DeleteUserLanguageResponse } from '../../../../../models/responses/UserLanguage/deleteUserLanguageResponse';

const BASE_API_URL = 'http://localhost:6280/api';

export const LanguageService = {

    addLanguage: async (newLanguage: AddUserLanguageRequest): Promise<AddUserLanguageResponse> => {
        try {
            console.log('Request Data:', newLanguage);
            const response = await axios.post(
                `${BASE_API_URL}/UserLanguages/Add`,
                newLanguage
            );
            console.log('Response Data:', response.data);
            return response.data as AddUserLanguageResponse;
        } catch (error) {
            throw error;
        }
    },

    deleteUserLanguage: async (userLanguageId: number): Promise<DeleteUserLanguageResponse> => {
        try {
          const response = await axios.delete(`${BASE_API_URL}/UserLanguages/Delete?Id=${userLanguageId}`);
          return response.data as DeleteUserLanguageResponse;
        } catch (error) {
          throw error;
        }
      },

    getAllUserLanguage: async (userId: string): Promise<GetUserLanguageAndLevelResponse> => {
        try {
          const response = await axios.get(`${BASE_API_URL}/UserLanguages/GetUserLanguageAndLevelByUserId?userId=${userId}`);
          return response.data as GetUserLanguageAndLevelResponse;
        } catch (error) {
          throw error;
        }
      },

    getAllLanguage: async (): Promise<LanguageItem[]> => {
        try {
            const response = await axios.get(`${BASE_API_URL}/Languages/GetList?PageSize=10`);
            return response.data.items
        } catch (error) {
            throw error;
        }
    },

    getAllLanguageLevel: async (): Promise<LanguageLevelItem[]> => {
        try {
            const response = await axios.get(`${BASE_API_URL}/LanguageLevels/GetList?PageSize=10`);
            return response.data.items
        } catch (error) {
            throw error;
        }
    },
};

export default LanguageService;