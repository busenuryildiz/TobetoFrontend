import React, { ChangeEvent, FormEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navi from '../../../../components/navbar/Navi';

interface FormValues {
    corporationName: string;
    position: string;
    sector: string;
    country: string;
    startDate: Date | null;
    endDate: Date | null;
    continueCurrentJob: boolean;
    description: string;
}

const cities = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya',
    // Add more cities as needed
];

const MyExperiences = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        corporationName: '',
        position: '',
        sector: '',
        country: '',
        startDate: null,
        endDate: null,
        continueCurrentJob: false,
        description: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };


    const handleDateChange = (name: string, date: Date | null) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: date,
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
            <section className='py-6 bg-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-3 mb-8 mb-lg-0'>
                            <div className="p-2 py-4 mobile-sidebar">
                                <a href="/profilim/profilimi-duzenle/kisisel-bilgilerim" className="btn mb-2 text-start w-100 sidebar-link">
                                    <span className="personel-informations"></span>
                                    <span className="sidebar-text">Kişisel Bilgilerim</span>
                                </a>
                                <a href="/profilim/profilimi-duzenle/deneyimlerim" className="btn mb-2 text-start w-100 sidebar-link active-edit">
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
                            </div>
                        </div>
                        <div className='col-12 col-lg-9'>
                            <form action="#" data-hs-cf-bound="true" onSubmit={handleSubmit}>
                                <div className="row mb-2">
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Kurum Adı*</label>
                                        <input
                                            name="corporationName"
                                            className="form-control tobeto-input"
                                            type="text"
                                            placeholder="Kampüs 365"
                                            value={formValues.corporationName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Pozisyon*</label>
                                        <input
                                            name="position"
                                            className="form-control tobeto-input"
                                            type="text"
                                            placeholder="Front-End Developer"
                                            value={formValues.position}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Sektör*</label>
                                        <input
                                            name="sector"
                                            className="form-control tobeto-input"
                                            type="text"
                                            placeholder="Yazılım"
                                            value={formValues.sector}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Şehir Seçiniz*</label>
                                        <select
                                            name="country"
                                            className="form-select tobeto-input"
                                            aria-label=""
                                            value={formValues.country}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">İl Seçiniz</option>
                                            {cities.map((city, index) => (
                                                <option key={index} value={city}>
                                                    {city}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">İş Başlangıcı*</label>
                                        <div className="react-datepicker-wrapper">
                                            <DatePicker
                                                selected={formValues.startDate}
                                                onChange={(date) => handleDateChange('startDate', date)}
                                                placeholderText="gg.aa.yyyy"
                                                dateFormat="dd.MM.yyyy"
                                                className="form-control tobeto-input"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">İş Bitiş*</label>
                                        <div className="react-datepicker-wrapper">
                                            <DatePicker
                                                selected={formValues.endDate}
                                                onChange={(date) => handleDateChange('endDate', date)}
                                                placeholderText="gg.aa.yyyy"
                                                dateFormat="dd.MM.yyyy"
                                                className="form-control tobeto-input"
                                                disabled={formValues.continueCurrentJob}
                                            />
                                        </div>
                                        <label className="d-flex mt-3 text-start">
                                            <input
                                                name="continueCurrentJob"
                                                className="form-check-input me-4"
                                                type="checkbox"
                                                checked={formValues.continueCurrentJob}
                                                onChange={handleInputChange}
                                            />
                                            <small className="text-muted">Çalışmaya Devam Ediyorum</small>
                                        </label>
                                    </div>

                                    <div className="col-12 col-md-12 mb-6">
                                        <label className="input-label-text">İş Açıklaması</label>
                                        <textarea
                                            rows={6}
                                            cols={50}
                                            name="description"
                                            className="form-control tobeto-input"
                                            value={formValues.description}
                                            onChange={handleInputChange}
                                        ></textarea>
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
};

export default MyExperiences;
