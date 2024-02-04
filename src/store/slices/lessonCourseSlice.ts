import { GetAllLessonCourseResponse } from '../../models/responses/lessonCourse/getAllLessonCourseResponse';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllLessonCourses = createAsyncThunk<GetAllLessonCourseResponse[]>(
  "lessonCourse/getAllLessonCourse",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<any>(
        "http://localhost:6280/api/LessonCourses/GetList"
      );
      console.log(response);
      return response.data.items;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Error message!");
    }
  });

const lessonCourseSlice = createSlice({
    name: "lessonCourse",
    initialState: {loadingState: "initial", lessonCourses: [] as GetAllLessonCourseResponse []},
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllLessonCourses.pending, (state, action) => {
            state.loadingState = "loading";
        });
        builder.addCase(getAllLessonCourses.fulfilled, (state, action) => {
            state.loadingState = "loaded";
            state.lessonCourses = action.payload;
        });
        builder.addCase(getAllLessonCourses.rejected, (state, action) => {
            state.loadingState = "error";
            console.log("error has been occured", action);
        })
    },
});

export const lessonCourseReducer = lessonCourseSlice.reducer;