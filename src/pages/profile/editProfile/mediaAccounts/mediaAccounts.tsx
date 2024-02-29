import Navi from '../../../../components/navbar/Navi';
import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { socialMediaService } from '../../../../services/pages/profile/editProfile/socialMedia/socialMediaService';
import { GetAllSocialMediaResponse } from '../../../../models/responses/SocialMedia/getAllSocialMediaResponse';
import { useSelector } from 'react-redux';
import { FaInstagram, FaTwitter, FaLinkedin, FaBehance, FaDribbble, FaGithub } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const renderSocialMediaIcon = (socialMedia: string, iconSize: number) => {
  const iconStyle = {
    fontSize: iconSize,
    margin: '0 5px', // İstediğiniz kadar boşluk ekleyebilirsiniz
  };

  switch (socialMedia) {
    case 'Instagram':
      return <FaInstagram style={iconStyle} />;
    case 'Twitter':
      return <FaTwitter style={iconStyle} />;
    case 'LinkedIn':
      return <FaLinkedin style={iconStyle} />;
    case 'Behance':
      return <FaBehance style={iconStyle} />;
    case 'Dribbble':
      return <FaDribbble style={iconStyle} />;
    case 'Github':
      return <FaGithub style={iconStyle} />;
    default:
      return null;
  }
};




function MediaAccounts() {
  const user = useSelector((state: any) => state.auth.user);
  const [socialMedia, setSocialMedia] = useState('');
  const [socialMediaUrl, setSocialMediaUrl] = useState('');
  const [socialMediaList, setSocialMediaList] = useState<GetAllSocialMediaResponse[]>([]);

  useEffect(() => {
    // Fetch social media accounts for the user when the component mounts
    fetchSocialMediaList();
  }, [user.id]);

  useEffect(() => {
    // Update local storage whenever socialMediaList changes
    localStorage.setItem('socialMediaList', JSON.stringify(socialMediaList));
  }, [socialMediaList]);

  const fetchSocialMediaList = async () => {
    try {
      const storedSocialMediaList = localStorage.getItem('socialMediaList');
      const initialSocialMediaList = storedSocialMediaList ? JSON.parse(storedSocialMediaList) : [];
      setSocialMediaList(initialSocialMediaList);

      const socialMediaListFromAPI = await socialMediaService.getAllSocialMedia(user.id);
      setSocialMediaList(socialMediaListFromAPI);
    } catch (error) {
      console.error('Error fetching social media list:', error);
    }
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Add the new social media account
      await socialMediaService.addSocialMedia({
        userId: user.id,
        socialMedia: socialMedia,
        socialMediaUrl: socialMediaUrl,
      });
      toast.success('Sosyal Medya bilgisi başarıyla eklendi..!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });

      // Fetch the updated social media list after saving
      await fetchSocialMediaList();

      // Clear the input fields after saving
      setSocialMedia('');
      setSocialMediaUrl('');
    } catch (error) {
      console.error('Error saving social media:', error);
     
    }
  };

  const handleDelete = async (socialMediaId: number) => {
    try {
      // Silme işlemi
      await socialMediaService.deleteSocialMedia(socialMediaId);

      // Silinen sosyal medya hesabını listeden kaldırma
      setSocialMediaList((prevList) => prevList.filter((item) => item.id !== socialMediaId));
      toast.success('Sosyal Medya bilgisi başarıyla silindi..!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
    } catch (error) {
      console.error('Error deleting social media:', error);
      toast.error('sosyal medya silinirken hata oluştu', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
    }
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
                        onChange={(e) => setSocialMedia(e.target.value)}
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
                        onChange={(e) => setSocialMediaUrl(e.target.value)}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary py-2 mt-3 d-inline-block mobil-btn">
                    Kaydet
                  </button>
                  <div>
                    {socialMediaList.map((item) => (
                      <div key={item.id} className="col-12 my-2 mt-5">
                        <label className="input-label-text">{item.socialMedia}</label>
                        <div className="section-header tobeto-input">
                        {renderSocialMediaIcon(item.socialMedia, 25)}
                          <input readOnly className="form-control" type="text" value={item.socialMediaUrl} />
                          <button
                            className="btn social-delete"
                            onClick={() => handleDelete(item.id)}
                          ></button>
                          <button className="btn">
                            <i className="fa fa-pencil-square" aria-hidden="true" style={{ fontSize: '25px' }}></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default MediaAccounts;
