import React from "react";
import Footer2 from "../../components/footer/Footer2";
import Navi2 from "../../components/navbar/Navi2";
import { Link } from "react-router-dom";

const ForIndividuals = () => {
  return (
    <main className="bg-front-dark">
      <Navi2 />

      <div className="container pt-48 mb-20">
        <div className=" col-12 py-4 px-lg-40 px-md-20 px-sm-2">
          <div className="ik-card-2">
            <div className="ik-container">
              <div className="header-left-3">
                <span className="text-ik fw-bold header-left-text">
                  Aradığın{" "}
                  <span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>İş
                  <span style={{ color: "rgb(0, 176, 120)" }}>"&nbsp;</span>{" "}
                  Burada!
                </span>
              </div>
              <div className="ik-logo-container">
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
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27120%27/%3e"
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
        
                </span>
              </div>
            </div>
            <Link
              className="btn d-md-inline-block mt-5 ik-btn"
              to="/istanbul-kodluyor"
            >
              Başvur
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="raw-html-embed">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n          .navbar {\n               top: 70px !important;\n          }\n\n          .borderp {\n               text-align: center;\n               border: 2px solid #93f;\n               padding: 1em;\n               border-radius: 12px;\n          }\n\n          .borderp2 {\n               text-align: center;\n               border: 2px solid #FF5F8F;\n               padding: 1em;\n               border-radius: 12px;\n          }\n\n          .pack-box {\n               position: relative;\n          }\n\n          .comingsoon {\n               position: absolute;\n               width: 48px;\n               height: auto;\n               right: 5px;\n               bottom: 5px;\n          }\n\n          .rainbow-text {\n               font-size: 1.25em !important;\n               width: auto;\n          }\n\n          @media screen and (max-width: 900px) {\n               .rainbow-text {\n                    font-size: .8em !important;\n               }\n          }\n     ",
            }}
          />
          {/*

    <div class="tobeto-video">

  <div class="container">

      <div class="row">

          <div class="col-9">
                                                                                              <span class="text-white fw-bold">Tobeto ile geleceğini keşfet</span>

          </div>

          <div class="col-3">
                                                                                              <a data-bs-toggle="modal" href="#TobetoVideo" role="button" class="video-btn">İzle <svg width="22"
                                                                                                      height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                      <path d="M4.5835 2.75L17.4168 11L4.5835 19.25V2.75Z" stroke="#3171FF" stroke-linecap="round"
                                                                                                          stroke-linejoin="round"></path>
                                                                                                  </svg>
                                                                                              </a>

          </div>

      </div>

  </div>

    </div>
           */}
          <section>
            <div
              className="position-relative "
              style={{ marginTop: "2em !important" }}
            >
              <div className="container text-center">
                <div className="mw-5xl mx-auto position-relative">
                  <div className="vector">
                    <img
                      src="https://tobeto.s3.cloud.ngn.com.tr/03_005013e668_71411c39a1.svg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h1
                    className="text-white"
                    style={{ fontSize: "3em !important" }}
                  >
                    Kariyerinin kontrolü
                  </h1>
                  <h1
                    className="text-white mb-5"
                    style={{ fontSize: "3em !important" }}
                  >
                    senin elinde
                  </h1>
                  <p className="text-white lh-md borderp">
                    <a className="text-white" href="#dijital-bir-meslek">
                      Dijital Bir Meslek
                    </a>{" "}
                    edinmek,{" "}
                    <a className="text-white" href="#profesyonel-bir-yonetici">
                      Profesyonel Bir Yönetici
                    </a>
                    olmak ya da
                    <a className="text-white" href="#kendini-gelistirmek">
                      Kendini Geliştirmek
                    </a>{" "}
                    için İstediğin bölümden,
                    <br />
                    istediğin kadar eğitimi seçip, eş zamanlı olarak
                    alabilirsin.
                  </p>
                  <p className="text-white my-8">
                    <a href="http://www.codecademy.com"> Codecademy</a> iş
                    birliği ile, fark yaratmak senin elinde!
                  </p>
                  <Link
                    to="/register"
                    className="btn mx-4 btn-rainbow py-4 rainbow-text"
                  >
                    Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye
                    başla!
                  </Link>
                </div>
              </div>
              <div className="gradient-line2 mt-20"></div>
            </div>
          </section>
          <section>
            <div className="container web-pack py-20">
              <div className="mw-5xl mx-auto position-relative">
                <h4 className="text-white mb-20 text-center mx-auto position-relative">
                  Bir Yerden Başlamak İstiyorum
                </h4>
                <div className="vector7" style={{ top: "-30px", right: 0 }}>
                  <img
                    src="https://tobeto.s3.cloud.ngn.com.tr/02_1a87a6ffc1_e4d2b2db45.svg"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="row">
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <link />
                      <a>C# Programming</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>
                        Object Oriented Programming
                        <br />
                        (OOP)
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>Windows Form Application Programming</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>
                        Microsoft
                        <br />
                        SQL Server
                        <br />
                        Database
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>ADONET</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>DAPPER</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>HTML-CSS-SASS</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>Javascript</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>ASPNET Core MVC</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>Git / Github</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>ReactJS</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>NextJS</a>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/katalog"
                style={{ marginTop: "1em" }}
                className="tab-link mobile-mx-auto d-flex justify-content-center"
              >
                Tümünü İncele &gt;&gt;
              </Link>
            </div>
          </section>
          <div className="gradient-line2 mt-5" id="dijital-bir-meslek"></div>
          <section className="pt-20 pb-8 container border-info web-pack">
            <div className="mw-5xl mx-auto text-center position-relative">
              <h4 className="text-white mb-20  mx-auto position-relative">
                Dijital Bir Meslek İstiyorum
              </h4>
              <div className="vector2">
                <img
                  src="https://tobeto.s3.cloud.ngn.com.tr/dot_gray_8a5a605556_eb3dd4f77d.svg"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="row mw-5xl mx-auto">
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a href="/programlar/frontend">
                    Front End
                    <br />
                    Developer
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a href="/bilgi-al">
                    Back End
                    <br />
                    Developer
                  </a>
                  <img
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className=" col-lg-3 col-4">
                <div className="pack-box">
                  <a href="/programlar/full-stack-developer">
                    {" "}
                    Full Stack
                    <br />
                    Developer
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a href="/programlar/web-mobile">
                    {" "}
                    Web &amp; Mobile
                    <br />
                    Developer
                  </a>
                </div>
              </div>
              <div className="col-lg-4  col-4">
                <div className="pack-box">
                  <a href="/bilgi-al">
                    Veri Bilimi
                    <br />
                    Uzmanı
                  </a>
                  <img
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className=" col-lg-4 col-4">
                <div className="pack-box">
                  <a href="/bilgi-al">
                    Siber Güvenlik
                    <br />
                    Uzmanı
                  </a>
                  <img
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className=" col-lg-4 col-4">
                <div className="pack-box">
                  <a href="/bilgi-al">
                    UI / UX
                    <br />
                    Developer
                  </a>
                  <img
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <a
                href=" /katalog"
                style={{ marginTop: "1em" }}
                className="tab-link mobile-mx-auto d-flex justify-content-center"
              >
                Tümünü İncele &gt;&gt;
              </a>
            </div>
          </section>
          <div className="container">
            <div className="row">
              <Link
                to="/regiter"
                className="btn mx-auto btn-rainbow py-4 rainbow-text"
              >
                Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye
                başla!
              </Link>
            </div>
          </div>
          <div
            className=" gradient-line2 mt-5"
            id="profesyonel-bir-yonetici"
          ></div>
          <section className="py-20 mobile-padding container web-pack">
            <div className="mw-5xl mx-auto text-center position-relative mobile-header">
              <div className="vector6">
                <img
                  src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  width={130}
                />
              </div>
              <h4 className="text-white mb-20 tablet-75 mx-auto position-relative">
                Profesyonel Bir Yönetici Olmak İstiyorum
                <div className="vector4">
                  <img
                    src="https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7_5ad2591676.svg"
                    width={150}
                    height={150}
                  />
                </div>
              </h4>
            </div>
            <div className="row mw-5xl mx-auto d-flex justify-content-center">
              <div className="col-lg-2 col-4">
                <div className="pack-box">
                  <a href="/bilgi-al">
                    Ürün
                    <br />
                    Yönetimi
                    <br />
                    Programı
                  </a>{" "}
                  <img
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className=" col-lg-2 col-4">
                <div className="pack-box">
                  <a href="/bilgi-al">
                    Dijital
                    <br />
                    Pazarlama
                    <br />
                    Programı
                  </a>{" "}
                  <img
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className=" col-lg-2 col-4">
                <div className="pack-box">
                  <a href="/bilgi-al">
                    Proje
                    <br />
                    Yönetimi
                    <br />
                    Programı
                  </a>{" "}
                  <img
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className=" col-lg-2 col-4">
                <div className="pack-box">
                  <a href="/bilgi-al">
                    Yetenek
                    <br />
                    Yönetimi
                    <br />
                    Programı
                  </a>{" "}
                  <img
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className=" gradient-line2 mt-5" id="kendini-gelistirmek"></div>
        </div>
      </div>

      <section className="container py-20">
        <div className="mw-5xl mx-auto text-center position-relative">
          <h4 className="text-white mb-20 mx-auto ">
            Kendimi Geliştirmek İstiyorum
          </h4>
          <div className="vector2">
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
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27150%27%20height=%27150%27/%3e"
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
        </div>
       
      </section>

      <Footer2 />
    </main>
  );
};

export default ForIndividuals;
