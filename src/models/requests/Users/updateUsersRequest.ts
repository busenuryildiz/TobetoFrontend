// Kullanıcı bilgisini güncellemek için istek arayüzü
export interface UpdateUserRequest {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  imagePath: string;
  password: string;
  nationalIdentity: string;
  birthDate: Date;
  phoneNumber: string;
}
