import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Address {
  districtId: number;
  cityId: number;
  countryId: number;
  name: string;
  description: string;
}

interface PersonalInformationSlice {
  name: string;
  surname: string;
  phoneNumberCountry: string;
  phoneNumber: string;
  birthday: string;
  identifier: string;
  email: string;
  address: Address;
  description: string;
  users: UserInfo[];
}

interface UserInfo {
  name: string;
  surname: string;
  phoneNumberCountry: string;
  phoneNumber: string;
  birthday: string;
  identifier: string;
  email: string;
  address: Address;
  description: string;
}

const initialState: PersonalInformationSlice = {
  name: '',
  surname: '',
  phoneNumberCountry: 'ZZ',
  phoneNumber: '',
  birthday: '',
  identifier: '',
  email: '',
  address: {
    districtId: 0,
    cityId: 0,
    countryId: 0,
    name: '',
    description: '',
  },
  description: '',
  users: [],
};

const personalInformationSlice = createSlice({
  name: 'personalInformation',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action: PayloadAction<Partial<PersonalInformationSlice>>) => {
      return { ...state, ...action.payload };
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { updatePersonalInfo, addUser } = personalInformationSlice.actions;

export const personalInformationReducer = personalInformationSlice.reducer;