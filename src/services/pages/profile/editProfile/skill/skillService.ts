import axios from 'axios';
import { AddStudentSkillsbyUserIdRequest } from '../../../../../models/requests/StudentSkill/addStudentSkillByUserIdRequest';
import { AddStudentSkillResponse } from '../../../../../models/responses/StudentSkill/addStudentSkillResponse';
import { GetAllSkillsResponse, SkillItem } from '../../../../../models/responses/Skills/getAllSkillsResponse';
import { GetStudentSkillsByUserIdResponse } from '../../../../../models/responses/StudentSkill/getStudentSkillsByUserIdResponse';
import { DeleteStudentSkillResponse } from '../../../../../models/responses/StudentSkill/deleteStudentSkillResponse';

const BASE_API_URL = 'http://localhost:6280/api';

export const mySkillService = {
  // Yeni beceri ekleme
  addSkill: async (newSkill: AddStudentSkillsbyUserIdRequest): Promise<AddStudentSkillResponse> => {
    try {
      console.log('Request Data:', newSkill);
      const response = await axios.post(
        `${BASE_API_URL}/StudentSkills/AddStudentSkillByUserId`,
        newSkill
      );
      console.log('Response Data:', response.data);
      return response.data as AddStudentSkillResponse;
    } catch (error) {
      throw error;
    }
  },

  // Beceri silme
  deleteSkill: async (studentSkillId: number): Promise<DeleteStudentSkillResponse> => {
    try {
      const response = await axios.delete(`${BASE_API_URL}/StudentSkills/Delete?Id=${studentSkillId}`);
      return response.data as DeleteStudentSkillResponse;
    } catch (error) {
      throw error;
    }
  },

  getAllSkills: async (): Promise<SkillItem[]> => {
    try {
      const response = await axios.get<GetAllSkillsResponse>(
        `${BASE_API_URL}/Skills/GetList?PageSize=100`
      );
      console.log('API Response:', response.data);
      return response.data.items;
    } catch (error) {
      throw error;
    }
  },
  

  // Kullanıcının bütün becerilerini getirme
  getAllStudentSkills: async (userId: string): Promise<GetStudentSkillsByUserIdResponse[]> => {
    try {
      const response = await axios.get(`${BASE_API_URL}/StudentSkills/GetStudentSkillsByUserIdAsync?userId=${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
};
