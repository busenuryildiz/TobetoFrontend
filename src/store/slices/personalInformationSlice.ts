import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../configureStore'; // Uygulama durumunuzun yolunu düzenleyin
import { AddUsersRequest } from '../../models/requests/Users/addUsersRequest';
import { AddUserAddressRequest } from '../../models/requests/Address/addUserAddressRequest';

// Örnek başlangıç durumu
interface PersonalInformationState {
  data: AddUsersRequest | null; // Gerçek tipi buraya ekleyin
  loading: boolean;
  error: string | null;
}

const initialState: PersonalInformationState = {
  data: null,
  loading: false,
  error: null,
};

// Slice oluşturuluyor
export const personalInformationSlice = createSlice({
  name: 'personalInformation',
  initialState,
  reducers: {
    // Veriyi yükleme başladığında tetiklenecek action
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Veri başarıyla yüklendiğinde tetiklenecek action
    fetchDataSuccess: (state, action: PayloadAction<AddUsersRequest>) => {
      state.data = action.payload;
      state.loading = false;
    },
    // Veri yüklenirken bir hata oluştuğunda tetiklenecek action
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Yeni kullanıcı ekleme action'ı
    addUser: (state, action: PayloadAction<AddUsersRequest>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

// Action'ları dışarıya açma
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, addUser } = personalInformationSlice.actions;

// Reducer'ı dışarıya açma
export const personalInformationReducer = personalInformationSlice.reducer;

// Selectors
export const selectPersonalInformation = (state: RootState) => state.personalInformation.data;
export const selectPersonalInformationLoading = (state: RootState) => state.personalInformation.loading;
export const selectPersonalInformationError = (state: RootState) => state.personalInformation.error;
