import Navi from '../../../../components/navbar/Navi';
import React, { useState, FormEvent, ChangeEvent } from 'react';

interface ForeignLanguagesProps {
  onSave: (languageName: string, proficiency: string) => void;
}

const ForeignLanguages: React.FC<ForeignLanguagesProps> = ({ onSave }) => {
  const [languageName, setLanguageName] = useState('');
  const [proficiency, setProficiency] = useState('');

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    onSave(languageName, proficiency);
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
                      <option value="1">İngilizce</option>
                      <option value="2">Fransızca</option>
                      <option value="3">Almanca</option>
                      <option value="4">Arapça</option>
                      <option value="5">İtalyanca</option>
                      <option value="6">İspanyolca</option>
                      <option value="7">Azerice</option>
                      {/* Diğer dil seçenekleri */}
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
                      <option value="Temel Seviye ( A1 , A2)">Temel Seviye ( A1 , A2)</option>
                      <option value="Orta Seviye ( B1 , B2)">Orta Seviye ( B1 , B2)</option>
                      <option value="İleri Seviye ( C1 , C2)">İleri Seviye ( C1 , C2)</option>
                      <option value="Anadil">Anadil</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary py-2 mt-3 d-inline-block mobil-btn">
                  Kaydet
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForeignLanguages;
