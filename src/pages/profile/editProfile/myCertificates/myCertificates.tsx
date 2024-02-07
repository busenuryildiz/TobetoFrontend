import React from 'react'
import Navi from '../../../../components/navbar/Navi'

interface Certificate {
    fileName: string;
    fileType: string;
    date: string;
}

interface MyCertificatesProps {
    certificates: Certificate[];
}

function MyCertificates( props: MyCertificatesProps) {
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
                                                <div className="cursor-pointer">
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
                                                                    <button className="uppy-u-reset uppy-Dashboard-close" type="button" aria-label="Kapat" title="Kapat">
                                                                        <span aria-hidden="true">×</span>
                                                                    </button>
                                                                    <div className="uppy-Dashboard-innerWrap">
                                                                        <div className="uppy-Dashboard-dropFilesHereHint">Buraya sürükleyip bırakın</div>
                                                                        <div className="uppy-Dashboard-AddFiles">
                                                                            <input className="uppy-Dashboard-input" hidden aria-hidden="true" tabIndex={-1} type="file" name="files[]" accept="image/jpeg,image/png,application/pdf" />
                                                                            <input className="uppy-Dashboard-input" hidden aria-hidden={true} tabIndex={-1} type="file" name="files[]" accept="image/jpeg,image/png,application/pdf" />
                                                                            <div className="uppy-Dashboard-AddFiles-title">Sürükleyip bırak, yapıştır veya
                                                                                <button type="button" className="uppy-u-reset uppy-c-btn uppy-Dashboard-browse" data-uppy-super-focusable="true">gözat</button>
                                                                            </div>
                                                                            <div className="uppy-Dashboard-AddFiles-list" role="tablist">
                                                                                <span role="presentation" style={{ whiteSpace: 'nowrap' }}></span>
                                                                            </div>
                                                                            <div className="uppy-Dashboard-AddFiles-info">
                                                                                <a tabIndex={-1} href="https://uppy.io" rel="noreferrer noopener" target="_blank" className="uppy-Dashboard-poweredBy">Powered by <span>
                                                                                    <svg aria-hidden="true" focusable="false" className="uppy-c-icon uppy-Dashboard-poweredByIcon" width="11" height="11" viewBox="0 0 11 11">
                                                                                        <path d="M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z" fillRule="evenodd"></path>
                                                                                    </svg>
                                                                                    <span className="uppy-Dashboard-poweredByUppy">Uppy</span>
                                                                                </span></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="uppy-Dashboard-progressindicators">
                                                                            <div className="uppy-StatusBar is-waiting" aria-hidden="true">
                                                                                <div className="uppy-StatusBar-progress" role="progressbar" aria-label="0%" aria-valuetext="0%" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} style={{ width: '0%' }}></div>
                                                                                <div className="uppy-StatusBar-actions"></div>
                                                                            </div>
                                                                            <div className="uppy uppy-Informer">
                                                                                <span></span>
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
                                                {props.certificates.map((certificate, index) => (
                                                    <tr key={index}>
                                                        <td>{certificate.fileName}</td>
                                                        <td className={`${certificate.fileType.toLowerCase()}_icon text-center`}></td>
                                                        <td>{certificate.date}</td>
                                                        <td style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '15px' }}>
                                                            <span className="fileIcon"></span>
                                                            <span className="trashIcon"></span>
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
    )
}

export default MyCertificates