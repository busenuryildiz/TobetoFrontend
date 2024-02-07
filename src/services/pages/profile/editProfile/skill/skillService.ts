import { Dispatch } from 'redux';
import { BaseService } from "../../../../../core/services/baseServices";
import { AddSkillsRequest } from "../../../../../models/requests/Skills/addSkillsRequest";
import { GetAllSkillsResponse } from "../../../../../models/responses/Skills/getAllSkillsResponse";
import { UpdateSkillsRequest } from "../../../../../models/requests/Skills/updateSkillsRequest";
import { UpdateSkillsResponse } from "../../../../../models/responses/Skills/updateSkillsResponse";
import axiosInstance from "../../../../../core/Interceptors/axiosInterceptor";
import { fetchSkillsSuccess } from '../../../../../store/slices/mySkillSlice';
import { fetchSkillsFailure } from '../../../../../store/slices/mySkillSlice';
import { AddSkillsResponse } from '../../../../../models/responses/Skills/addSkillsResponse';

class SkillService extends BaseService<
  GetAllSkillsResponse,
  AddSkillsRequest,
  AddSkillsResponse,
  UpdateSkillsRequest,
  UpdateSkillsResponse
> {
  addSkillToUser = (userId: number, skill: AddSkillsRequest) => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await this.addSkillToUser(userId, skill) as unknown as { data: AddSkillsResponse };
        dispatch(fetchSkillsSuccess([response.data]));
      } catch (error: any) {
        dispatch(fetchSkillsFailure(error.message));
      }
    };
  };
}

export default new SkillService();

export const getByFilter = (filter: string) => {
  // Implement filtering logic here if needed
};
