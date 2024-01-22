import { GetAllAddressResponse } from "../Address/getAllAddressResponse";

export interface GetAllUsersResponse{
    id: number;
  firstName: string;
  lastName: string;
  address: {
    districtId?: number | null;
    cityId?: number | null;
    countryId?: number | null;
    name?: string | null;
    description?: string | null;
  };
  email: string;
  password: string;
  nationalIdentity: string;
  birthDate: Date;
  phoneNumber: string;
}