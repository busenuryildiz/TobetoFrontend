import { GetAllAddressResponse } from "../Address/getAllAddressResponse";

export interface GetAllUsersResponse{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  nationalIdentity: string;
  birthDate: Date;
  phoneNumber: string;
  addresses: GetAllAddressResponse[];
}