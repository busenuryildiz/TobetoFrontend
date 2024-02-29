import React, { useEffect, useRef, useState } from 'react';
import Navi from '../../../../components/navbar/Navi';
import { CertificateService } from '../../../../services/pages/profile/editProfile/certificate/certificateService';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { AddCertificateRequest } from '../../../../models/requests/Certificate/addCertificateRequest';
import { GetUserAllCertificateResponse } from '../../../../models/responses/Certificate/getUserAllCertificateResponse';


function MyCertificates() {
    const user = useSelector((state: any) => state.auth.user);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [certificates, setCertificates] = useState<GetUserAllCertificateResponse[]>([]);
    const updateLocalStorage = (updatedCertificates: GetUserAllCertificateResponse[]) => {
        localStorage.setItem('userCertificates', JSON.stringify(updatedCertificates));
      };
    

    useEffect(() => {
        // Sayfa yüklendiğinde kullanıcının sertifikalarını getir
        async function fetchCertificates() {
            try {
                // Call CertificateService.getAllUserCertificate to get user certificates
                const userCertificates = await CertificateService.getAllUserCertificate(user.id);
    
                // Assuming the response includes user information
                const userIdFromResponse = userCertificates?.[0]?.userId;
    
                // If user ID is present in the response, use it; otherwise, fallback to user.id
                const userId = userIdFromResponse || user.id;
    
                setCertificates(userCertificates);
            } catch (error) {
                console.error('Error fetching certificates:', error);
            }
        }
    
        fetchCertificates();
    }, []);
    
    

    useEffect(() => {
        // Sayfa yüklendiğinde local storage'dan sertifikaları al
        const storedCertificates = localStorage.getItem('userCertificates');
        if (storedCertificates) {
            setCertificates(JSON.parse(storedCertificates));
        }
    }, []);


    const handleFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
    
        if (selectedFiles && selectedFiles.length > 0) {
          const filesArray = Array.from(selectedFiles);
    
          try {
            // Upload certificates to Cloudinary
            const cloudinaryResponses = await Promise.all(
                filesArray.map(async (file: File) => {
                  return await uploadToCloudinary(file);
                })
              );
              
              const newCertificates: GetUserAllCertificateResponse[] = filesArray.map((file, index) => ({
                id: cloudinaryResponses[index]?.id, // Bu satırı değiştirerek cloudinaryResponses'dan ID'yi alıyoruz
                userId: user.id,
                name: file.name,
                fileName: file.name,
                fileType: file.type,
                date: new Date().toISOString(),
                imagePath: cloudinaryResponses[index]?.imagePath,
              }));
              
            // Update state with new certificates
            setCertificates((prevCertificates: GetUserAllCertificateResponse[]) => [...prevCertificates, ...newCertificates]);
    
            // Update local storage
            updateLocalStorage([...certificates, ...newCertificates]);
          } catch (error) {
            console.error('Error uploading certificates:', error);
          }
        }
      };
    
      const handleDeleteCertificate = async (certificateId: number) => {
        try {
          await CertificateService.deleteCertificate(certificateId);
    
          // Update state and remove the certificate
          setCertificates((prevCertificates) => prevCertificates.filter((cert) => cert.id !== certificateId));
    
          // Update local storage
          updateLocalStorage(certificates.filter((cert) => cert.id !== certificateId));
        } catch (error) {
          console.error('Error deleting certificate:', error);
        }
      };
    
    
    const uploadToCloudinary = async (file: File) => {
        const formData = new FormData();
        formData.append('formFile', file);
    
        const cloudinaryResponse = await axios.post(`http://localhost:6280/api/FilesUpload/UserCertificate?userId=${user.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    
        // CertificateService'i kullanarak backend'e sertifika bilgilerini gönder
        const newCertificate = {
            userId: user.id,
            name: file.name,
            imagePath: cloudinaryResponse.data,
        };
    
        await CertificateService.addCertificate(newCertificate);
    
        return cloudinaryResponse.data;
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
                                <a href="/profilim/profilimi-duzenle/sertifikalarim" className="btn mb-2 text-start w-100 sidebar-link  active-edit">
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
                            <div className="row">
                                <div className="section-header">
                                    <span className="header-text">Sertifikalarım</span>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-12 tobeto-light-bg">
                                            <div className="upload-area">
                                                <div className="cursor-pointer" onClick={handleFileUpload}>
                                                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="2" y="2" width="74" height="74" rx="37" fill="#F1E3FF" stroke="#9933FF" stroke-width="4" stroke-dasharray="2 2"></rect>
                                                        <path d="M47 45L40 37L33 45" stroke="#9933FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M40 37V53" stroke="#9933FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M56.261 51C58.0342 50.0324 59.4349 48.5014 60.2422 46.6485C61.0495 44.7956 61.2173 42.7265 60.7191 40.7675C60.221 38.8086 59.0852 37.0715 57.4912 35.8304C55.8971 34.5892 53.9355 33.9148 51.9159 33.9135H49.6252C49.0749 31.7831 48.0493 29.8053 46.6254 28.1288C45.2015 26.4522 43.4164 25.1206 41.4044 24.234C39.3923 23.3474 37.2056 22.9289 35.0086 23.0099C32.8117 23.0909 30.6616 23.6693 28.7202 24.7018C26.7788 25.7342 25.0964 27.1937 23.7997 28.9705C22.5029 30.7474 21.6254 32.7953 21.2333 34.9605C20.8411 37.1256 20.9444 39.3515 21.5355 41.4709C22.1265 43.5904 23.1899 45.5481 24.6457 47.1969" stroke="#9933FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                                <span>Dosya Yükle</span>

                                                <div>
                                                    <div className="uppy-Container">
                                                        <div className="uppy-Root" dir="ltr">
                                                            <div className="uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--modal uppy-Dashboard--isInnerWrapVisible" data-uppy-theme="light" data-uppy-num-acquirers="0" data-uppy-drag-drop-supported="true" aria-hidden="true" aria-disabled="false" aria-label="Dosya Yükle (Kapatmak için Esc)">
                                                                <div aria-hidden="true" className="uppy-Dashboard-overlay"></div>
                                                                <div className="uppy-Dashboard-inner" aria-modal="true" role="dialog">

                                                                    <div className="uppy-Dashboard-innerWrap">

                                                                        <div className="uppy-Dashboard-AddFiles">
                                                                            <input
                                                                                ref={fileInputRef}
                                                                                type="file"
                                                                                style={{ display: 'none' }}
                                                                                onChange={handleFileChange}
                                                                                multiple
                                                                            />
                                                                        </div>
                                                                        <div className="uppy-Dashboard-progressindicators">
                                                                            <div className="uppy-StatusBar is-waiting" aria-hidden="true">
                                                                                <div className="uppy-StatusBar-progress" role="progressbar" aria-label="0%" aria-valuetext="0%" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} style={{ width: '0%' }}></div>
                                                                                <div className="uppy-StatusBar-actions"></div>
                                                                            </div>
                                                                            <div className="uppy uppy-Informer"><span></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive-sm">
                                        <table className="mt-8 corpTable table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Dosya Adı</th>
                                                    <th className="text-center">Dosya Türü</th>
                                                    <th>Tarih</th>
                                                    <th style={{ textAlign: 'center' }}>İşlem</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {certificates.map((certificate) => (
                                                    <tr key={certificate.id}>
                                                        <td>{certificate.fileName}</td>
                                                        <td className={`${certificate.fileType?.toLowerCase()}_icon text-center`}></td>
                                                        <td>{certificate.date}</td>
                                                        <td style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '15px' }}>
                                                            <span className="fileIcon"></span>
                                                            <span className="trashIcon" onClick={() => handleDeleteCertificate(certificate.id)}></span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MyCertificates;



