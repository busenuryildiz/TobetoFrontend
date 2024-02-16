import React from "react";
import { Link } from "react-router-dom";
//HREFLER DÜZENLENECEK BLOG LİNKLERİ!!!!!!!!!!!!!!
const Footer2 = () => {
  return (
    <div>
      <section className="py-20 border-top border-info py-xs-5 bg-front-dark">
        <div className="container">
          <div className="row justify-content-between pb-20 border-info border-bottom">
            <div className="col-6 col-md-6 col-lg-2 mb-8 mb-lg-0">
              <p className="mb-6 text-white fw-bold">Site Haritası</p>
              <ul className="list-unstyled">
                <li className="mb-3">
                <Link to="/hakkimizda" className="small text-white text-decoration-none">Hakkımızda</Link>
                </li>
                <li className="mb-3">
                  <Link to="/bireyler-icin"
                    className="small text-white text-decoration-none"
                  >
                    Bireyler İçin
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/kurumlar-icin"
                    className="small text-white text-decoration-none"
                  >
                    Kurumlar İçin
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/kurumsal-kimlik"
                    className="small text-white text-decoration-none"
                  >
                    Kurumsal Kimlik
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/sss"
                    className="small text-white text-decoration-none"
                  >
                    S.S.S.
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/iletisim"
                    className="small text-white text-decoration-none"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-6 col-lg-3 mb-8 mb-lg-0">
              <p className="mb-6 text-white fw-bold">Kaynaklar</p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a
                    target="_blank"
                    className="small text-white text-decoration-none"
                    href="https://tobeto.com/yasal-metinler/tobeto-uyelik-sozlesmesi"
                  >
                    Üyelik Sözleşmesi ve Kullanım Koşulları
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    target="_blank"
                    className="small text-white text-decoration-none"
                    href="https://tobeto.com/yasal-metinler/kvkk-aydinlatma-metni"
                  >
                    KVKK Aydınlatma Metni
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    target="_blank"
                    className="small text-white text-decoration-none"
                    href="https://tobeto.s3.cloud.ngn.com.tr/Tobeto_Ilgili_Kisi_Basvuru_Formu_b0f79d29ba.pdf"
                  >
                    İlgili Kişi Başvuru Formu
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    target="_blank"
                    className="small text-white text-decoration-none"
                    href="https://tobeto.com/yasal-metinler/tobeto-cerez-politikasi"
                  >
                    Çerez Politikası
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    target="_blank"
                    className="small text-white text-decoration-none"
                    href="https://tobeto.s3.cloud.ngn.com.tr/v_Cayma_Formu_6bc3a888a3.pdf"
                  >
                    Cayma Formu
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-6 col-lg-3 mb-8 mb-lg-0">
              <p className="mb-6 text-white fw-bold">Eğitim Yolculukları</p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <Link to="/frontend"
                    className="small text-white text-decoration-none"
                  >
                    Front End
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/fullstack"
                    className="small text-white text-decoration-none"
                  >
                    Full Stack
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/web-mobile"
                    className="small text-white text-decoration-none"
                  >
                    Web &amp; Mobile
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/veri-bilimi"
                    className="small text-white text-decoration-none"
                  >
                    Veri Bilimi{" "}
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/siber-güvenlik"
                    className="small text-white text-decoration-none"
                  >
                    Siber Güvenlik{" "}
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/ui-ux"
                    className="small text-white text-decoration-none"
                  >
                    UI / UX
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-6 col-lg-4 mb-8 mb-lg-0">
              <p className="mb-6 text-white fw-bold">Blog</p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a className="small text-white text-decoration-none" href="XXX">
                    Web API Nedir? Programlama Yazılımının Arayüzü Nasıl
                    Çalışır?
                  </a>
                </li>
                <li className="mb-3">
                  <a className="small text-white text-decoration-none" href="XXXX">
                    Yapay Zeka Chatbot: İşte Geleceğin İletişim Aracı!
                  </a>
                </li>
                <li className="mb-3">
                  <a className="small text-white text-decoration-none" href="XXXX">
                    Yazılım Test Otomasyonu: İş Akışınızı Daha Verimli Hale
                    Getirin!
                  </a>
                </li>
                <li className="mb-3">
                  <a className="small text-white text-decoration-none" href="XXXX">
                    Node.js Nedir ve Nasıl Kullanılır? İşte Sana Basit ve Etkili
                    Kılavuz
                  </a>
                </li>
                <li className="mb-3">
                  <a className="small text-white text-decoration-none" href="XXXX">
                    Robotlar ve Yapay Zeka İçin Hangi Yazılım Dili Kullanılır?
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row pt-8 justify-content-between align-items-center">
            <div className="col-12 col-lg-auto text-center mb-8 mb-lg-0">
              <a className="navbar-brand" href="#">
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
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27132%27%20height=%2727%27/%3e"
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
                    alt=""
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75 2x"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75"
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
            <div className="col-12 col-lg-auto mb-5 mb-lg-0">
              <p className="small text-white text-center mb-0">
                © 2022 Tobeto I Her Hakkı Saklıdır
              </p>
            </div>
            <div className="col-12 col-lg-auto text-center">
              <a
                className="text-decoration-none me-4"
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
              <a
                className="text-decoration-none me-4"
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
              <a
                className="text-decoration-none me-4"
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
      </section>
    </div>
  );
};

export default Footer2;
