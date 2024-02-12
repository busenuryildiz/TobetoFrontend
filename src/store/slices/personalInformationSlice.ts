import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

// Diğer arayüzleri ekleyin
import {
  GetListUserResponse,
  GetListAddressResponse,
  GetListCityResponse,
  GetListCountryResponse,
  UpdateUserRequest,
  UpdatedUserResponse,
  CreateAddressRequest,
  CreatedAddressResponse,
  UpdateAddressRequest,
  UpdatedAddressResponse,
} from '../../services/pages/profile/editProfile/personalInformation/personalInfoService';

interface PersonalInformationState {
  user: GetListUserResponse | null;
  addresses: GetListAddressResponse[];
  cities: GetListCityResponse[];
  countries: GetListCountryResponse[];
  loading: boolean;
  error: string | null;
}

const initialState: PersonalInformationState = {
  user: null,
  addresses: [],
  cities: [],
  countries: [],
  loading: false,
  error: null,
};

export const personalInformationSlice = createSlice({
  name: 'personalInformation',
  initialState,
  reducers: {
    setPersonalInformation: (state, action: PayloadAction<GetListUserResponse>) => {
      state.user = action.payload;
    },
    setAddresses: (state, action: PayloadAction<GetListAddressResponse[]>) => {
      state.addresses = action.payload;
    },
    setCities: (state, action: PayloadAction<GetListCityResponse[]>) => {
      state.cities = action.payload;
    },
    setCountries: (state, action: PayloadAction<GetListCountryResponse[]>) => {
      state.countries = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    // Yeni action'ları buraya ekleyin
    updateUserInfo: (state, action: PayloadAction<UpdatedUserResponse>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    addAddress: (state, action: PayloadAction<CreatedAddressResponse>) => {
      state.addresses = [...state.addresses, action.payload];
    },
    updateAddress: (state, action: PayloadAction<UpdatedAddressResponse>) => {
      state.addresses = state.addresses.map((address) =>
        address.id === action.payload.id ? { ...address, ...action.payload } : address
      );
    },
  },
});

export const {
  setPersonalInformation,
  setAddresses,
  setCities,
  setCountries,
  setLoading,
  setError,
  updateUserInfo,
  addAddress,
  updateAddress,
} = personalInformationSlice.actions;

export const selectPersonalInformation = (state: RootState) => state.personalInformation;

const personalInformationReducer = personalInformationSlice.reducer;

export default personalInformationReducer;
