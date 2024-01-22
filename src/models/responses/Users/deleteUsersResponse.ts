export interface DeleteUsersResponse{
    id: string; // Assuming Guid is represented as a string
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    nationalIdentity: string;
    birthDate: Date;
    phoneNumber: string;
}