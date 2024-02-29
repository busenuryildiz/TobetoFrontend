import React from "react";

const BilgiAl = () => {
  return (
    <>
      <div id="__next">
        <div className="ik-banner">
          <div className="container">
            <div className="ik-banner-top">
              <div>
                <span className="ik-logo" />
              </div>
              <div className="mobile-none">
                <span className="text-ik fw-bold">
                  Aradığın{" "}
                  <span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>İş
                  <span style={{ color: "rgb(0, 176, 120)" }}>"&nbsp;</span>{" "}
                  Burada!
                </span>
              </div>
              <div>
                <button className="ik-btn">Başvur</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="TobetoVideo"
          data-bs-backdrop="static"
          aria-hidden="true"
          aria-labelledby="TobetoVideoLabel"
          tabIndex={-1}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content back-none border-0">
              <button
                type="button"
                className="btn-close btn-close-modal pause-video"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 5.5L5.5 16.5"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 5.5L16.5 16.5"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="modal-body p-0">
                <video
                  width="100%"
                  className="modal-height youtube-video"
                  height={240}
                  controls
                >
                  <source
                    src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4"
                    type="video/mp4"
                  />
                  <source src="movie.ogg" type="video/ogg" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <section className="web-header">
          <nav className="navbar bg-web navbar-expand-lg w-100 m-0 z-index-999 border-0 px-3 py-5">
            <div className="container-fluid">
              <a href="#">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
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
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27165%27%20height=%2734%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                    />
                  </span>
                  <img
                
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=384&q=75 2x"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=384&q=75"
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
              </a>
            </div>
          </nav>
        </section>
        <section>
          <div className="position-relative bg-dark">
            <div className="w-100 outline-bg mb-10 mobil-p-20">
              <div className="container ">
                <div className="row">
                  <form data-hs-cf-bound="true">
                    <div className="getContactForm">
                      <div
                        className="d-flex flex-column"
                        style={{ gap: "1em" }}
                      >
                        <span style={{ fontSize: "1.75em" }}>
                          Bilgi almak için ilgilendiğin konuyu seç, bize e-posta
                          adresini bırak.{" "}
                        </span>
                        <select
                          name="Topic"
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option>İlgilendiğin alanı seç.</option>
                          <option value="Front End Developer">
                            Front End Developer
                          </option>
                          <option value="Back End Developer">
                            Back End Developer
                          </option>
                          <option value="FullStack Developer">
                            FullStack Developer
                          </option>
                          <option value="Web & Mobile Developer">
                            Web &amp; Mobile Developer
                          </option>
                          <option value="Siber Güvenlik Uzmanı">
                            Siber Güvenlik Uzmanı
                          </option>
                          <option value="Veri Bilimi Uzmanı">
                            Veri Bilimi Uzmanı
                          </option>
                          <option value="UI / UX Developer">
                            UI / UX Developer
                          </option>
                          <option value="Ürün Yönetimi Programı">
                            Ürün Yönetimi Programı
                          </option>
                          <option value="Dijital Pazarlama Programı">
                            Dijital Pazarlama Programı
                          </option>
                          <option value="Proje Yönetimi Programı">
                            Proje Yönetimi Programı
                          </option>
                          <option value="Yetenek Yönetimi Programı">
                            Yetenek Yönetimi Programı
                          </option>
                        </select>
                        <div className="d-flex" style={{ gap: 8 }}>
                          <input
                            name="Email"
                            className="form-control tobeto-input"
                            type="text"
                            placeholder="E-Posta Adresi"
                          />
                          <button
                            disabled
                            className="btn btn-primary send-icon"
                            style={{ width: "auto" }}
                          />
                        </div>
                        <label className="d-flex mt-5 text-start text-white">
                          <small className=" w-90">
                            Kişisel verileriniz{" "}
                            <a
                              target="_blank"
                              href="/yasal-metinler/kvkk-aydinlatma-metni"
                            >
                              Aydınlatma Metni
                            </a>{" "}
                            kapsamında işlenmektedir.
                          </small>
                        </label>
                        <label className="d-flex mt-5 text-start text-white">
                          <small className=" w-90">
                            <input
                              name="identityCheck"
                              className="form-check-input me-2"
                              type="checkbox"
                            />
                            Kimlik, iletişim, müşteri işlem verilerimin
                            pazarlama süreçlerinizin gerçekleştirilmesi ve
                            yönetimi amacı ile altyapı hizmeti aldığınız yurt
                            dışında mukim Active Campaign (LLC)'ye aktarılmasını
                            kabul ediyorum.
                          </small>
                        </label>
                        <small className=" ">
                          Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret
                          A.Ş. (“Tobeto”) tarafından şahsımla iletişime
                          geçilerek pazarlama, tanıtım ve duyurulardan aşağıdaki
                          iletişim bilgileri üzerinden irtibata geçilmesini
                          kabul ediyorum.
                          <label className="d-flex mt-1 text-start mt-4 text-white">
                            <input
                              name="emailCheck"
                              className="form-check-input me-2"
                              type="checkbox"
                            />
                            <small>E-posta gönderim izni.</small>
                          </label>
                        </small>
                      </div>
                      <div className="d-flex flex-column align-items-center ">
                        <span
                          style={{
                            fontSize: "1.75em",
                            color: "rgb(255, 255, 255)",
                          }}
                        >
                          Bizi takip et <br />
                        </span>
                        <div className="socials">
                          <div>
                            <a
                              className="text-decoration-none "
                              href="https://www.facebook.com/tobetoplatform"
                              target="blank"
                            >
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                                  stroke="#A628FF"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                          <div>
                            <a
                              className="text-decoration-none "
                              href="https://www.instagram.com/tobeto_official/"
                              target="blank"
                            >
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                                  stroke="#A628FF"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                                  stroke="#A628FF"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M17.5 6.5H17.51"
                                  stroke="#A628FF"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                          <div>
                            <a
                              className="text-decoration-none "
                              href="https://twitter.com/tobeto_platform"
                              target="blank"
                            >
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
                                  stroke="#A628FF"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="https://www.linkedin.com/company/tobeto/"
                              target="blank"
                            >
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                                  stroke="#A628FF"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6 9H2V21H6V9Z"
                                  stroke="#A628FF"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                                  stroke="#A628FF"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="container text-center">
              <div className="mw-5xl mx-auto position-relative">
                <div className=" mt-4 gradient-line-dark" />
                <p
                  style={{
                    fontSize: "1.5em",
                    border: "2px solid rgb(153, 51, 255)",
                    padding: "8px 16px",
                    borderRadius: 12,
                    margin: "1em 0px 2em",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  {" "}
                  Bize her zaman{" "}
                  <a
                    href="mailto:bilgial@tobeto.com"
                    style={{ fontWeight: 600, color: "rgb(255, 255, 255)" }}
                  >
                    bilgial@tobeto.com
                  </a>{" "}
                  adresinden ulaşabilirsin.
                </p>
                <div className=" mt-8 gradient-line-dark" />
                <span className=" my-8 stronger" style={{ fontWeight: 400 }}>
                  <b>Kişisel</b> ve <b>profesyonel</b> gelişimin için Tobeto
                  topluluğuna dahil ol.
                </span>
              </div>
            </div>
            <div className="container mobile-padding-20">
              <div className="mw-xl mx-auto text-center">
                <div className="py-4 px-12 bg-white shadow-lg text-center">
                  <form data-hs-cf-bound="true" data-gtm-form-interact-id={0}>
                    <h3 className="mt-6 mb-8">Hemen Kayıt Ol</h3>
                    <input
                      name="firstName"
                      className="form-control mt-6"
                      type="text"
                      placeholder="Ad*"
                    />
                    <input
                      name="lastName"
                      className="form-control mt-6"
                      type="text"
                      placeholder="Soyad*"
                    />
                    <input
                      name="email"
                      className="form-control mt-6"
                      type="email"
                      placeholder="E-Posta*"
                      data-gtm-form-interact-field-id={0}
                    />
                    <input
                      name="password"
                      className="form-control mt-6"
                      type="password"
                      placeholder="Şifre*"
                      data-gtm-form-interact-field-id={1}
                    />
                    <input
                      name="passwordAgain"
                      className="form-control mt-6"
                      type="password"
                      placeholder="Şifre Tekrar*"
                    />
                  </form>
                  <button disabled className="btn btn-primary w-100 mt-6">
                    Kayıt Ol
                  </button>
                  <div className="col-12 mt-6">
                    <label>
                      <small>
                        Zaten bir hesabın var mı?
                        <a
                          className="text-decoration-none text-muted fw-bold"
                          href="/giris"
                        >
                          {" "}
                          Giriş Yap
                        </a>
                      </small>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BilgiAl;
