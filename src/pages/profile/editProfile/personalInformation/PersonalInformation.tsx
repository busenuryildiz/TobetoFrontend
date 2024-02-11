import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/configureStore';
import { login } from '../../../../store/slices/authSlice';
import { AppDispatch } from '../../../../store/configureStore';
import User from '../../../../models/User';
import { setPersonalInformation, setAddresses, setCities, setCountries, setLoading, setError, updateUserInfo, updateAddress } from '../../../../store/slices/personalInformationSlice';
import Footer from '../../../../components/footer/footer';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PersonalInformationService, { UpdateUserRequest, UpdateAddressRequest, UpdatedUserResponse } from '../../../../services/pages/profile/editProfile/personalInformation/personalInfoService';
import Navi from '../../../../components/navbar/Navi';

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.currentUser as User);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const personalInformationService = new PersonalInformationService();

  const formik = useFormik({
    initialValues: {
      name: user?.firstName || '',
      surname: user?.lastName || '',
      phoneNumber: user?.phoneNumber || '',
      birthDate: user?.birthDate ? new Date(user.birthDate) : null,
      identifier: user?.nationalIdentity ? user.nationalIdentity.toString() : '',
      email: user?.email || '',
      country: user?.address?.country || '',
      city: user?.address?.city || '',
      district: user?.address?.district || '',
      address: user?.address?.name || '',
      description: user?.address?.description || '',
    },
    onSubmit: async (values) => {
      try {
        dispatch(setLoading(true));
        const formattedBirthDate = values.birthDate ? new Date(values.birthDate).toISOString() : null;

        if (!formik.isValid) {
          return;
        }

        const updatedUser = await personalInformationService.updateUserInformation({
          id: user?.id || '',
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

        const updatedAddress = await personalInformationService.updateAddress({
          id: user?.address?.id || 0,
          userId: updatedUserResponse.id,
          districtId: parseInt(values.district, 10),
          name: values.address,
          description: values.description,
        });

        dispatch(updateUserInfo(updatedUserResponse));
        dispatch(updateAddress(updatedAddress.data));
      } catch (error) {
        console.error('Kişisel bilgileri kaydetme hatası:', error);
        dispatch(setError('Kişisel bilgileri kaydetme hatası.'));
      } finally {
        dispatch(setLoading(false));
      }
    },
  });

  useEffect(() => {
    const autoLogin = async () => {
      try {
        if (!user && (!loginData.email || !loginData.password)) {
          const response = await fetch('http://localhost:6280/api/login');
          const data = await response.json();
  
          setLoginData({
            email: data.email,
            password: data.password,
          });
  
          const userId = data.userId;
  
          const userInformationResponse = await personalInformationService.getUserInformation(userId);
  
          // Kullanıcı bilgileri burada kullanılabilir
          const loggedInUser = userInformationResponse.data;
          console.log('Kullanıcı Bilgileri:', loggedInUser);
        }
      } catch (error) {
        console.error('Otomatik giriş hatası:', error);
      }
    };
  
    autoLogin();
  }, [dispatch, user, loginData, personalInformationService]);
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



