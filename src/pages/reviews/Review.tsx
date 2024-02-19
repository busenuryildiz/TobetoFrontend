import React, { useEffect, useState } from 'react'
import Navi from '../../components/navbar/Navi'
import Footer from '../../components/footer/footer'
import { Container } from 'react-bootstrap';
function Review() {
    const [examData, setExamData] = useState<any>(null);
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    useEffect(() => {
        fetch('https://your-api-url.com/exams')
            .then(response => response.json())
            .then(data => setExamData(data))
            .catch(error => console.error('Error:', error));
    }, []);
    if (examData && examData.hasTakenExam) {
        console.log(examData.hasTakenExam);
    } else {
        console.log('User or hasTakenExam is not available');
    }
    return (
        <div>
            <Navi />
            <section className="py-5">
                <div className="position-relative mt-12">
                    <div className="vector">
                        <span>
                            <span
                                style={{
                                    background: 'none', border: '0px', boxSizing: 'border-box', display: 'block', height: '150px', margin: '0px', maxWidth: '100%',
                                    opacity: '1',
                                    padding: '0px',
                                    width: '150px'
                                }} > </span>
                        </span>
                        <span>
                            <img
                                alt=""
                                data-nimg="intrinsic"
                                decoding="async"
                                src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                                srcSet="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg 1x,https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg 2x"
                                style={{
                                    border: 'none',
                                    boxSizing: 'border-box',
                                    display: 'block',
                                    height: '0px',
                                    inset: '0px',
                                    margin: 'auto',
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    minWidth: '100%',
                                    padding: '0px',
                                    position: 'absolute',
                                    width: '0px'
                                }}
                            />
                        </span>
                    </div>
                    <div className="container text-center">
                        <div className="mw-5xl mx-auto">
                            <h3>
                                <span
                                    className="text-secondary"
                                    style={{
                                        fontWeight: 'normal'
                                    }}
                                >
                                    {' '}Yetkinlik
                                </span>
                                <span
                                    className="fw-normal text-info"
                                    style={{
                                        fontWeight: 'normal'
                                    }}
                                >
                                    lerini
                                </span>
                                <span
                                    className="fw-normal text-info"
                                    style={{
                                        fontWeight: 'normal'
                                    }}
                                >
                                    {' '}ücretsiz ölç,
                                </span>
                                <span
                                    className="text-secondary"
                                    style={{
                                        fontWeight: 'normal'
                                    }}
                                >
                                    {' '}bilgi
                                </span>
                                <span
                                    className="fw-normal text-info"
                                    style={{
                                        fontWeight: 'normal'
                                    }}
                                >
                                    lerini
                                </span>
                                <span
                                    className="fw-normal text-info"
                                    style={{
                                        fontWeight: 'normal'
                                    }}
                                >
                                    {' '}test et.
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <Container className="mt-8">
                <div className="row">
                    <div className="col-12 col-md-auto-12 mb-8">
                        <div className="dashboard-card">
                            <span>Tobeto İşte Başarı Modeli</span>
                            <p>
                                80 soru ile yetkinliklerini <b>ölç,</b> önerilen eğitimleri{" "}
                                <b>tamamla,</b> rozetini <b>kazan.</b>
                            </p>
                            <a className="btn btn-primary" href="profilim/degerlendirmeler/tobeto-iste-basari-modeli">
                                Başla
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-8 d-none">
                        <div className="dashboard-card2">
                            <span>Kişisel Gelişim Envanteri</span>
                            <p>Kendin için en uygun kariyer alanlarını <b>keşfet</b>.</p>
                            <span>YAKINDA</span>
                            <label className="switch soon-shape mx-auto">
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="w-100 d-flex justify-content-center"></div>
                    </div>
                    <div className="col-12 col-md-6 mb-8">
                        <div className="dashboard-card1 equal-box">
                            <span>Yazılımda Başarı Testi</span>
                            <p>
                                Çoktan seçmeli sorular ile teknik bilgini <b>test et.</b>
                            </p>
                            <label className="text-white">&gt;&gt;&gt;</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-8">
                        <div className="d-flex flex-column equal-box" style={{ gap: "14px" }}>

                            <div className="dashboard-card-slim">
                                <div className="d-flex align-items-center" style={{ gap: '14px' }}>
                                    {examData.hasTakenExam ? (
                                        <>
                                            <div className="single-chart">
                                                <svg viewBox="0 0 36 36" className="circular-chart orange">
                                                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                                    <path className="circle" strokeDasharray='80,100' d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                                    <text x="18" y="20.35" className="percentage">80</text>
                                                </svg>
                                            </div>
                                            <span>{examData.title}</span>
                                        </>
                                    ) : (
                                        <>
                                            <div className="platformIcon" />
                                            <span>{examData.title}</span>
                                        </>
                                    )}
                                </div>
                                <button className="btn btn-light" onClick={() => setPopupIsOpen(true)}>
                                    {examData.hasTakenExam ? 'Raporu Görüntüle' : 'Başla'}
                                </button>

                                {popupIsOpen && (
                                    <div
                                        aria-labelledby="contained-modal-title-vcenter"
                                        aria-modal="true"
                                        className="fade modal show"
                                        role="dialog"
                                        style={{ display: 'block' }}
                                        tabIndex={-1}
                                    >
                                        <div className="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-sm-down">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <div className="quiz-screen">
                                                        <div className="d-flex justify-content-between mb-8">
                                                            <span className="quiz-details-header">Front End</span>
                                                            <button
                                                                aria-label="Close"
                                                                className="btn-close"
                                                                type="button"
                                                                onClick={() => setPopupIsOpen(false)}
                                                            />
                                                        </div>
                                                        <div className="join-screen">
                                                            <p />
                                                            <p>{examData.description}</p>
                                                            <p />
                                                            <div>
                                                                <span>{examData.ExamDuration}</span>
                                                                <span>Soru Sayısı : 25</span>
                                                                <span>{examData.type}</span>
                                                            </div>
                                                            <div className="row ">
                                                                <button
                                                                    className="btn btn-primary mt-8 ms-auto me-auto"
                                                                    style={{ width: 'max-content' }}
                                                                >
                                                                    Raporu Görüntüle
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <section className="py-5">
                <div className="position-relative ">
                    <div className="gradient-line3 mt-5"></div>
                    <div className="container text-center">
                        <div className="mw-5xl mx-auto">
                            <h3>
                                <span className="text-secondary" style={{ fontWeight: "normal" }}>
                                    {" "}
                                    Aboneliğe özel{" "}
                                </span>
                                <span className="fw-normal text-info" style={{ fontWeight: "normal" }}>
                                    değerlendirme araçları için{" "}
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-2 mb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-8">
                            <div className="dashboard-card4 equal-box">
                                <span>
                                    Kazanım Odaklı Testler
                                </span>
                                <p>
                                    Dijital gelişim kategorisindeki eğitimlere başlamadan öncekonuyla ilgili bilgin ölçülür ve seviyene göre yönlendirilirsin.
                                </p>
                                <p />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-8">
                            <div className="dashboard-card4 equal-box">
                                <span>
                                    Huawei Talent Interview{' '}
                                    <br />
                                    {' '}Teknik Bilgi Sınavı*
                                </span>
                                <p className="mt-4">
                                    <b>
                                        <i>
                                            Sertifika alabilmen için,
                                        </i>
                                    </b>
                                    {' '}eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod bilgin ölçülür.
                                    <br />
                                    <br />
                                    4400+  soru | 30+ programlama dili{' '}
                                    <br />
                                    4 zorluk seviyesi
                                </p>
                                <small className="text-white">
                                    *Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Review;
