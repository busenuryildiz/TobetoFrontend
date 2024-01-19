import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalInfo, addUser } from '../../../../../store/slices/personalInformationSlice';
import personalInfoService from '../../../../../services/personalInfoService';

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state: any) => state.personalInformation);

  const [formData, setFormData] = useState({
    name: personalInfo.name,
    surname: personalInfo.surname,
    phoneNumber: personalInfo.phoneNumber,
    birthday: personalInfo.birthday,
    identifier: personalInfo.identifier,
    email: personalInfo.email,
    country: personalInfo.address?.country || '', 
    city: personalInfo.address?.city || '', 
    district: personalInfo.address?.district || '',
    address: personalInfo.address?.name || '', 
    description: personalInfo.description,
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      name: personalInfo.name,
      surname: personalInfo.surname,
      phoneNumber: personalInfo.phoneNumber,
      birthday: personalInfo.birthday,
      identifier: personalInfo.identifier,
      email: personalInfo.email,
      country: personalInfo.address?.country || '',
      city: personalInfo.address?.city || '',
      district: personalInfo.address?.district || '',
      address: personalInfo.address?.name || '',
      description: personalInfo.description,
    }));
  }, [personalInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newUserResponse = await personalInfoService.addUser(formData);
      const newUser = newUserResponse.data;

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
        <input name="name" className="form-control tobeto-input" type="text" value={formData.name} onChange={handleChange} />

        <label className="input-label-text">Soyadınız*</label>
        <input name="surname" className="form-control tobeto-input" type="text" value={formData.surname} onChange={handleChange} />

        <label className="input-label-text">Telefon Numaranız*</label>
        <input name="phoneNumber" className="form-control tobeto-input" type="text" value={formData.phoneNumber} onChange={handleChange} />

        <label className="input-label-text">Doğum Tarihiniz*</label>
        <input name="birthday" className="form-control tobeto-input" type="text" value={formData.birthday} onChange={handleChange} />

        <label className="input-label-text">TC Kimlik No*</label>
        <input name="identifier" className="form-control tobeto-input" type="text" value={formData.identifier} onChange={handleChange} />

        <label className="input-label-text">E-Posta</label>
        <input name="email" className="form-control tobeto-input" type="text" value={formData.email} onChange={handleChange} />

        <label className="input-label-text">Ülke*</label>
        <input name="country" className="form-control tobeto-input" type="text" value={formData.country} onChange={handleChange} />

        <label className="input-label-text">İl*</label>
        <input name="city" className="form-control tobeto-input" type="text" value={formData.city} onChange={handleChange} />

        <label className="input-label-text">İlçe*</label>
        <input name="district" className="form-control tobeto-input" type="text" value={formData.district} onChange={handleChange} />

        <label className="input-label-text">Mahalle/Sokak</label>
        <input name="address" className="form-control tobeto-input" type="text" value={formData.address} onChange={handleChange} />
      
        <button type="submit" className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn">
          Kaydet
        </button>
      </div> 
    </form>
  );
}

export default PersonalInformation;
