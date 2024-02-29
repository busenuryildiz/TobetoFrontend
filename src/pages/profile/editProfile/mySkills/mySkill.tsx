import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Navi from '../../../../components/navbar/Navi';
import { mySkillService } from '../../../../services/pages/profile/editProfile/skill/skillService';
import { DeleteSkillsResponse } from '../../../../models/responses/Skills/deleteSkillsResponse';
import { GetAllStudentSkillsResponse } from '../../../../models/responses/Students/getAllStudentSkillsResponse';
import { AddStudentSkillsbyUserIdRequest } from '../../../../models/requests/StudentSkill/addStudentSkillByUserIdRequest';
import { useSelector } from 'react-redux';
import { GetAllSkillsResponse, SkillItem } from '../../../../models/responses/Skills/getAllSkillsResponse';
import { GetStudentSkillsByUserIdResponse } from '../../../../models/responses/StudentSkill/getStudentSkillsByUserIdResponse';
import { ToastContainer, toast } from 'react-toastify';


const MySkill = () => {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const user = useSelector((state: any) => state.auth.user);
  const [skills, setSkills] = useState<GetStudentSkillsByUserIdResponse[]>([]);
  const [dropdownOptions, setDropdownOptions] = useState<SkillItem[]>([]);

  useEffect(() => {
    const storedSkills = localStorage.getItem(`localSkills_${user.id}`);
    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
    }
    const fetchSkills = async () => {
      try {
        const skillsResponse = await mySkillService.getAllSkills();
        setDropdownOptions(skillsResponse);
      } catch (error: any) {
        console.error('Error fetching skills:', error.message);
      }
    };
    fetchSkills();
  }, [user]);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  const handleSaveClick = async () => {
    try {
      if (selectedOption) {
        const newSkill: AddStudentSkillsbyUserIdRequest = {
          userId: user.id,
          skillId: selectedOption.value,
        };

        // Yeni beceriyi ekleyin
        const response = await mySkillService.addSkill(newSkill);
        console.log(`Skill '${selectedOption.label}' (ID: ${response.id}) başarıyla eklendi.`);
        toast.success('Yetenek başarıyla eklendi!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      });
        // Güncellenmiş beceri listesini almak için
        const updatedSkills = await mySkillService.getAllStudentSkills(user.id);

        // State'i güncelleyin
        setSkills(updatedSkills);

        localStorage.setItem(`localSkills_${user.id}`, JSON.stringify(updatedSkills));
      }
    } catch (error: any) {
      console.error('Yetenek eklenirken hata oluştu:', error.message);
      toast.error('Yetenek eklenirken hata oluştu', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleDeleteSkill = async (studentSkillId: number) => {
    try {
      await mySkillService.deleteSkill(studentSkillId);

      const updatedSkills = await mySkillService.getAllStudentSkills(user.id);
      toast.error('Yetenek başarıyla silindi!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
      // State'i güncelleyin
      setSkills(updatedSkills)

      localStorage.setItem(`localSkills_${user.id}`, JSON.stringify(updatedSkills));

    } catch (error: any) {
      console.error('Yetenek silinirken hata oluştu:', error.message);
      toast.error('Yetenek silinirken hata oluştu', {
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
                    options={dropdownOptions.map(option => ({ value: option.id, label: option.name }))}
                    value={selectedOption}
                    onChange={handleChange}
                    placeholder="Seçiniz"
                  />
                </div>
                <button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn col-lg-2 ms-3" onClick={handleSaveClick}>
                  Kaydet
                </button>
              </div>
              <ul className="list-group card-text ">
                {Array.isArray(skills) &&
                  skills.map((skill) => (
                    <li key={skill.studentSkillId} className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-0">{skill.studentSkillName}</h6>
                        </div>
                        <button className="btn btn-danger" onClick={() => handleDeleteSkill(skill.studentSkillId)}>
                          Sil
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default MySkill;

