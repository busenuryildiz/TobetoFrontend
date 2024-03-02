// chartDataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChartDataState {
  data: Record<string, number>;
}

const initialState: ChartDataState = {
  data: {},
};

export const chartDataSlice = createSlice({
  name: 'chartData',
  initialState,
  reducers: {
    setChartData: (state, action: PayloadAction<Record<string, number>>) => {
      state.data = action.payload;
    },
  },
});

export const { setChartData } = chartDataSlice.actions;

export type ChartDataAction = ReturnType<typeof setChartData>;

export default chartDataSlice.reducer;