import React, { ChangeEvent, FormEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navi from '../../../../components/navbar/Navi';

interface FormValues {
    EducationStatus: string;
    University: string;
    Department: string;
    StartYear: Date | null;
    GraduationYear: Date | null;
    Continuing: boolean;
}

const initialFormValues: FormValues = {
    EducationStatus: '',
    University: '',
    Department: '',
    StartYear: null,
    GraduationYear: null,
    Continuing: false,
};

const EducationLife = () => {
    const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

    const handleChange = (
        e: ChangeEvent<
            | HTMLInputElement
            | HTMLSelectElement
            | HTMLTextAreaElement
            | { value: Date | null }
            | { checked: boolean }
        >,
        name: string
    ) => {
        let value: Date | null | boolean;

        if ('target' in e) {
            if ('checked' in e.target) {
                value = e.target.checked;
            } else {
                const inputValue = e.target.value;
                value = inputValue === 'on' ? true : inputValue === 'off' ? false : inputValue ? new Date(inputValue) : null;
            }
        } else {
            value = null;
        }

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formValues);
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
                            <form data-hs-cf-bound="true" onSubmit={handleSubmit}>
                                <div className="row mb-2">
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Eğitim Durumu*</label>
                                        <select
                                            name="EducationStatus"
                                            className="form-select tobeto-input"
                                            aria-label=""
                                            value={formValues.EducationStatus}
                                            onChange={(e) => handleChange(e, 'EducationStatus')}
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
                                            name="University"
                                            className="form-control tobeto-input"
                                            type="text"
                                            placeholder="Kampüs 365"
                                            value={formValues.University}
                                            onChange={(e) => handleChange(e, 'University')}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Bölüm*</label>
                                        <input
                                            name="Department"
                                            className="form-control tobeto-input"
                                            type="text"
                                            placeholder="Yazılım"
                                            value={formValues.Department}
                                            onChange={(e) => handleChange(e, 'Department')}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Başlangıç Yılı*</label>
                                        <div className="react-datepicker-wrapper">
                                            <DatePicker
                                                selected={formValues.StartYear}
                                                onChange={(date) => setFormValues((prevValues) => ({ ...prevValues, StartYear: date }))}
                                                placeholderText="Başlangıç Yılınızı Seçiniz"
                                                dateFormat="yyyy"
                                                className="form-control tobeto-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Mezuniyet Yılı*</label>
                                        <div className="react-datepicker-wrapper">
                                            <DatePicker
                                                selected={formValues.GraduationYear}
                                                onChange={(date) => setFormValues((prevValues) => ({ ...prevValues, GraduationYear: date }))}
                                                placeholderText="Mezuniyet Yılınızı Seçiniz"
                                                dateFormat="yyyy"
                                                className="form-control tobeto-input"
                                                disabled={formValues.Continuing}
                                            />
                                        </div>
                                        <label className="d-flex mt-3 text-start">
                                            <input
                                                name="checkbox"
                                                className="form-check-input me-4"
                                                type="checkbox"
                                                checked={formValues.Continuing}
                                                onChange={(e) => setFormValues((prevValues) => ({ ...prevValues, Continuing: e.target.checked }))}
                                            />
                                            <small className="text-muted">Devam Ediyorum</small>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn" type="submit">
                                    Kaydet
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EducationLife;
