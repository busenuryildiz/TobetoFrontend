import { AddUserAddressRequest } from "../Address/addUserAddressRequest";

export interface AddUsersRequest{
    firstName: string;
    lastName: string;
    address: AddUserAddressRequest;
    email: string;
    password?: string | null | undefined;
    nationalIdentity: string;
    birthDate: Date;
    phoneNumber: string;
}