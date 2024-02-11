interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    imagePath: string;
    password: string;
    birthDate: Date;
    phoneNumber: string;
    nationalIdentity: string;
    token?: string; // Bu alan isteğe bağlı, eğer kullanıyorsanız ekleyin
    address?: GetListAddressResponse; // Adres bilgisini içeren arayüzü içerir, isteğe bağlı olabilir
  }
  
  interface GetListAddressResponse {
    id: number;
    userId: string; // Assuming Guid is represented as string
    districtId?: number | null;
    name?: string | null;
    description?: string | null;
    country?: string | null; // Ek alan
    city?: string | null;    // Ek alan
    district?: string | null; // Ek alan
  }
  
  export default User;
  