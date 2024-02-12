// src/store/reducers/authReducer.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string; // Burada string yerine Date kullanabilirsiniz, ancak bu JSON verisi ile uyumsuzluk yaratabilir.
  phoneNumber: string;
  imagePath: string;
  studentId: string;
  studentNumber: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

<<<<<<< HEAD
=======
export const register = createAsyncThunk(
  "auth/register",
  async (registerData: RegisterData, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:6280/api/Users/Add", {
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        email: registerData.email,
        password: registerData.password,
        birthDate : registerData.birthDate,
        phoneNumber : registerData.phoneNumber,
        imagePath: registerData.imagePath,
        nationalIdentity : registerData.nationalIdentity
      });
      console.log(response.data);
      return response.data;
    } catch (err: any) {
      console.error(err);
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (loginData: Logindata, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:6280/api/Auth/login",
        {
          email: loginData.email,
          password: loginData.password,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error("Hata:", error);

      // Hata mesajını toast veya alert ile kullanıcıya gösterin.
      // Örnek:
      // toast.error(error.message);

      // Hata durumunu thunkAPI ile geri gönderin.
      // Örnek:
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (userId: string, thunkAPI) => {
    try {
      const token = localStorage.getItem("accessToken") ?? "";
      const response = await axios.get(
        `http://localhost:6280/api/Users/GetById?id=${userId}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(response.data);
      return response.data.user;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("accessToken");
  
});

>>>>>>> 5aa6d5c9ddac2e0aee3a010a39f609f9084c1bed
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
