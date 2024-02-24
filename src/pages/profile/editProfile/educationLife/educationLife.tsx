import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { EducationLifeService } from '../../../../services/pages/profile/editProfile/educationInformation/educationLifeService';
import Navi from '../../../../components/navbar/Navi';
import Footer from '../../../../components/footer/footer';
import { AddEducationLifeRequest } from '../../../../models/requests/EducationLife/addEducationLifeRequest';
import { AddEducationLifeResponse } from '../../../../models/responses/EducationLife/addEducationLifeResponse';
import { UserEducationInformationResponse } from '../../../../models/responses/Users/userEducationInformationResponse';

const EducationLife = () => {
    const user = useSelector((state: any) => state.auth.user);
    const [educationLifeList, setEducationLifeList] = useState<UserEducationInformationResponse[]>([]);

    const formik = useFormik({
        initialValues: {
            status: '',
            university: '',
            faculty: '',
            beginningYear: null as Date | null,
            graduationYear: null as Date | null,
            isContinue: false,
        },
        // Form submit işlemi
        onSubmit: async (values) => {
            try {
                // Oluşturulan newEducation nesnesine state değerlerini ekleyin
                const newEducation: AddEducationLifeRequest = {
                    status: values.status,
                    university: values.university,
                    faculty: values.faculty,
                    beginningYear: values.beginningYear,
                    graduationYear: values.graduationYear,
                    isContinue: values.isContinue,
                    userId: user.id,
                };


                const response = await EducationLifeService.addEducationLife(newEducation);

                console.log('Eğitim bilgisi başarıyla eklendi:', response);

                // Formu sıfırlayın (isteğe bağlı)
                formik.resetForm();

                // Eğitim bilgilerini güncelle
                const updatedEducationList = await EducationLifeService.getAllEducationLife(user.id);
                console.log('Updated Education List:', updatedEducationList);
                setEducationLifeList(updatedEducationList);
                formik.resetForm();
            } catch (error) {
                console.error('Eğitim bilgisi eklenirken hata:', error);
            }
        }

    });
    useEffect(() => {
        const storedEducation = localStorage.getItem('educationLifeList');
        if (storedEducation) {
          try {
            setEducationLifeList(JSON.parse(storedEducation));
          } catch (error) {
            console.error('Error parsing storedEducation:', error);
          }
        }
      }, []);
      

    useEffect(() => {
        if (user) {
            const userId = user.id;
    
            // Eğitim bilgilerini çek
            EducationLifeService.getAllEducationLife(userId)
                .then((educationList) => {
                    console.log('Education List:', educationList);
                    setEducationLifeList(educationList);
                })
                .catch((error) => console.error('Eğitim bilgileri çekilirken hata:', error));
        }
    }, [user]);
    
    useEffect(() => {
        console.log('Updated Education List:', educationLifeList);
        localStorage.setItem('educationLifeList', JSON.stringify(educationLifeList));
      }, [educationLifeList]);
      

    

    const handleDelete = async (educationId: number) => {
        try {
            await EducationLifeService.deleteEducationLife(educationId);
            console.log("Deneyim Başarı ile Silindi.");
            setEducationLifeList((prevEducation) =>
                prevEducation.filter((edc) => edc.id !== educationId)
            );
        } catch (error) {
            console.error('Deneyim silme sırasında hata:', error);
        }
    };

    return (
        <div>
            <Navi />
            <section className='py-6 bg-white' >
                <div className='container'>
                    <div className='row'>
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
                                <a href="/profilim/profilimi-duzenle/egitim-hayatim" className="btn mb-2 text-start w-100 sidebar-link active-edit">
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
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row mb-2">
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Eğitim Durumu*</label>
                                        <select
                                            name="status"
                                            className="form-select tobeto-input"
                                            aria-label=""
                                            value={formik.values.status}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Seviye Seçiniz</option>
                                            <option value="Lisans">Lisans</option>
                                            <option value="Ön Lisans">Ön Lisans</option>
                                            <option value="Yüksek Lisans">Yüksek Lisans</option>
                                            <option value="Doktora">Doktora</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Üniversite*</label>
                                        <input
                                            name="university"
                                            className="form-control tobeto-input"
                                            type="text"
                                            value={formik.values.university}
                                            onChange={formik.handleChange}
                                        />

                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Bölüm*</label>
                                        <input
                                            name="faculty"
                                            className="form-control tobeto-input"
                                            type="text"
                                            value={formik.values.faculty}
                                            onChange={formik.handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Başlangıç Yılı*</label>
                                        <div className="react-datepicker-wrapper">
                                            <DatePicker
                                                selected={formik.values.beginningYear}
                                                onChange={(date) => formik.setFieldValue('beginningYear', date)}
                                                placeholderText="Başlangıç Yılınızı Seçiniz"
                                                dateFormat="dd.MM.yyyy"
                                                className="form-control tobeto-input"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Mezuniyet Yılı*</label>
                                        <div className="react-datepicker-wrapper">
                                            <DatePicker
                                                selected={formik.values.graduationYear}
                                                onChange={(date) => formik.setFieldValue('graduationYear', date)}
                                                placeholderText="Mezuniyet Yılınızı Seçiniz"
                                                dateFormat="dd.MM.yyyy"
                                                className="form-control tobeto-input"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                            />
                                        </div>
                                        <label className="d-flex mt-3 text-start">
                                            <input
                                                name="isContinue"
                                                className="form-check-input me-4"
                                                type="checkbox"
                                                checked={formik.values.isContinue}
                                                onChange={formik.handleChange}
                                            />
                                            <small className="text-muted">Devam Ediyorum</small>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn" type="submit">
                                    Kaydet
                                </button>
                            </form>
                            <div>
                            <ul className="list-group card-text ">
                                    {Array.isArray(educationLifeList) &&
                                        educationLifeList.map((education) => (
                                            <li key={education.id} className="list-group-item">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h6 className="mb-0">{education.university}</h6>
                                                        <p className="mb-0">{`${education.faculty} | ${education.isContinue ? 'Devam Ediyor': ''}`}</p>
                                                        <p className="mb-0">{`${education.beginningYear} - ${education.graduationYear}`}</p>
                                                    </div>
                                                    <button className="btn btn-danger" onClick={() => handleDelete(education.id)}>
                                                        Sil
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EducationLife;




