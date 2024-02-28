import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navi from '../../../../components/navbar/Navi';
import { MyExperienceService } from '../../../../services/pages/profile/editProfile/experience/myExperienceService';
import { useSelector } from 'react-redux';
import { UserExperiencesResponse } from '../../../../models/responses/Users/userExperienceResponse';
import { AddUserExperiencesRequest } from '../../../../models/requests/UserExperience/addUserExperiencesRequest';
import { ToastContainer, toast } from 'react-toastify';

const cities = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya',
    'Ankara', 'Antalya', 'Artvin', 'Aydın', 'Balıkesir',
    'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur',
    'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli',
    'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum',
    'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkâri',
    'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir',
    'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir',
    'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa',
    'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir',
    'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun',
    'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat',
    'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van',
    'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman',
    'Kırıkkale', 'Batman', 'Şırnak', 'Bartın', 'Ardahan',
    'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
];

const MyExperiences = () => {
    const user = useSelector((state: any) => state.auth.user);
    const [userExperiences, setUserExperiences] = useState<UserExperiencesResponse[]>([]);
    const initialFormValues: AddUserExperiencesRequest = {
        userId: user?.id || '',
        establishmentName: '',
        position: '',
        sector: '',
        city: '',
        workBeginDate: new Date(),
        workEndDate: new Date(),
        description: '',
    };
    const [formValues, setFormValues] = useState<AddUserExperiencesRequest>(initialFormValues);

    useEffect(() => {
        const storedExperiences = localStorage.getItem(`userExperiences_${user?.id}`);
        if (storedExperiences) {
            setUserExperiences(JSON.parse(storedExperiences));
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            localStorage.setItem(`userExperiences_${user.id}`, JSON.stringify(userExperiences));
        }
    }, [user, userExperiences]);
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formValues.workBeginDate > formValues.workEndDate) {
            toast.error('Başlangıç tarihi, bitiş tarihinden büyük olamaz.', {
                position: 'top-right',
            });
            return;
        }

        try {
            const newExperience = await MyExperienceService.addUserExperience(
                formValues as AddUserExperiencesRequest
            );
            toast.success('Deneyim Başarı ile Eklendi.', {
                position: 'top-right',
            });
            setUserExperiences((prevExperiences) => {
                const updatedExperiences = Array.isArray(prevExperiences)
                    ? [...prevExperiences, newExperience]
                    : [newExperience];

                return updatedExperiences;
            });

            setFormValues(initialFormValues);
        } catch (error) {
            toast.error('Form gönderimi sırasında hata:', {
                position: 'top-right',
            });
        }
    };


    const handleDelete = async (experienceId: number) => {
        try {
            await MyExperienceService.deleteUserExperience(experienceId);
            toast.success('Deneyim Başarı ile Silindi.', {
                position: 'top-right',
            });
            setUserExperiences((prevExperiences) =>
                prevExperiences.filter((exp) => exp.id !== experienceId)
            );
        } catch (error) {
            toast.error('Deneyim silme sırasında hata:', {
                position: 'top-right',
            });
        }
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
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-2">
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Kurum Adı*</label>
                                        <input
                                            name="establishmentName"
                                            className="form-control tobeto-input"
                                            type="text"
                                            value={formValues.establishmentName}
                                            onChange={handleInputChange}
                                            placeholder="Kampüs 365"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Pozisyon*</label>
                                        <input
                                            name="position"
                                            className="form-control tobeto-input"
                                            type="text"
                                            value={formValues.position}
                                            onChange={handleInputChange}
                                            placeholder="Front-End Developer"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Sektör*</label>
                                        <input
                                            name="sector"
                                            className="form-control tobeto-input"
                                            type="text"
                                            value={formValues.sector}
                                            onChange={handleInputChange}
                                            placeholder="Yazılım"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">Şehir Seçiniz*</label>
                                        <select
                                            name="city"
                                            className="form-select tobeto-input"
                                            value={formValues.city}
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
                                                selected={formValues.workBeginDate || undefined}
                                                onChange={(date) => handleDateChange('workBeginDate', date)}
                                                placeholderText="gg.aa.yyyy"
                                                dateFormat="dd.MM.yyyy"
                                                className="form-control tobeto-input"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                            />

                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-6">
                                        <label className="input-label-text">İş Bitiş*</label>
                                        <div className="react-datepicker-wrapper">
                                            <DatePicker
                                                selected={formValues.workEndDate}
                                                onChange={(date) => handleDateChange('workEndDate', date)}
                                                placeholderText="gg.aa.yyyy"
                                                dateFormat="dd.MM.yyyy"
                                                className="form-control tobeto-input"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                            />

                                        </div>

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
                            <div>
                                <ul className="list-group card-text ">
                                    {Array.isArray(userExperiences) &&
                                        userExperiences.map((experience) => (
                                            <li key={experience.id} className="list-group-item">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h6 className="mb-0">{experience.establishmentName}</h6>
                                                        <p className="mb-0">{`${experience.position} | ${experience.sector}`}</p>
                                                        <p className="mb-0">{`${experience.workBeginDate} - ${experience.workEndDate}`}</p>
                                                        <p className="mb-0">{experience.city}</p>
                                                        <p className="mb-0">{experience.description}</p>
                                                    </div>
                                                    <button className="btn btn-danger" onClick={() => handleDelete(experience.id)}>
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
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
        </div>
    );
};

export default MyExperiences;
