export interface AddUsersRequest {
  firstName: string;
  lastName: string;
  email: string;
  imagePath: string;
  password: string;
  nationalIdentity: string;
  birthDate: string | Date | null;
  phoneNumber: string;
}