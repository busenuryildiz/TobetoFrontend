/*import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import personalInformationService from '../../../../services/pages/profile/editProfile/personalInformation/personalInfoService';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure, selectPersonalInformation, addUser } from '../../../../store/slices/personalInformationSlice';
import { AddUsersRequest } from '../../../../models/requests/Users/AddUsersRequest';
import { AddUserAddressRequest } from '../../../../models/requests/Address/addUserAddressRequest';
import { AddUsersResponse } from '../../../../models/responses/Users/addUsersResponse';


const PersonalInformation = () => {
  const dispatch = useDispatch();
  const personalInfo = useSelector(selectPersonalInformation);

  const [formData, setFormData] = useState<AddUsersRequest>({
    firstName: personalInfo?.firstName || '',
    lastName: personalInfo?.lastName || '',
    address: {
      districtId: personalInfo?.address?.districtId || null,
      cityId: personalInfo?.address?.cityId || null,
      countryId: personalInfo?.address?.countryId || null,
      name: personalInfo?.address?.name || '',
      description: personalInfo?.address?.description || '',
    },
    email: personalInfo?.email || '',
    password: personalInfo?.password || '' || null,
    nationalIdentity: personalInfo?.nationalIdentity || '',
    birthDate: personalInfo?.birthDate || new Date(),
    phoneNumber: personalInfo?.phoneNumber || '',
  });

  useEffect(() => {
    // Form verilerini güncelleme
    setFormData((prevData) => ({
      ...prevData,
      firstName: personalInfo?.firstName || '',
      lastName: personalInfo?.lastName || '',
      address: {
        districtId: personalInfo?.address?.districtId || null,
        cityId: personalInfo?.address?.cityId || null,
        countryId: personalInfo?.address?.countryId || null,
        name: personalInfo?.address?.name || '',
        description: personalInfo?.address?.description || '',
      },
      email: personalInfo?.email || '',
      password: personalInfo?.password || '',
      nationalIdentity: personalInfo?.nationalIdentity || '',
      birthDate: personalInfo?.birthDate || new Date(),
      phoneNumber: personalInfo?.phoneNumber || '',
    }));
  }, [personalInfo]);


  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // Eğer doğum tarihi alanı ise ve değer bir tarih formatında değilse
    if (name === 'birthDate' && value) {
      // Tarihi uygun bir biçime dönüştür
      const parsedDate = new Date(value);
  
      // Eğer dönüştürme başarılı değilse veya değer "Invalid Date" ise
      if (isNaN(parsedDate.getTime()) || value === 'Invalid Date') {
        setFormError('Geçerli bir tarih girin.'); // Hata mesajını set et
      } else {
        setFormError(null); // Hata mesajını sıfırla
  
        setFormData((prevData) => ({
          ...prevData,
          birthDate: parsedDate, // Doğru olan burada parsedDate'i kullanmak
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  const handleChangeAddress = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newUserResponse = await personalInformationService.add({
        ...formData,
      });
      const newUser: AddUsersResponse = newUserResponse.data;

      dispatch(addUser(newUser));

      console.log('Yeni kullanıcı başarıyla eklendi:', newUser);
    } catch (error) {
      console.error('İşlem hatası:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-12 col-md-6 mb-6">
        <label className="input-label-text">Adınız*</label>
        <input
          name="firstName"
          className="form-control tobeto-input"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label className="input-label-text">Soyadınız*</label>
        <input
          name="lastName"
          className="form-control tobeto-input"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label className="input-label-text">Telefon Numaranız*</label>
        <input
          name="phoneNumber"
          className="form-control tobeto-input"
          type="text"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label className="input-label-text">Doğum Tarihiniz*</label>
        <input
  name="birthDate"
  className="form-control tobeto-input"
  type="date"
  value={formData.birthDate instanceof Date ? formData.birthDate.toISOString().split('T')[0] : ''}
  onChange={handleChange}
  required
/>

        <label className="input-label-text">TC Kimlik No*</label>
        <input
          name="nationalIdentity"
          className="form-control tobeto-input"
          type="text"
          value={formData.nationalIdentity}
          onChange={handleChange}
          required
        />

        <label className="input-label-text">E-Posta</label>
        <input
          name="email"
          className="form-control tobeto-input"
          type="text"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="input-label-text">Ülke*</label>
        <input
          name="country"
          className="form-control tobeto-input"
          type="text"
          value={formData.address.countryId || ''}
          onChange={(e) => handleChangeAddress('countryId', e.target.value)}
          required
        />

        <label className="input-label-text">İl*</label>
        <input
          name="city"
          className="form-control tobeto-input"
          type="text"
          value={formData.address.cityId || ''}
          onChange={(e) => handleChangeAddress('cityId', e.target.value)}
          required
        />

        <label className="input-label-text">İlçe*</label>
        <input
          name="district"
          className="form-control tobeto-input"
          type="text"
          value={formData.address.districtId || ''}
          onChange={(e) => handleChangeAddress('districtId', e.target.value)}
          required
        />

        <label className="input-label-text">Mahalle/Sokak</label>
        <input
          name="address"
          className="form-control tobeto-input"
          type="text"
          value={formData.address?.name || ''}
          onChange={(e) => handleChangeAddress('name', e.target.value)}
        />

        <button type="submit" className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn">
          Kaydet
        </button>
      </div>
    </form>
  );
}

export default PersonalInformation;
*/import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Navi from '../../../../components/navbar/Navi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/configureStore';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PersonalInformationService, {
  GetListUserResponse,
  GetListAddressResponse,
  UpdateUserRequest,
  CreateAddressRequest,
  UpdateAddressRequest,
  UpdatedUserResponse,
} from '../../../../services/pages/profile/editProfile/personalInformation/personalInfoService';
import {
  setPersonalInformation,
  setAddresses,
  setCities,
  setCountries,
  setLoading,
  setError,
  updateUserInfo,
  addAddress,
  updateAddress,
} from '../../../../store/slices/personalInformationSlice';
import Footer from '../../../../components/footer/footer';

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.personalInformation.user);

  const personalInformationService = new PersonalInformationService();

  const [birthDate, setBirthDate] = useState<Date | null>(new Date());

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'birthDate' && value) {
      const parsedDate = new Date(value);

      if (!isNaN(parsedDate.getTime())) {
        dispatch(setError(null)); // setFormError -> dispatch(setError(null))
        formik.setFieldValue('birthDate', parsedDate); // setFormData yerine formik.setFieldValue kullanıldı
      } else {
        dispatch(setError('Geçerli bir tarih girin.'));
      }
    } else {
      formik.handleChange(event); // setFormData -> formik.handleChange
    }
  };


  // useFormik hook'unu kullanarak formun başlangıç değerlerini ve submit fonksiyonunu tanımla
  const formik = useFormik({
    initialValues: {
      name: user?.firstName ?? '',
      surname: user?.lastName ?? '',
      phoneNumber: user?.phoneNumber ?? '',
      birthDate: user?.birthDate ? new Date(user.birthDate) : null,
      identifier: user?.nationalIdentity ? user.nationalIdentity.toString() : '',
      email: user?.email ?? '',
      country: user?.address?.country ?? '',
      city: user?.address?.city ?? '',
      district: user?.address?.district ?? '',
      address: user?.address?.name ?? '',
      description: user?.address?.description ?? '',
    },
    onSubmit: async (values) => {
      try {
        dispatch(setLoading(true));
        const formattedBirthDate = values.birthDate
          ? new Date(values.birthDate).toISOString()
          : null;
        // Form geçerli değilse işlem yapma
        if (!formik.isValid) {
          return;
        }

        // Kullanıcı bilgilerini güncelle veya ekle
        const updatedUser = user
          ? await personalInformationService.updateUserInformation({
            id: user.id,
            firstName: values.name,
            lastName: values.surname,
            email: values.email,
            imagePath: '',
            password: '',
            nationalIdentity: values.identifier.toString(),
            birthDate: formattedBirthDate,
            phoneNumber: ''
          })
          : await personalInformationService.addUser({
            firstName: values.name,
            lastName: values.surname,
            email: values.email,
            imagePath: '',
            password: '',
            nationalIdentity: values.identifier.toString(),
            birthDate: formattedBirthDate,
            phoneNumber: values.phoneNumber,
          });

        const updatedUserResponse: UpdatedUserResponse = {
          id: updatedUser.data.id,
          firstName: updatedUser.data.firstName,
          lastName: updatedUser.data.lastName,
          email: updatedUser.data.email,
          nationalIdentity: updatedUser.data.nationalIdentity,
          birthDate: updatedUser.data.birthDate,
          phoneNumber: updatedUser.data.phoneNumber,
        };

        // Kullanıcının adres bilgisini güncelle veya ekle
        const updatedAddress = await personalInformationService.updateAddress({
          id: user?.address?.id ?? 0, // Kullanıcının adres ID'si varsa kullan, yoksa 0 olarak belirle
          userId: updatedUserResponse.id,
          districtId: parseInt(values.district, 10),
          name: values.address,
          description: values.description, // description bilgisini ekle
          // Diğer adres bilgilerini ekleyin
        });

        // Redux store'u güncelle
        dispatch(updateUserInfo(updatedUserResponse));
        dispatch(updateAddress(updatedAddress.data));
      } catch (error) {
        console.error('An error occurred while saving personal information:', error);
        dispatch(setError('An error occurred while saving personal information.'));
      } finally {
        dispatch(setLoading(false));
      }
    },
  });

  // Sayfa yüklendiğinde verileri getir
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        // Kullanıcı bilgilerini getir
        if (!user) {
          const userResponse = await personalInformationService.getUserInformation('c3477816-e13e-412a-c9fb-08dc258602df');
          if (isMounted) {
            dispatch(setPersonalInformation(userResponse.data));
          }
        }

        // Adresleri getir
        const addressesResponse = await personalInformationService.getAllAddresses();
        if (isMounted) {
          dispatch(setAddresses(addressesResponse.data));
        }

        // Şehirleri getir
        const citiesResponse = await personalInformationService.getAllCities();
        if (isMounted) {
          dispatch(setCities(citiesResponse.data));
        }

        // Ülkeleri getir
        const countriesResponse = await personalInformationService.getAllCountries();
        if (isMounted) {
          dispatch(setCountries(countriesResponse.data));
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
        dispatch(setError('An error occurred while fetching data.'));
      } finally {
        if (isMounted) {
          dispatch(setLoading(false));
        }
      }
    };

    if (user && formik.isValid) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, user, formik.isValid, formik.setValues]);

  // Kullanıcı bilgileri değiştiğinde formu güncelle
  useEffect(() => {
    if (user) {
      formik.setValues({
        name: user.firstName,
        surname: user.lastName,
        phoneNumber: user.phoneNumber,
        birthDate: user.birthDate ?? '',
        identifier: user.nationalIdentity.toString(),
        email: user.email,
        country: user.address?.country ?? '',
        city: user.address?.city ?? '',
        district: user.address?.district ?? '',
        address: user.address?.name ?? '',
        description: user.address?.description ?? '',
      });
    }
  }, [user, formik]);


  return (
    <div>
      <Navi />
      <section className='py-5 bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-3 mb-8 mb-lg-0'>
              <div className="p-2 py-4 mobile-sidebar">
                <a href="/profilim/profilimi-duzenle/kisisel-bilgilerim" className="btn mb-2 text-start w-100 sidebar-link active-edit">
                  <span className="personel-informations"></span>
                  <span className="sidebar-text">Kişisel Bilgilerim</span>
                </a>
                <a href="/profilim/profilimi-duzenle/deneyimlerim" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="experience"></span>
                  <span className="sidebar-text">Deneyimlerim</span>
                </a>
                <a href="/profilim/profilimi-duzenle/egitim-hayatim" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="educations"></span>
                  <span className="sidebar-text">Eğitim Hayatım</span>
                </a>
                <a href="/profilim/profilimi-duzenle/yetkinliklerim" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="abilities"></span>
                  <span className="sidebar-text">Yetkinliklerim</span>
                </a>
                <a href="/profilim/profilimi-duzenle/sertifikalarim" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="certificates"></span>
                  <span className="sidebar-text">Sertifikalarım</span>
                </a>
                <a href="/profilim/profilimi-duzenle/medya-hesaplarim" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="languages"></span>
                  <span className="sidebar-text">Medya Hesaplarım</span>
                </a>
                <a href="/profilim/profilimi-duzenle/yabanci-dil" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="languages2"></span>
                  <span className="sidebar-text">Yabancı Dillerim</span>
                </a>
                <a href="/profilim/profilimi-duzenle/ayarlar" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="settings"></span>
                  <span className="sidebar-text">Ayarlar</span>
                </a>
                {/* Diğer sidebar linkleri buraya ekleyin */}
              </div>
            </div>
            <div className='col-12 col-lg-9'>
              <form onSubmit={formik.handleSubmit}>
                <div className="row mb-2">
                  <div className="col-12 mb-6 text-center">
                    <label className="input-label-text">Profil Fotoğrafı</label>
                    <input
                      name="profilePicture"
                      className="form-control tobeto-input"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">Adınız*</label>
                    <input
                      name="name"
                      className="form-control tobeto-input"
                      type="text"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">Soyadınız*</label>
                    <input
                      name="surname"
                      className="form-control tobeto-input"
                      type="text"
                      value={formik.values.surname}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">Telefon Numaranız*</label>
                    <input
                      name="phoneNumber"
                      className="form-control tobeto-input"
                      type="tel"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">Doğum Tarihiniz*</label>
                    <DatePicker
                      selected={formik.values.birthDate}
                      onChange={(date) => {
                        formik.setFieldValue('birthDate', date);
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">TC Kimlik No*</label>
                    <input
                      name="identifier"
                      className="form-control tobeto-input mb-2"
                      type="number"
                      value={formik.values.identifier}
                      onChange={formik.handleChange}
                    />
                    <span className="text-danger" style={{ fontStyle: 'italic', fontSize: '14px' }}>
                      *Aboneliklerde fatura için doldurulması zorunlu alan
                    </span>
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">E-posta</label>
                    <input
                      name="email"
                      className="form-control tobeto-input"
                      type="text"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 mb-6">
                    <label className="input-label-text">Ülke*</label>
                    <input
                      name="country"
                      className="form-control tobeto-input"
                      type="text"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">İl*</label>
                    <input
                      name="city"
                      className="form-control tobeto-input"
                      type="text"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">İlçe*</label>
                    <input
                      name="district"
                      className="form-control tobeto-input"
                      type="text"
                      value={formik.values.district}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 mb-6">
                    <label className="input-label-text">Mahalle / Sokak</label>
                    <textarea
                      rows={5}
                      name="address"
                      className="form-control tobeto-input"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12 mb-6">
                    <label className="input-label-text">Açıklama</label>
                    <textarea
                      rows={5}
                      name="description"
                      className="form-control tobeto-input"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                    ></textarea>
                  </div>
                  {/* Diğer input alanlarını buraya ekleyin */}
                </div>
                <button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn" type="submit">
                  Kaydet
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  );
};

export default PersonalInformation;



