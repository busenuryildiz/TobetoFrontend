import React from "react";
import Navi2 from "../../components/navbar/Navi2";
import Footer from "../../components/footer/footer";
import { useState } from "react";

function MainPage() {
  const [activeTab, setActiveTab] = useState("applications-tab-pane");

  const handleTabClick = (tabId: string) => {
    console.log("tabId ", tabId);
    setActiveTab(tabId);
  };

  return (
    <div className="plaform-page" style={{ minHeight: "120vh" }}>
      <Navi2 />
      {/* SECTİON 1 */}
      <section className="dropdown custom-dropdown">
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="mega-menu">
            <div className="notification-content">
              <div className="user-form done">
                <div className="d-flex flex-column">
                  <div className="form-name">Form ismi</div>
                  <div className="form-date">23.01.2023</div>
                </div>
                <a className="form-button" href="/platform"></a>
              </div>
              <div className="user-form pending">
                <div className="d-flex flex-column">
                  <div className="form-name">Form ismi</div>
                  <div className="form-date">23.01.2023</div>
                </div>
                <a className="form-button" href="/platform"></a>
              </div>
              <div className="user-form notdone">
                <div className="d-flex flex-column">
                  <div className="form-name">Form ismi</div>
                  <div className="form-date">23.01.2023</div>
                </div>
                <a className="form-button" href="/platform"></a>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
      <main>
        <div className="platform-page" style={{ minHeight: "120vh" }}>
          {/* İnner section 1 */}
          <section className="py-5">
            <div className="position-relative mt-12">
              <div className="vector">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27150%27%20height=%27150%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="/_next/static/media/dot-purple.e0e5c9d8.svg 1x, /_next/static/media/dot-purple.e0e5c9d8.svg 2x"
                    src="/_next/static/media/dot-purple.e0e5c9d8.svg"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </span>
              </div>
              <div className="container text-center">
                <div className="mw-5xl mx-auto">
                  <h3>
                    <span className="text-secondary">TOBETO</span>
                    <span className="fw-normal text-info">'ya</span>
                    <span className="fw-normal text-info"> hoş geldin</span>
                  </h3>
                  <h4 className="fw-normal text-info mb-5">Kerem</h4>
                  <p className="tobeto-slogan">
                    Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda
                    senin yanında!
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End of İnner section 1 */}
          {/* İnner section 2 */}
          <section className="my-2">
            <div className="container">
              <div className="row cv-box cv-padding display-flex mmt-n-4">
                <div className="col-12 ik-logo-platform">
                  <div className="p-4">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271137%27%20height=%27443%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                          }}
                        />
                      </span>
                      <img
                        srcSet="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                        src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        alt="İK Logo"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          padding: "0px",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </span>
                  </div>
                  <div className="mt-2 d-flex flex-column justify-content-center px-10 text-center">
                    <span className="header-text-md mt-4 ">
                      Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de
                      yerini al.
                    </span>
                    <span className="header-text mt-4 mb-4">
                      Aradığın <span className="quot">&nbsp;“</span>İş
                      <span className="quot">”&nbsp;</span> Burada!
                    </span>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <ul
                    className="nav nav-tabs mainTablist"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "apply-tab-pane" ? "active" : ""
                        }`}
                        id="apply-tab"
                        onClick={() => handleTabClick("apply-tab-pane")}
                        type="button"
                        role="tab"
                        aria-controls="apply-tab-pane"
                        aria-selected={activeTab === "apply-tab-pane"}
                        tabIndex={0}
                      >
                        Başvurularım
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "lessons-tab-pane" ? "active" : ""
                        }`}
                        id="lessons-tab"
                        onClick={() => handleTabClick("lessons-tab-pane")}
                        type="button"
                        role="tab"
                        aria-controls="lessons-tab-pane"
                        aria-selected={activeTab === "lessons-tab-pane"}
                        tabIndex={1}
                      >
                        Eğitimlerim
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "notification-tab-pane" ? "active" : ""
                        }`}
                        id="notification-tab"
                        onClick={() => handleTabClick("notification-tab-pane")}
                        type="button"
                        role="tab"
                        aria-controls="notification-tab-pane"
                        aria-selected={activeTab === "notification-tab-pane"}
                        tabIndex={2}
                      >
                        Duyuru ve Haberlerim
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "mySurvey-tab-pane" ? "active" : ""
                        }`}
                        id="mySurvey-tab"
                        onClick={() => handleTabClick("mySurvey-tab-pane")}
                        type="button"
                        role="tab"
                        aria-controls="mySurvey-tab-pane"
                        aria-selected={activeTab === "mySurvey-tab-pane"}
                        tabIndex={3}
                      >
                        Anketlerim
                      </button>
                    </li>
                  </ul>
                  {/* Tab panes go here */}
                </div>
                {/* HERE */}
                <div className="col-12">
                  <div className="tab-content" id="myTabContent">
                    {/* Apply Tab Panel */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "apply-tab-pane" ? "show active" : ""
                      }`}
                      id="apply-tab-pane"
                      role="tabpanel"
                      aria-labelledby="apply-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-md-6 col-12 mt-2">
                          <div className="status-card status_accepted">
                            <span className="form_name">İstanbul Kodluyor</span>
                            <span className="form_status"></span>
                            <span className="pull_back"></span>
                            <span className="form_name">Bilgilendirme</span>
                            <div>
                              <div>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <i
                                    className="fa fa-check fa-sm"
                                    aria-hidden="true"
                                    style={{
                                      color: "green",
                                      marginRight: "5px",
                                    }}
                                  ></i>
                                  <span className="form_date">
                                    {" "}
                                    İstanbul Kodluyor Başvuru Formu onaylandı.
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <i
                                    className="fa fa-check fa-sm"
                                    aria-hidden="true"
                                    style={{
                                      color: "green",
                                      marginRight: "5px",
                                    }}
                                  ></i>
                                  <span className="form_date">
                                    {" "}
                                    İstanbul Kodluyor Belge Yükleme Formu
                                    onaylandı.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Lessons Tab Panel */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "lessons-tab-pane" ? "show active" : ""
                      }`}
                      id="lessons-tab-pane"
                      role="tabpanel"
                      aria-labelledby="lessons-tab"
                      tabIndex={1}
                    >
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="tab-content" id="myTabContent">
                            {/* All Lessons Tab Pane */}
                            <div
                              className={`tab-pane fade ${
                                activeTab === "lessons-tab-pane"
                                  ? "show active"
                                  : ""
                              }`}
                              id="all-lessons-tab-pane"
                              role="tabpanel"
                              aria-labelledby="all-lessons-tab"
                              tabIndex={1}
                            >
                              <div className="row">
                                <div className="col-md-3 col-12 mb-4">
                                  <div className="corp-edu-card">
                                    <div
                                      className="card-img"
                                      style={{
                                        backgroundImage:
                                          'url("https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg")',
                                      }}
                                    ></div>
                                    <div className="card-content">
                                      <div className="d-flex flex-column">
                                        <span>
                                          Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
                                        </span>
                                        <span className="platform-course-date">
                                          21 Eylül 2023 15:20
                                        </span>
                                      </div>
                                      <a className="apply-btn">Eğitime Git</a>
                                    </div>
                                  </div>
                                </div>
                                {/* Diğer eğitim kartlarını ekleyin */}
                              </div>
                            </div>

                            {/* Started Tab Pane */}
                            <div
                              className="tab-pane fade"
                              id="started-tab-pane"
                              role="tabpanel"
                              aria-labelledby="started-tab"
                              tabIndex={0}
                            >
                              <div className="row">
                                {/* Başlamış eğitim kartlarını ekleyin */}
                              </div>
                            </div>

                            {/* Done Lessons Tab Pane */}
                            <div
                              className="tab-pane fade"
                              id="done-lessons-tab-pane"
                              role="tabpanel"
                              aria-labelledby="done-lessons-tab"
                              tabIndex={0}
                            >
                              <div className="row">
                                {/* Tamamlanmış eğitim kartlarını ekleyin */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="showMoreBtn">Daha Fazla Göster</div>
                    </div>
                    {/* Buraya Lessons tab panelini ve içeriğini ekle */}

                    {/* Notification Tab Panel */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "notification-tab-pane"
                          ? "show active"
                          : ""
                      }`}
                      id="notification-tab-pane"
                      role="tabpanel"
                      aria-labelledby="notification-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-md-4 col-12 my-4">
                          <div className="notfy-card notify">
                            <div className="d-flex flex-column">
                              <div className="d-flex justify-content-between mb-4">
                                <span className="type">Duyuru</span>
                                <span className="corp-names type">
                                  İstanbul Kodluyor
                                </span>
                              </div>
                              <span className="header">Mindset Anketi</span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="date">31.01.2024</span>
                              <span className="read-more">Devamını Oku</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 my-4">
                          <div className="notfy-card notify">
                            <div className="d-flex flex-column">
                              <div className="d-flex justify-content-between mb-4">
                                <span className="type">Duyuru</span>
                                <span className="corp-names type">
                                  İstanbul Kodluyor
                                </span>
                              </div>
                              <span className="header">
                                Ocak Ayı Tercih Formu Bilgilendirmesi
                              </span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="date">12.01.2024</span>
                              <span className="read-more">Devamını Oku</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 my-4">
                          <div className="notfy-card notify">
                            <div className="d-flex flex-column">
                              <div className="d-flex justify-content-between mb-4">
                                <span className="type">Duyuru</span>
                                <span className="corp-names type">
                                  İstanbul Kodluyor
                                </span>
                              </div>
                              <span className="header">
                                11 Ocak Kampüs Buluşması
                              </span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="date">06.01.2024</span>
                              <span className="read-more">Devamını Oku</span>
                            </div>
                          </div>
                        </div>
                        <div className="showMoreBtn">Daha Fazla Göster</div>
                      </div>
                    </div>
                    {/* Buraya Notification tab panelini ve içeriğini ekle */}

                    {/* Applications Tab Panel */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "applications-tab-pane"
                          ? "show active"
                          : ""
                      }`}
                      id="applications-tab-pane"
                      role="tabpanel"
                      aria-labelledby="applications-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-md-4 col-12 my-4">
                          <div className="notfy-card news">
                            <div className="d-flex flex-column">
                              <div className="d-flex justify-content-between mb-4">
                                <span className="type">Mülakat</span>
                                <span className="corp-names type">
                                  İstanbul Kodluyor
                                </span>
                              </div>
                              <span className="header">Mindset Anketi</span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="date">31.01.2024</span>
                              <span className="read-more">
                                Mülakatı Değerlendir
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 my-4">
                          <div className="notfy-card news">
                            <div className="d-flex flex-column">
                              <div className="d-flex justify-content-between mb-4">
                                <span className="type">Mülakat</span>
                                <span className="corp-names type">
                                  İstanbul Kodluyor
                                </span>
                              </div>
                              <span className="header">
                                Ocak Ayı Tercih Formu Bilgilendirmesi
                              </span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="date">12.01.2024</span>
                              <span className="read-more">
                                Mülakatı Değerlendir
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 my-4">
                          <div className="notfy-card news">
                            <div className="d-flex flex-column">
                              <div className="d-flex justify-content-between mb-4">
                                <span className="type">Mülakat</span>
                                <span className="corp-names type">
                                  İstanbul Kodluyor
                                </span>
                              </div>
                              <span className="header">
                                11 Ocak Kampüs Buluşması
                              </span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="date">06.01.2024</span>
                              <span className="read-more">
                                Mülakatı Değerlendir
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="showMoreBtn">Daha Fazla Göster</div>
                      </div>
                    </div>
                    {/* Buraya Applications tab panelini ve içeriğini ekle */}

                    {/* MySurvey Tab Panel */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "mySurvey-tab-pane"
                          ? "show active"
                          : ""
                      }`}
                      id="mySurvey-tab-pane"
                      role="tabpanel"
                      aria-labelledby="mySurvey-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="noDataCard">
                          <p>Atanmış herhangi bir anketiniz bulunmamaktadır</p>
                        </div>
                      </div>
                    </div>
                    {/* Buraya MySurvey tab panelini ve içeriğini ekle */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* End of İnner section 2 */}

          {/* End of İnner section 3 */}
          <section className="my-2">
            <div className="container">
              <div className="row cv-box cv-padding">
                <div className="col-12 position-relative">
                  <span className="exams-header">Sınavlarım</span>
                </div>
                <div className="exams my-3">
                  <div className="exam-card">
                    <div className="exam-header">
                      <span className="exam-name">
                        Herkes için Kodlama 1D Değerlendirme Sınavı
                      </span>
                      <span className="lesson-name">
                        Herkes İçin Kodlama - 1D
                      </span>
                    </div>
                    <div className="exam-details">
                      <div>
                        <span className="exam_time">45 Dakika</span>
                      </div>
                    </div>
                    <span className="status-done"></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of İnner section 3 */}
          {/* End of inner section 4 */}
          <section className="my-2">
            <div className="container">
              <div className="new-packs my-10">
                <div className="package-card">
                  <div className="details pack-bg-2">
                    <h1>
                      <br />
                      Profilini oluştur
                    </h1>
                    <button className="btn btn-primary w-100">Başla</button>
                  </div>
                </div>
                <div className="package-card">
                  <div className="details pack-bg-3">
                    <h1 className="mb-6">
                      <br />
                      Kendini değerlendir
                    </h1>
                    <button className="btn btn-primary w-100">Başla</button>
                  </div>
                </div>
                <div className="package-card">
                  <div className="details pack-bg-1">
                    <h1 className="mb-6">
                      <br />
                      Öğrenmeye başla
                    </h1>
                    <button className="btn btn-primary w-100">Başla</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of inner section 4 */}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
