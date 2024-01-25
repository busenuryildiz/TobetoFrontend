import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CourseState {
    courses: Course[];
}

interface Course {
    id: number;
    courseLevelId: number;
    softwareLanguageId: number;
    categoryId: number;
    name: string;
    imagePath: string;
    price: number;
}

const initialState: CourseState = {
    courses: [],
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<Course>) => {
            state.courses.push(action.payload);
        },
        removeCourse: (state, action: PayloadAction<number>) => {
            state.courses = state.courses.filter(course => course.id !== action.payload);
        },
    },
});

export const { addCourse, removeCourse } = courseSlice.actions;

export const courseReducer = courseSlice.reducer;
