/*import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSelectedSkill,
  addSkillToUser,
  selectSkills,
  selectSkillsLoading,
  selectSkillsError,
} from '../../../../store/slices/mySkillSlice';
import { AddSkillsRequest } from '../../../../models/requests/Skills/addSkillsRequest';
import { Action as AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../../../store/configureStore';
import skillService from '../../../../services/pages/profile/editProfile/skill/skillService'; // API çağrılarını yaptığınız modülün yolu

const MySkill = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const dispatch = useDispatch();
  const skills = useSelector(selectSkills);
  const loading = useSelector(selectSkillsLoading);
  const error = useSelector(selectSkillsError);
  const userId = 123;

  useEffect(() => {
    // API çağrısı ile beceri isimleri ile eşleşen beceri ID'lerini almak için skillService'i kullanın
    const fetchSkillId = async () => {
      try {
        const response = await skillService.getSkillIdByName(selectedSkill);
        setSelectedSkillId(response.data.id);
      } catch (error) {
        console.error('Error fetching skill ID:', error.message);
      }
    };

    if (selectedSkill) {
      fetchSkillId();
    }
  }, [selectedSkill]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSkill(e.target.value);
  };

  const handleSaveClick = async () => {
    if (selectedSkillId !== null) {
      try {
        await (dispatch as ThunkDispatch<RootState, void, AnyAction>)(addSkillToUser(userId, {
          userId: userId.toString(),
          name: selectedSkill,
          id: selectedSkillId,
          imagePath: '',
        }));

        console.log(`Skill '${selectedSkill}' (ID: ${selectedSkillId}) added to user with ID ${userId}`);
      } catch (error:any) {
        console.error('Error adding skill:', error.message);
      }
    }
  };

  return (
    <div className="col-12 col-lg-9" style={{ minHeight: '90vh' }}>
      <div className="row mb-2">
        <div className="col-12 mb-6">
          <label className="input-label-text">Yetkinlik</label>
          <div className="css-b62m3t-container">
            <select
              value={selectedSkill || ''}
              onChange={handleSelectChange}
              className="css-13cymwt-control"
            >
              <option value="" disabled>Seçiniz</option>
              {skills.map(skill => (
                <option key={skill.name} value={skill.name}>
                  {skill.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn" onClick={handleSaveClick}>
          Kaydet
        </button>
        <div className="col-12"></div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {selectedSkill && (
        <div>
          <h2>Seçilen Yetkinlik Detayları</h2>
          <p>Name: {selectedSkill}</p>
           
        </div>
      )}
    </div>
  );
};

export default MySkill;
*/
import React, { useState } from 'react';
import Select from 'react-select';
import Navi from '../../../../components/navbar/Navi';

interface MySkillProps {
  // Define any props you need for your component
}

const MySkill: React.FC<MySkillProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<any>(null); // Initialize state for the selected option

  const options = [
    // Define your options here
    { value: 'C#', label: 'C#' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'Aktif Öğrenme', label: 'Aktif Öğrenme' },
    { value: 'Aktif Dinleme', label: 'Aktif Dinleme' },
    { value: 'SQL', label: 'SQL' },
    { value: 'Algoritma', label: 'Algoritma' },
    { value: 'İletişim', label: 'İletişim' },
    // Add more options as needed
  ];

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  const handleSaveClick = () => {
    // Handle save click logic here
    console.log('Selected Skill:', selectedOption);
  };

  return (
    <div>
      <Navi/>
      <section className='py-6 bg-white'>
        <div className="container">
          <div className="row">
            <div className='col-12 col-lg-3 mb-8 mb-lg-0'>
              <div className="p-2 py-4 mobile-sidebar">
                <a href="/profilim/profilimi-duzenle/kisisel-bilgilerim" className="btn mb-2 text-start w-100 sidebar-link">
                  <span className="personel-informations"></span>
                  <span className="sidebar-text">Kişisel Bilgilerim</span>
                </a>
                <a href="/profilim/profilimi-duzenle/deneyimlerim" className="btn mb-2 text-start w-100 sidebar-link ">
                  <span className="experience"></span>
                  <span className="sidebar-text">Deneyimlerim</span>
                </a>
                <a href="/profilim/profilimi-duzenle/egitim-hayatim" className="btn mb-2 text-start w-100 sidebar-link ">
                  <span className="educations"></span>
                  <span className="sidebar-text">Eğitim Hayatım</span>
                </a>
                <a href="/profilim/profilimi-duzenle/yetkinliklerim" className="btn mb-2 text-start w-100 sidebar-link active-edit">
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
              </div>
            </div>
            <div className='col-12 col-lg-9'>
              <div className="row mb-2">
                <div className="col-12 mb-6">
                  <label className="input-label-text">Yetkinlik</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleChange}
                    placeholder="Seçiniz"
                  />
                </div>
                <button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn col-lg-2 ms-3" onClick={handleSaveClick}>
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MySkill;
