import { useDispatch, useSelector } from 'react-redux';
import Navi from '../../../../components/navbar/Navi'
import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { UpdateUserRequest } from '../../../../models/requests/Users/updateUsersRequest';
import MySettingsService from '../../../../services/pages/profile/editProfile/settings/mySettingsService';
import { UpdateUsersResponse } from '../../../../models/responses/Users/updateUsersResponse';
import { UpdateChangePasswordResponse } from '../../../../models/responses/Users/updateChangePasswordResponse';
import { UpdateChangePasswordRequest } from '../../../../models/requests/Users/updateChangePasswordRequest';
import { GetByIdUsersResponse } from '../../../../models/responses/Users/getByIdUsersResponse';
import { ToastContainer, toast } from 'react-toastify';


function MySettings() {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth.user);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [userData, setUserData] = useState<GetByIdUsersResponse>();
    const [currentPasswordError, setCurrentPasswordError] = useState<string | null>(null);
    const [newPasswordError, setNewPasswordError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserInformation = async () => {
            try {
                const response = await MySettingsService.getUserInformation(user.id);
                setUserData(response);
                // Eski şifre kısmını boş bırak
                setCurrentPassword('');
            } catch (error) {
                console.error('Kullanıcı bilgileri alınırken hata oluştu:', error);
            }
        };

        fetchUserInformation();
    }, [user.id]);

    const handleCurrentPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(e.target.value);
        // Her yeni girişte hata durumunu temizle
        setCurrentPasswordError(null);
    };

    const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
        // Her yeni girişte hata durumunu temizle
        setNewPasswordError(null);
    };

    const handlePasswordConfirmationChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Eğer eski şifre doğru girilmediyse hata mesajı göster
        if (currentPassword !== userData?.password) {
            setCurrentPasswordError('Geçerli şifre yanlış');
            return;
        }

        if (newPassword !== passwordConfirmation) {
            setNewPasswordError('Yeni şifre ve tekrarı uyuşmuyor');
            return;
        }

        try {
            // Sadece şifreyi güncelle
            await MySettingsService.updateUserPassword(user.id, newPassword);

            console.log('Şifre başarıyla güncellendi');
            toast.success('Şifre başarıyla güncellendi', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (error) {
            console.error('Şifre güncellenirken hata oluştu:', error);
            toast.error('Şifre güncellenirken hata oluştu', {
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
                <div className='container'>
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
                                <a href="/profilim/profilimi-duzenle/yabanci-dil" className="btn mb-2 text-start w-100 sidebar-link ">
                                    <span className="languages2"></span>
                                    <span className="sidebar-text">Yabancı Dillerim</span>
                                </a>
                                <a href="/profilim/profilimi-duzenle/ayarlar" className="btn mb-2 text-start w-100 sidebar-link active-edit">
                                    <span className="settings"></span>
                                    <span className="sidebar-text">Ayarlar</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-9" style={{ minHeight: '90vh' }}>
                        <form action="#" data-hs-cf-bound="true" onSubmit={handleSubmit}>
                                <div className="row mb-2">
                                    <div className="col-12 col-md-4 mb-6">
                                        <label className="input-label-text">Eski Şifre*</label>
                                        <input
                                            name="currentPassword"
                                            className={`form-control tobeto-input ${currentPasswordError ? 'is-invalid' : ''}`}
                                            type="password"
                                            placeholder="Eski Şifre"
                                            value={currentPassword}
                                            onChange={handleCurrentPasswordChange}
                                        />
                                        {currentPasswordError && (
                                            <div className="invalid-feedback">{currentPasswordError}</div>
                                        )}
                                    </div>
                                    <div className="col-12 col-md-4 mb-6">
                                        <label className="input-label-text">Yeni Şifre*</label>
                                        <input
                                            name="password"
                                            className={`form-control tobeto-input ${newPasswordError ? 'is-invalid' : ''}`}
                                            type="password"
                                            placeholder="Yeni Şifre"
                                            value={newPassword}
                                            onChange={handleNewPasswordChange}
                                        />
                                        {newPasswordError && (
                                            <div className="invalid-feedback">{newPasswordError}</div>
                                        )}
                                    </div>
                                    <div className="col-12 col-md-4 mb-6">
                                        <label className="input-label-text">Yeni Şifre Tekrar*</label>
                                        <input
                                            name="passwordConfirmation"
                                            className="form-control tobeto-input"
                                            type="password"
                                            placeholder="Yeni Şifre Tekrar"
                                            value={passwordConfirmation}
                                            onChange={handlePasswordConfirmationChange}
                                        />
                                    </div>
                                </div>
                                <div className="col 12">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <button className="btn btn-primary py-2 mb-3 w-100" type="submit">
                                                Şifre Değiştir
                                            </button>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <button
                                                className="btn btn-danger mb-2 w-100"
                                                onClick={() => console.log('Üyeliği Sonlandır')}
                                            >
                                                Üyeliği Sonlandır
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    )
}

export default MySettings