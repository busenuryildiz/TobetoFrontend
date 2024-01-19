import axiosInstance from '../utils/axiosInterceptor';

class PersonalInfoService {

  getCountries = () => axiosInstance.get('/Countries/GetList');

  addCountry = (name: string) => axiosInstance.post('/Countries/Add', { name });

  getCities = (countryId: number) => axiosInstance.get(`/countries/${countryId}/cities`);

  // Şehir ekle
  addCity = (countryId: number, name: string) => axiosInstance.post(`/countries/${countryId}/cities`, { name });

  // İlçeleri getir
  getDistricts = (cityId: number) => axiosInstance.get(`/cities/${cityId}/districts`);

  // İlçe ekle
  addDistrict = (cityId: number, name: string) => axiosInstance.post(`/cities/${cityId}/districts`, { name });

  // Kullanıcı ekle
  addUser = async (user: any) => {
    try {
      // Ülke ekleyelim
      const countryResponse = await this.addCountry(user.address.country);
      const countryId = countryResponse.data.id;

      // Şehir ekleyelim
      const cityResponse = await this.addCity(countryId, user.address.city);
      const cityId = cityResponse.data.id;

      // İlçe ekleyelim
      const districtResponse = await this.addDistrict(cityId, user.address.district);
      const districtId = districtResponse.data.id;

      // Kullanıcıyı ekleyelim
      const userWithLocation = {
        ...user,
        address: {
          countryId,
          cityId,
          districtId,
          name: user.address.name,
          description: user.address.description,
        },
      };

      const userResponse = await axiosInstance.post('/Users/Add', userWithLocation);
      return userResponse.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error; // Hata durumunda çağırana hatayı iletiyoruz.
    }
  };
}

export default new PersonalInfoService();
