import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PersonalInformationService from '../../../../services/pages/profile/editProfile/personalInformation/personalInfoService';
import Navi from '../../../../components/navbar/Navi';
import Footer from '../../../../components/footer/footer';
import PhoneNumberValidation from '../../../../components/phoneNumberFlag/phoneNumber';
import { UpdatedUserAllInformationRequest } from '../../../../models/requests/Users/updateUserAllInformationRequest';
import axios from 'axios';
//import CloudinaryUpload from '../../../../components/cloudinary/cloudinary';

const PersonalInformation = () => {

  const user = useSelector((state: any) => state.auth.user);
  const [file, setFile] = useState<File | null>(null); // Use File type for the file state
  const [showFileUploadCard, setShowFileUploadCard] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
  
      // Update the imagePath in the formik state to trigger re-render
      formik.setFieldValue('imagePath', URL.createObjectURL(selectedFile));
  
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        console.error('No file selected for upload.');
        return;
      }

      const formData = new FormData();
      formData.append('formFile', file);

      // Assuming userId is known or stored in state
      const userId = user.id;

      const response = await axios.post(
        `http://localhost:6280/api/FilesUpload/ProfileImage?userId=${userId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Handle the response, e.g., update the UI with the new image URL
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error('Error uploading image:', error);
    }
  };

  const handleNationalIdentityChange = (e: any) => {
    const inputValue = e.target.value;

    // Sadece sayılardan oluşan bir string olup olmadığını kontrol et
    const isValidInput = /^\d+$/.test(inputValue);

    if (inputValue.length <= 11 && isValidInput) {
      // Eğer gelen input 11 haneli ve sadece sayılardan oluşuyorsa değeri güncelle
      formik.setFieldValue('nationalIdentity', inputValue);
    } else {
      // Sadece sayılardan oluşmuyorsa kullanıcıyı uyar
      alert('National Identity yalnızca sayılardan oluşmalıdır ve en fazla 11 haneli olmalıdır.');
    }
  };


  useEffect(() => {
    // Kullanıcı varsa bilgileri çek
    if (user) {
      const userId = user.id;
      PersonalInformationService.getUserInformation(userId);
    }
  }, [user]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      imagePath: '',
      nationalIdentity: '',
      birthDate: null as Date | null,
      phoneNumber: '',
      districtName: '',
      cityName: '',
      countryName: '',
      addressName: '',
      description: '',
    },
    // Form submit işlemi
    onSubmit: async (values) => {
      try {
        // Oluşturulan updatedInfo nesnesine state değerlerini ekleyin
        const updatedInfo: UpdatedUserAllInformationRequest = {
          userId: user.id,
          ...values, // Diğer form değerlerini ekleyin (firstName, lastName vb.)
        };

        // updateUserInformation fonksiyonunu çağırın
        const response = await PersonalInformationService.updateUserInformation(updatedInfo);

        // Başarılı güncellemeyi işleyin (gerekirse Redux'a gönderin)
        console.log('Kullanıcı bilgileri başarıyla güncellendi:', response);

        // Formu sıfırlayın (isteğe bağlı)
      } catch (error) {
        console.error('Kullanıcı bilgilerini güncellerken hata:', error);
        // Hataları işleyin
      }
    },
  }
  );

  useEffect(() => {
    // Kullanıcı bilgileri geldiğinde formu doldur
    if (user) {
      PersonalInformationService.getUserInformation(user.id)
        .then((response) => {
          formik.setValues({
            firstName: response?.firstName || '',
            lastName: response?.lastName || '',
            email: response?.email || '',
            imagePath: response?.imagePath || '',
            nationalIdentity: response?.nationalIdentity || '',
            birthDate: response?.birthDate || null,
            phoneNumber: response?.phoneNumber || '',
            districtName: response?.districtName || '',
            cityName: response?.cityName || '',
            countryName: response?.countryName || '',
            addressName: response?.addressName || '',
            description: response?.description || '',
          });
        })
        .catch((error) => {
          console.error("Error fetching user information:", error);
        });
    }
  }, [user]);



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
                    <div style={{ position: "relative" }}>
                      {formik.values.imagePath && (
                        <>
                          <img
                            src={formik.values.imagePath}
                            alt="Profil"
                            className="rounded-circle"
                            style={{ width: "150px", height: "150px" }}
                          />
                          <div style={{ position: "absolute", bottom: "0", right: "0", transform: "translate(50%, 50%)", cursor: "pointer" }}>
                            <span role="img" aria-label="Fotoğrafı Değiştir" onClick={() => setShowFileUploadCard(true)}>🔄</span>
                          </div>
                        </>
                      )}
                      {!formik.values.imagePath && (
                        <>
                          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", cursor: "pointer" }}>
                            <span role="img" aria-label="Dosya Seç" onClick={() => setShowFileUploadCard(true)}>📁</span>
                          </div>
                        </>
                      )}
                    </div>
                    {!formik.values.imagePath && (
                      <button onClick={() => setShowFileUploadCard(true)}>Fotoğrafı Yükle</button>
                    )}
                  </div>

                  {/* File Upload Card */}
                  {showFileUploadCard && (
                    <div className="file-upload-card">
                      <input type="file" onChange={handleFileChange} />
                      <button onClick={() => { handleUpload(); setShowFileUploadCard(false); }}>Fotoğrafı Yükle</button>
                      <button onClick={() => setShowFileUploadCard(false)}>İptal</button>
                    </div>
                  )}
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">Adınız*</label>
                    <input
                      name="firstName"
                      className="form-control tobeto-input"
                      type="text"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">Soyadınız*</label>
                    <input
                      name="lastName"
                      className="form-control tobeto-input"
                      type="text"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">Telefon Numaranız*</label>
                    <PhoneNumberValidation
                      phoneNumber={formik.values.phoneNumber}
                      onChange={(value) => formik.setFieldValue('phoneNumber', value)}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">Doğum Tarihiniz*</label>
                    <DatePicker
                      selected={formik.values.birthDate}
                      onChange={(date) => formik.setFieldValue('birthDate', date)}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">TC Kimlik No*</label>
                    <input
                      name="nationalIdentity"
                      className="form-control tobeto-input mb-2"
                      type="text"
                      value={formik.values.nationalIdentity}
                      onChange={handleNationalIdentityChange}
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
                      name="countryName"
                      className="form-control tobeto-input"
                      type="text"
                      value={formik.values.countryName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">İl*</label>
                    <input
                      name="cityName"
                      className="form-control tobeto-input"
                      type="text"
                      value={formik.values.cityName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <label className="input-label-text">İlçe*</label>
                    <input
                      name="districtName"
                      className="form-control tobeto-input"
                      type="text"
                      value={formik.values.districtName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-12 mb-6">
                    <label className="input-label-text">Mahalle / Sokak</label>
                    <textarea
                      rows={5}
                      name="addressName"
                      className="form-control tobeto-input"
                      value={formik.values.addressName}
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
                  <button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn" type="submit">
                    Kaydet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
};

export default PersonalInformation;
