import { useEffect, useState } from "react";
import axios from 'axios';
import Navi from "../../components/navbar/Navi";
import Footer from "../../components/footer/Footer";
import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { RootState } from "../../store";
import ExamPage from "../exam/examPage";
import ExamResult from "../../components/review/examResult";


export interface Exam {
  id: number;
  courseId: number;
  title: string;
  description: string;
  point: number;
  examDuration: string;
  examTitle: string;
  hasTakenExam: boolean;
  questionAmount: number;
  examResult?: string;
}
export interface UserExam {
  id: number;
  examId: number;
  examResult: string;
  userId: string;
}
function Review() {
  const authState = useSelector((state: RootState) => state.auth);
  const userId = authState.user?.id;
  const [exam, setExam] = useState<Exam[]>([]);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [isExamFinished, setIsExamFinished] = useState(false);
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [hasEnteredSurvey, setHasEnteredSurvey] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:6280/api/Surveys/user/${userId}/survey/1`)
      .then(response => response.json())
      .then(data => {
        // Assuming the endpoint returns a boolean
        setHasEnteredSurvey(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [userId]);
  useEffect(() => {
    axios.get(`http://localhost:6280/api/Exam/GetList?PageSize=5`)
      .then((examListRes) => {
        const examList = examListRes.data.items;

        if (userId) {
          axios.get(`http://localhost:6280/api/ExamOfUsers/GetUsersExamResultInfo?userId=${userId}`)
            .then((userExamRes) => {
              const userExams = userExamRes.data;
              console.log('User Exams:', userExams);
              if (userExams) {
                const updatedExams = examList.map((exam: Exam) => {
                  const userExam = userExams.find((userExam: UserExam) => userExam.examId === exam.id);
                  return {
                    ...exam,
                    hasTakenExam: !!userExam,
                    examResult: userExam ? userExam.examResult : undefined,
                  };
                });
                setExam(updatedExams);
              } else {
                setExam(examList);
              }
            }).catch(error => {
              console.error('There was an error!', error);
            });
        } else {
          setExam(examList);
        }
      }).catch(error => {
        console.error('There was an error!', error);
      });
  }, [userId]);
  const handleButtonClick = (exam: Exam) => {
    setSelectedExam(exam);
    setPopupIsOpen(true);
    setIsExamStarted(true);
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
                  background: "none", border: "0px", boxSizing: "border-box", display: "block", height: "150px", margin: "0px", maxWidth: "100%", opacity: "1", padding: "0px", width: "150px",
                }} >
                {" "}
              </span>
            </span>
            <span>
              <img
                alt=""
                data-nimg="intrinsic"
                decoding="async"
                src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                srcSet="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg 1x,https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg 2x"
                style={{
                  border: "none",
                  boxSizing: "border-box",
                  display: "block",
                  height: "0px",
                  inset: "0px",
                  margin: "auto",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  minWidth: "100%",
                  padding: "0px",
                  position: "absolute",
                  width: "0px",
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
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Yetkinlik
                </span>
                <span
                  className="fw-normal text-info"
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  lerini
                </span>
                <span
                  className="fw-normal text-info"
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  ücretsiz ölç,
                </span>
                <span
                  className="text-secondary"
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  bilgi
                </span>
                <span
                  className="fw-normal text-info"
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  lerini
                </span>
                <span
                  className="fw-normal text-info"
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  test et.
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
              {hasEnteredSurvey ? (
                <a
                  className="btn btn-primary"
                  href="profilim/degerlendirmeler/rapor/tobeto-iste-basari-modeli/1"
                >
                  Raporu Görüntüle
                </a>
              ) : (
                <a
                  className="btn btn-primary"
                  href="profilim/degerlendirmeler/tobeto-iste-basari-modeli"
                >
                  Başla
                </a>
              )}
            </div>
          </div>
          <div className="col-12 col-md-6 mb-8 d-none">
            <div className="dashboard-card2">
              <span>Kişisel Gelişim Envanteri</span>
              <p>
                Kendin için en uygun kariyer alanlarını <b>keşfet</b>.
              </p>
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
              {exam.map((item: Exam, index: number) => (
                <div className="dashboard-card-slim" key={index}>
                  <div className="d-flex align-items-center" style={{ gap: "14px" }}>
                    {item.hasTakenExam ? (
                      <>
                        <div className="single-chart">
                          <svg viewBox="0 0 36 36" className="circular-chart orange">
                            <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                            <path className="circle" strokeDasharray="80,100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                            <text x="18" y="20.35" className="percentage">{item.examResult}</text>
                          </svg>
                        </div>
                        <span>{item.title}</span>
                      </>
                    ) : (
                      <>
                        <div className="platformIcon" />
                        <span>{item.title}</span>
                      </>
                    )}
                  </div>
                  <button className="btn btn-light" onClick={() => handleButtonClick(item)}>
                    {item.hasTakenExam ? 'Raporu Görüntüle' : 'Başla'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      {popupIsOpen && selectedExam && (
        <>
          <div className="fade modal-backdrop show"></div>
          <div aria-labelledby="contained-modal-title-vcenter" aria-modal="true" className="fade modal show" role="dialog" style={{ display: "block" }} tabIndex={-1}>
            <div className="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-sm-down">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="quiz-screen">
                    {isExamFinished ? (
                      <div className="result-screen">
                        <span className="result-title">Test Bitti</span>
                        <ExamResult examResult={selectedExam.examResult ? parseInt(selectedExam.examResult) : 0} questionAmount={selectedExam.questionAmount} />
                        <div className="row">
                          <button className="btn btn-primary mt-8 ms-auto me-auto" style={{ width: "max-content" }} onClick={() => {
                            setPopupIsOpen(false);
                            setIsExamFinished(false);
                          }}>
                            Kapat
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="d-flex justify-content-between mb-8">
                          <span className="quiz-details-header">{selectedExam.title}</span>
                          <button aria-label="Close" className="btn-close" type="button" onClick={() => setPopupIsOpen(false)} />
                        </div>
                        <div className="join-screen">
                          <p />
                          <p>Bu sınav {selectedExam.questionAmount} sorudan oluşmakta olup sınav süresi {selectedExam.examDuration.split(':').slice(1, 2).join(':')} dakikadır. Sınav çoktan seçmeli test şeklinde olup sınavı yarıda bıraktığınız taktırde çözdüğünüz kısım kadarıyla değerlendirileceksiniz.</p>
                          <p />
                          <div>
                            <span>Sınav Süresi : {selectedExam.examDuration.split(':').slice(1, 2).join(':')} Dakika</span>
                            <span>Soru Sayısı : {selectedExam.questionAmount}</span>
                            <span>Soru Tipi : {selectedExam.description}</span>
                          </div>
                          <div className="row ">
                            <button className="btn btn-primary mt-8 ms-auto me-auto" style={{ width: "max-content" }} onClick={() => {
                              if (selectedExam.hasTakenExam) {
                                setIsExamFinished(true);
                                // Add this state
                              } else {
                              }
                            }}>
                              {selectedExam.hasTakenExam ? 'Raporu Görüntüle' : 'Sınava Başla'}</button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isExamStarted && (
            <ExamPage />

          )}
        </>
      )}
      <section className="py-5">
        <div className="position-relative ">
          <div className="gradient-line3 mt-5"></div>
          <div className="container text-center">
            <div className="mw-5xl mx-auto">
              <h3>
                <span
                  className="text-secondary"
                  style={{ fontWeight: "normal" }}
                >
                  {" "}
                  Aboneliğe özel{" "}
                </span>
                <span
                  className="fw-normal text-info"
                  style={{ fontWeight: "normal" }}
                >
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
                <span>Kazanım Odaklı Testler</span>
                <p>
                  Dijital gelişim kategorisindeki eğitimlere başlamadan
                  öncekonuyla ilgili bilgin ölçülür ve seviyene göre
                  yönlendirilirsin.
                </p>
                <p />
              </div>
            </div>
            <div className="col-12 col-md-6 mb-8">
              <div className="dashboard-card4 equal-box">
                <span>
                  Huawei Talent Interview <br /> Teknik Bilgi Sınavı*
                </span>
                <p className="mt-4">
                  <b>
                    <i>Sertifika alabilmen için,</i>
                  </b>{" "}
                  eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod
                  bilgin ölçülür.
                  <br />
                  <br />
                  4400+ soru | 30+ programlama dili <br />4 zorluk seviyesi
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
  );
}

export default Review;
