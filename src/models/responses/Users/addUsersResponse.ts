import { AddUserAddressRequest } from "../../requests/Address/addUserAddressRequest";

export interface AddUsersResponse{
    id: string; // Assuming Guid is represented as a string
    firstName: string;
    lastName: string;
    address: AddUserAddressRequest;
    email: string;
    password: string;
    nationalIdentity: string;
    birthDate: Date;
    phoneNumber: string;
}