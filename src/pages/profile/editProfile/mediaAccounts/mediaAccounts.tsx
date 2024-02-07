import Navi from '../../../../components/navbar/Navi';
import React, { useState, FormEvent, ChangeEvent } from 'react';

interface MediaAccountsProps {
  onSave: (socialMedia: string, socialMediaUrl: string) => void;
}

const MediaAccounts: React.FC<MediaAccountsProps> = ({ onSave }) => {
  const [socialMedia, setSocialMedia] = useState('');
  const [socialMediaUrl, setSocialMediaUrl] = useState('');

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    onSave(socialMedia, socialMediaUrl);
  };

  const handleSocialMediaChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSocialMedia(e.target.value);
  };

  const handleSocialMediaUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSocialMediaUrl(e.target.value);
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
                <a href="/profilim/profilimi-duzenle/medya-hesaplarim" className="btn mb-2 text-start w-100 sidebar-link  active-edit">
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
              </div>
            </div>
            <div className='col-12 col-lg-9'>
              <div className="col-12 my-2">
                <form onSubmit={handleSave}>
                  <div className="row mb-2 mt-4">
                    <div className="col-md-4 col-12">
                      <select
                        name="socialMedia"
                        className="form-select"
                        aria-label=""
                        value={socialMedia}
                        onChange={handleSocialMediaChange}
                      >
                        <option value="">Seçiniz*</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Twitter">Twitter</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Behance">Behance</option>
                        <option value="Dribble">Dribble</option>
                        <option value="Github">Github</option>
                      </select>
                    </div>
                    <div className="col-md-8 col-12">
                      <input
                        name="socialMediaUrl"
                        type="text"
                        placeholder="https://"
                        className="form-control"
                        aria-label="Text input with dropdown button"
                        value={socialMediaUrl}
                        onChange={handleSocialMediaUrlChange}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary py-2 mt-3 d-inline-block mobil-btn">
                    Kaydet
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaAccounts;
