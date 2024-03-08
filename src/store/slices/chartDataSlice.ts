// chartDataSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL } from '../../enviroment/enviroment';

interface ChartDataState {
  data: Record<string, number>;
}

const initialState: ChartDataState = {
  data: {},
};

const chartDataSlice = createSlice({
  name: 'chartData',
  initialState,
  reducers: {
    setChartData: (state, action: PayloadAction<Record<string, number>>) => {
      state.data = action.payload;
    },
  },
});

export const fetchData = createAsyncThunk(
  'chartData/fetchData',
  async ({ userId, surveyId }: { userId: string; surveyId: number }) => {
    try {
      const response = await axios.get(`${BASE_API_URL}Surveys/surveyansweraverages`, {
        params: {
          userId,
          surveyId,
        },
      });
      const surveyAnswerAverages = Object.entries(response.data);
      const newData: Record<string, number> = {};
      surveyAnswerAverages.forEach(([key, value]) => {
        newData[key] = Number(value);
      });

      return newData; // Return the data directly as the payload
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
);

export const { setChartData } = chartDataSlice.actions; 

export const chartDataReducer = chartDataSlice.reducer;

