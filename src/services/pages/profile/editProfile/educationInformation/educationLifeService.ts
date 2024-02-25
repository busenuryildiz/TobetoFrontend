import axios from 'axios';
import { AddEducationLifeRequest } from '../../../../../models/requests/EducationLife/addEducationLifeRequest';
import { AddEducationLifeResponse } from '../../../../../models/responses/EducationLife/addEducationLifeResponse';
import { DeleteEducationLifeResponse } from '../../../../../models/responses/EducationLife/deleteEducationLifeResponse';
import { GetAllEducationLifeResponse } from '../../../../../models/responses/EducationLife/getAllEducationLifeResponse';
import { UpdateEducationLifeRequest } from '../../../../../models/requests/EducationLife/updateEducationLifeRequest';
import { UpdateEducationLifeResponse } from '../../../../../models/responses/EducationLife/updatedEducationLifeResponse';
import { UserEducationInformationResponse } from '../../../../../models/responses/Users/userEducationInformationResponse';

const BASE_API_URL = 'http://localhost:6280/api';

export const EducationLifeService = {
  
  // Yeni eğitim bilgisi ekleme
  addEducationLife: async (newEducation: AddEducationLifeRequest): Promise<AddEducationLifeResponse> => {
    try {
        console.log('Request Data:', newEducation);  // Veriyi kontrol et
        const response = await axios.post(
            `${BASE_API_URL}/EducationInformations/Add`,
            newEducation
        );
        console.log('Response Data:', response.data);  // Cevabı kontrol et
        return response.data as AddEducationLifeResponse;
    } catch (error) {
        throw error;
    }
},


  // Eğitim bilgisi silme
  deleteEducationLife: async (
    educationId: number
  ): Promise<DeleteEducationLifeResponse> => {
    try {
      const response = await axios.delete(
        `${BASE_API_URL}/EducationInformations/Delete?id=${educationId}`
      );
      return response.data as DeleteEducationLifeResponse;
    } catch (error) {
      throw error;
    }
  },

  // Kullanıcının bütün eğitim bilgilerini getirme
  getAllEducationLife: async (
    userId: string
  ): Promise<UserEducationInformationResponse[]> => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/Users/GetUserExperienceAndEducationByUserId?userId=${userId}`
      );
      return response.data.items[0].userEducationInformationResponses as UserEducationInformationResponse[];
    } catch (error) {
      throw error;
    }
  },
};
