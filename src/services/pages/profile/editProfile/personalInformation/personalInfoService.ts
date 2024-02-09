import { AxiosResponse } from 'axios';
import axiosInstance from '../../../../../core/Interceptors/axiosInterceptor';
import { AddUsersRequest } from '../../../../../models/requests/Users/addUsersRequest';
import { AddUsersResponse } from '../../../../../models/responses/Users/addUsersResponse';

// Kullanıcı bilgisini içeren arayüz
export interface GetListUserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  imagePath: string;
  password: string;
  nationalIdentity: string;
  birthDate: Date;
  phoneNumber: string;
  address?: GetListAddressResponse; // Adres bilgisini içeren arayüzü içerir, isteğe bağlı olabilir
}

// Adres bilgisini içeren arayüz
export interface GetListAddressResponse {
  id: number;
  userId: string; // Assuming Guid is represented as string
  districtId?: number | null;
  name?: string | null;
  description?: string | null;
  country?: string | null; // Ek alan
  city?: string | null;    // Ek alan
  district?: string | null; // Ek alan
}

// Şehir bilgisini içeren arayüz
export interface GetListCityResponse {
  id: number;
  countryId: number;
  name: string;
  districts: GetListDistrictResponse[]; // Şehre ait bölgeleri içerir
}

// Ülke bilgisini içeren arayüz
export interface GetListCountryResponse {
  id: number;
  name: string;
  cities: GetListCityResponse[]; // Ülkeye ait şehirleri içerir
}

// Bölge bilgisini içeren arayüz
export interface GetListDistrictResponse {
  id: number;
  cityId: number;
  name: string;
}

// Kullanıcı bilgisini güncellemek için istek arayüzü
export interface UpdateUserRequest {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  imagePath: string;
  password: string;
  nationalIdentity: string;
  birthDate: string | Date | null;
  phoneNumber: string;
}


// Güncellenmiş kullanıcı bilgisini içeren arayüz
export interface UpdatedUserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  nationalIdentity: string;
  birthDate: Date;
  phoneNumber: string;
  address?: UpdatedAddressResponse; // Güncellenmiş adres bilgisini içerir, isteğe bağlı olabilir
}

// Adres eklemek için istek arayüzü
export interface CreateAddressRequest {
  userId?: string;
  districtId?: number | null;
  name?: string | null;
  description?: string | null;
  country?: string | null; // Ek alan
  city?: string | null;    // Ek alan
  district?: string | null; // Ek alan
}

// Oluşturulan adres bilgisini içeren arayüz
export interface CreatedAddressResponse {
  id: number;
  userId: string; // Assuming Guid is represented as string
  districtId?: number | null;
  name?: string | null;
  description?: string | null;
}

// Adres bilgisini güncellemek için istek arayüzü
export interface UpdateAddressRequest {
  id: number;
  userId: string;
  districtId?: number | null;
  name?: string | null;
  description?: string | null;
}

// Güncellenmiş adres bilgisini içeren arayüz
export interface UpdatedAddressResponse {
  id: number;
  userId: string; // Assuming Guid is represented as string
  districtId?: number | null;
  name?: string | null;
  description?: string | null;
}

class PersonalInformationService {
  private apiUrl = ''; // API yolunuzu uygun şekilde değiştirin


  // Kullanıcı bilgisini getir
  getUserInformation(userId: string): Promise<AxiosResponse<GetListUserResponse>> {
    return axiosInstance.get<GetListUserResponse>(`Users/GetById?id=${userId}`);
  }

  // Tüm adresleri getir
  getAllAddresses(): Promise<AxiosResponse<GetListAddressResponse[]>> {
    return axiosInstance.get<GetListAddressResponse[]>(`Addresses/GetList`);
  }

  // Tüm şehirleri getir
  getAllCities(): Promise<AxiosResponse<GetListCityResponse[]>> {
    return axiosInstance.get<GetListCityResponse[]>(`Cities/GetList`);
  }

  // Tüm ülkeleri getir
  getAllCountries(): Promise<AxiosResponse<GetListCountryResponse[]>> {
    return axiosInstance.get<GetListCountryResponse[]>(`Countries/GetList`);
  }

  // Tüm bölgeleri getir
  getAllDistricts(): Promise<AxiosResponse<GetListDistrictResponse[]>> {
    return axiosInstance.get<GetListDistrictResponse[]>(`Districts/GetList`);
  }

   // Kullanıcı ekle
   addUser(request: AddUsersRequest): Promise<AxiosResponse<AddUsersResponse>> {
    return axiosInstance.post<AddUsersResponse>(`Users/Add`, request);
  }
  // Kullanıcı bilgisini güncelle
  updateUserInformation(request: UpdateUserRequest): Promise<AxiosResponse<UpdatedUserResponse>> {
    return axiosInstance.put<UpdatedUserResponse>(`Users/Update`, request);
  }

  // Adres ekle
  addAddress(request: CreateAddressRequest): Promise<AxiosResponse<CreatedAddressResponse>> {
    return axiosInstance.post<CreatedAddressResponse>(`Addresses/Add`, request);
  }

  // Adres güncelle
  updateAddress(request: UpdateAddressRequest): Promise<AxiosResponse<UpdatedAddressResponse>> {
    return axiosInstance.put<UpdatedAddressResponse>(`Addresses/Update`, request);
  }

  // Adres sil
  deleteAddress(addressId: number): Promise<void> {
    return axiosInstance.delete(`Addresses/Delete?id=${addressId}`);
  }
}

export default PersonalInformationService;