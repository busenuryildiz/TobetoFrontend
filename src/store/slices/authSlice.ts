import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  currentUser: User | RegisterData | Logindata | undefined | null;
  isLoading: boolean;
}

interface User {
  id: string | null;
  firstName: string;
  lastName: string;
  email: string;
  imagePath: string | null;
  password: string | null;
  birthDate: Date | null;
  phoneNumber: string | null;
  token: string | null;
  nationalIdentity: string | null;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date;
  phoneNumber: string;
  imagePath: string;
  nationalIdentity: string;
}
interface Logindata {
  email: string;
  password: string;
}
interface LoginResponse {
  user: User;
  token: string;
}
interface RegisterResponse {
  user: User;
}

const initialState: AuthState = {
  currentUser: undefined,
  isLoading: false,
};

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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<RegisterResponse>) => {
          state.isLoading = false;
          state.currentUser = action.payload.user;
        }
      )
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.isLoading = false;
          state.currentUser = action.payload.user;
          localStorage.setItem("accessToken", action.payload.token);
          console.log(state.currentUser);
        }
      )
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.currentUser = null;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCurrentUser.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.isLoading = false;
          state.currentUser = action.payload;
          console.log(state.currentUser);
        }
      )
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoading = false;
        state.currentUser = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.currentUser = null;
      });
  },
});

export const authReducer = authSlice.reducer;
