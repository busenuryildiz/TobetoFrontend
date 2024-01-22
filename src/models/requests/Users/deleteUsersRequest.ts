export interface DeleteUsersRequest{
    id: string; // Assuming Guid is represented as a string
    firstName: string;
    lastName: string;
    email: string;
}