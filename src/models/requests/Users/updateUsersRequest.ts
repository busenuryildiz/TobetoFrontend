export interface UpdateUsersRequest{
    id: string; 
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    password: null;
    nationalIdentity: string;
    birthDate: Date;
    phoneNumber: string;
}