import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import personalInformationService from '../../../../services/pages/profile/editProfile/personalInformation/personalInfoService';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure, selectPersonalInformation, addUser } from '../../../../store/slices/personalInformationSlice';
import { AddUsersRequest } from '../../../../models/requests/Users/addUsersRequest';
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


  const formattedBirthDate = formData.birthDate.toISOString().split('T')[0];


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Eğer doğum tarihi alanı ise ve değer bir tarih formatında değilse
    if (name === 'birthDate' && value) {
      // Tarihi uygun bir biçime dönüştür
      const parsedDate = new Date(value);

      setFormData((prevData) => ({
        ...prevData,
        [name]: parsedDate,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const parseInputDate = (inputDate: string): Date => {
    // Kullanıcı bir tarih seçmemişse veya format yanlışsa, varsayılan olarak şu anki tarihi kullan
    return inputDate ? new Date(inputDate) : new Date();
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
      const newUserResponse = await personalInformationService.add(formData);
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
          type="text"
          value={formData.birthDate instanceof Date ? formData.birthDate.toISOString().split('T')[0] : formData.birthDate}
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
