import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { AddSkillsRequest } from '../../models/requests/Skills/addSkillsRequest';
import skillService from '../../services/pages/profile/editProfile/skill/skillService';

interface SkillsState {
  skills: AddSkillsRequest[];
  selectedSkill: AddSkillsRequest | null;
  loading: boolean;
  error: string | null;
}

const initialState: SkillsState = {
  skills: [],
  selectedSkill: null,
  loading: false,
  error: null,
};

export const addSkillToUser = (userId: number, skill: AddSkillsRequest) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await skillService.addSkillToUser(userId, skill) as unknown as { data: AddSkillsRequest[] };
      const responseData = response.data;
      dispatch(fetchSkillsSuccess(responseData));
    } catch (error: any) {
      dispatch(fetchSkillsFailure(error.message));
    }
  };
};


export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    fetchSkillsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSkillsSuccess: (state, action: PayloadAction<AddSkillsRequest[]>) => {
      state.skills = action.payload;
      state.loading = false;
    },
    fetchSkillsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    selectSkill: (state, action: PayloadAction<AddSkillsRequest>) => {
      state.selectedSkill = action.payload;
    },
  },
});



export const selectSkills = (state: RootState) => state.skill.skills;
export const selectSelectedSkill = (state: RootState) => state.skill.selectedSkill;
export const selectSkillsLoading = (state: RootState) => state.skill.loading;
export const selectSkillsError = (state: RootState) => state.skill.error;


export const { fetchSkillsStart, fetchSkillsSuccess, fetchSkillsFailure, selectSkill } = skillsSlice.actions;
export const skillsReducer = skillsSlice.reducer;