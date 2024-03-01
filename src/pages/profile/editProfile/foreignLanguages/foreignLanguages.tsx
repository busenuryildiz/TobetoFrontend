import Navi from '../../../../components/navbar/Navi';
import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import LanguageService from '../../../../services/pages/profile/editProfile/language/languageService';
import { LanguageItem } from '../../../../models/responses/Language/getAllLanguageResponse';
import { LanguageLevelItem } from '../../../../models/responses/LanguageLevel/getAllLanguageLevelResponse';
import { useSelector } from 'react-redux';
import { GetUserLanguageAndLevelResponse } from '../../../../models/responses/UserLanguage/getUserLanguageAndLevelResponse';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



const ForeignLanguages = () => {
  const [languageName, setLanguageName] = useState('');
  const [proficiency, setProficiency] = useState('');
  const [languageList, setLanguageList] = useState<LanguageItem[]>([]);
  const [languageLevelList, setLanguageLevelList] = useState<LanguageLevelItem[]>([]);
  const user = useSelector((state: any) => state.auth.user);
  const [userLanguages, setUserLanguages] = useState<GetUserLanguageAndLevelResponse>({
    from: 0, index: 0, size: 0, count: 0, pages: 0, items: [], hasPrevious: false, hasNext: false,
  });

  useEffect(() => {
    if (user) {
      LanguageService.getAllUserLanguage(user.id)
        .then((data: GetUserLanguageAndLevelResponse) => {
          console.log('User Languages:', data);
          setUserLanguages(data);
        })
        .catch((error) => console.error('Dil bilgileri alınamadı:', error));
    }
  }, [user]);


  const onSave = async () => {
    // Check if user is available
    if (!user) {
      console.error('User information not available');
      return;
    }

    // Assuming language and level are selected from dropdowns
    const newLanguage = {
      userId: user.id,
      languageId: languageList.find((lang) => lang.name === languageName)?.id || 0,
      languageLevelId: languageLevelList.find((level) => level.name === proficiency)?.id || 0,
    };

    try {
      // Add language
      await LanguageService.addLanguage(newLanguage);

      // Refresh user's languages and levels
      const updatedData = await LanguageService.getAllUserLanguage(user.id);
      setUserLanguages(updatedData);

      // Reset form fields
      setLanguageName('');
      setProficiency('');

      console.log('Language added successfully');
      toast.success('Dil başarıyla eklendi!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
    } catch (error) {
      console.error('Error adding language:', error);
      toast.error('Dil eklenirken hata oluştu', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
    }
  };


  useEffect(() => {
    // Fetch language data
    LanguageService.getAllLanguage()
      .then((data) => setLanguageList(data))
      .catch((error) => console.error('Error fetching languages:', error));

    // Fetch language level data
    LanguageService.getAllLanguageLevel()
      .then((data) => setLanguageLevelList(data))
      .catch((error) => console.error('Error fetching language levels:', error));
  }, []);


  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    onSave();
  };

  const handleDeleteLanguage = async (languageId: number) => {
    try {
      // Dil silme işlemi
      await LanguageService.deleteUserLanguage(languageId);

      // Dil silindikten sonra kullanıcının dil bilgilerini güncelleme
      const updatedData = await LanguageService.getAllUserLanguage(user.id);
      setUserLanguages(updatedData);

      console.log('Dil başarıyla silindi');
      toast.success('Dil başarıyla silindi!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
    } catch (error: any) {
      // Axios hatası
      if (axios.isAxiosError(error)) {
        console.error('Dil silinirken bir hata oluştu:', error.response?.status, error.response?.data);
        toast.error('Dil silinirken hata oluştu', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      });
      } else {
        console.error('Dil silinirken bir hata oluştu:', error.message);
        toast.error('Dil silinirken hata oluştu', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      });
      }
    }
  };


  const handleLanguageNameChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguageName(e.target.value);
  };

  const handleProficiencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProficiency(e.target.value);
  };


  return (
    <div>
      <Navi />
      <section className='py-6 bg-white'>
        <div className="container">
          <div className="row">
            <div className='col-12 col-lg-3 mb-8 mb-lg-0'>
              <div className="p-2 py-4 mobile-sidebar">
                <a href="/profilim/profilimi-duzenle/kisisel-bilgilerim" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="personel-informations"></span>
                  <span className="sidebar-text">Kişisel Bilgilerim</span>
                </a>
                <a href="/profilim/profilimi-duzenle/deneyimlerim" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="experience"></span>
                  <span className="sidebar-text">Deneyimlerim</span>
                </a>
                <a href="/profilim/profilimi-duzenle/egitim-hayatim" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="educations"></span>
                  <span className="sidebar-text">Eğitim Hayatim</span>
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
                <a href="/profilim/profilimi-duzenle/yabanci-dil" className="btn mb-2 text-start w-100 sidebar-link active-edit">
                  <span className="languages2"></span>
                  <span className="sidebar-text">Yabancı Dillerim</span>
                </a>
                <a href="/profilim/profilimi-duzenle/ayarlar" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="settings"></span>
                  <span className="sidebar-text">Ayarlar</span>
                </a>
              </div>
            </div>
            <div className='col-12 col-lg-9'>
              <form action="#" onSubmit={handleSave}>
                <div className="row mb-2 mt-4">
                  <div className="col-md-6 col-12">
                    <select
                      name="languageName"
                      className="form-select"
                      aria-label=""
                      onChange={handleLanguageNameChange}
                      value={languageName}
                    >
                      <option value="">Dil Seçiniz*</option>
                      {languageList.map((language) => (
                        <option key={language.id} value={language.name}>
                          {language.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <select
                      name="proficiency"
                      className="form-select"
                      aria-label=""
                      onChange={handleProficiencyChange}
                      value={proficiency}
                    >
                      <option value="">Seviye Seçiniz*</option>
                      {languageLevelList.map((level) => (
                        <option key={level.id} value={level.name}>
                          {level.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary py-2 mt-3 d-inline-block mobil-btn">
                  Kaydet
                </button>
              </form>
              <div className='mt-5'>
                {userLanguages.items.map((language, index) => (
                  <div key={index} className="row">
                    <div className="tobeto-light-bg section-p my-langs">
                      <div className="lang-edit">
                        <div className="lang-info">
                          <div className="lang-title">
                            <div className="d-flex flex-column">
                              <span className="lang-name">{language.languageName}</span>
                              <span className="lang-degree">{language.languageLevelName}</span>
                            </div>
                          </div>
                        </div>
                        <span className="lang-degree-symbol main-lang"></span>
                        <span
                          className="delete-lang"
                          onClick={() => handleDeleteLanguage(language.id)}
                        >
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default ForeignLanguages;
