import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store";
import { logoutUser } from "../../store/actions/authActions";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div className="bg-front-dark bg-front-width" >
      <section className="web-header">
        <div className="ik-banner-top">
          <div className="">
            <span className="ik-logo"></span>
          </div>
          <div className="mobile-none">
            <span className="text-ik fw-bold">
              Aradığın{" "}
              <span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>
              İş<span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>{" "}
              Burada!
            </span>
          </div>
          <div>
            <a href="istanbul-kodluyor"><button className="btn  d-md-inline-block btn-primary mt-3">Başvur</button></a>
          </div>
        </div>
        <nav className="navbar bg-web navbar-expand-xxl w-100 m-0 z-index-999 position-fixed border-0 px-2 py-4">
          <div className="container-fluid">
            <a href="/">
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
                    filter: 'brightness(0) invert(1)',
                    display: 'block',
                    maxWidth: '55%',
                    maxHeight: '55%',
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="../Assets/image/tobeto-logo.png"
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
              </span>
            </a>
            <button
              aria-controls="offcanvasExample"
              className="btn p-0 d-xl-none "
              data-bs-target="#offcanvasExample"
              data-bs-toggle="offcanvas"
              type="button"
              title="offcanvasExample"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z"
                  fill="#fff"
                ></path>
              </svg>
            </button>
            <ul className="d-none d-xl-flex flex-row justify-content-center navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/hakkimizda">
                  Biz Kimiz?
                </a>
              </li>
              <li className="nav-item dropdown tbt-dropdown">
                <a
                  className="nav-link tnav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Neler Sunuyoruz?
                </a>
                <ul className="dropdown-menu dd-bg w-100">
                  <li className="nav-item">
                    <a className="m-0 nav-link" href="/bireyler-icin">
                      Bireyler için
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="m-0 nav-link" href="/kurumlar-icin">
                      Kurumlar için
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/katalog">
                  Katalog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/codecademy">
                  Codecademy
                </a>
              </li>
              <li className="nav-item dropdown tbt-dropdown">
                <a
                  className="nav-link tnav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tobeto'da Bu Ay
                </a>
                <ul className="dropdown-menu dd-bg w-100">
                  <li className="nav-item">
                    <a className="m-0 nav-link" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="m-0 nav-link" href="/basinda-biz">
                      Basında Biz
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="m-0 nav-link" href="/takvim">
                      Takvim
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="m-0 nav-link" href="/istanbul-kodluyor">
                      İstanbul Kodluyor
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            {auth.isAuthenticated ? (
              <div className="d-none d-xxl-block">
                <div className="d-flex justify-space-between align-items-center">
                  <Link
                    to="/"
                    className="mx-3 align-items-center d-flex align-items-center"
                    style={{ gap: "1em" }}
                  >
                    <span className="tbt-gradient"></span>
                  </Link>
                  <div className="btn-group header-avatar">
                    <button
                      type="button"
                      className="btn p-0 fw-normal b-r-35 text-end d-flex align-items-center"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="me-2">
                        <img
                          className="cv-pp-img rounded-circle"
                          src="Assets/image/Avatar.png"
                          alt=""
                          style={{
                            width: "36px",
                            height: "36px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="me-3">
                        <p className="mb-0 name">
                          {auth.user && auth.user.firstName
                            ? auth.user.firstName
                            : ""}
                        </p>
                      </div>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#828282"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </button>
                    <ul className={`profile dropdown-menu`}>
                      <li>
                        <Link to="/profilim/profilimi-duzenle/kisisel-bilgilerim" className="dropdown-item profil-dropdown">
                          Profil Bilgileri
                        </Link>
                      </li>
                      <li>
                        <hr
                          className="dropdown-divider"
                          style={{
                            backgroundColor: "rgb(204, 204, 204)",
                            height: "1px",
                          }}
                        />
                      </li>
                      <li>
                        <hr
                          className="dropdown-divider"
                        />
                      </li>
                      <li>
                        <button
                          className="dropdown-item profil-dropdown"
                          onClick={handleLogout}
                        >
                          Oturumu Kapat
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>) : (

              <div className="d-none d-xl-block">
                <a className="btn border-light text-light mx-4" href="/login">
                  Giriş Yap
                </a>
                <a className="btn mx-4 btn-rainbow" href="/register">
                  Ücretsiz Üye Ol
                </a>
              </div>)}
          </div>
        </nav>
        {/* İkinci banner (offcanvas) */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <a className="me-auto navbar-brand" href="#">
              {/* İkinci banner içeriği */}
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
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27165%27%20height=%2734%27/%3e"
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
                  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&amp;w=384&amp;q=75 2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&amp;w=384&amp;q=75"
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
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>
              {/* İkinci banner içeriği */}
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="/hakkimizda">
                    Biz Kimiz?
                  </a>
                </li>
                <li className="nav-item dropdown tbt-dropdown">
                  <a
                    className="nav-link tnav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNav1"
                    aria-expanded="false"
                    aria-controls="collapseNav1"
                  >
                    Neler Sunuyoruz?
                  </a>
                  <div id="collapseNav1" className="collapse collapse-navbar">
                    <ul className=" collapse-nav-bg ">
                      <li className="nav-item">
                        <a className="m-0 nav-link" href="/bireyler-icin">
                          Bireyler için
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="m-0 nav-link" href="/kurumlar-icin">
                          Kurumlar için
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/katalog">
                    Katalog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/codecademy">
                    Codecademy
                  </a>
                </li>
                <li className="nav-item dropdown tbt-dropdown">
                  <a
                    className="nav-link tnav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNav2"
                    aria-expanded="false"
                    aria-controls="collapseNav2"
                  >
                    Tobeto'da Bu Ay
                  </a>
                  <div id="collapseNav2" className="collapse collapse-navbar">
                    <ul className="collapse-nav-bg">
                      <li className="nav-item">
                        <a className="m-0 nav-link" href="/blog">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="m-0 nav-link" href="/basinda-biz">
                          Basında Biz
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="m-0 nav-link" href="/takvim">
                          Takvim
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="m-0 nav-link" href="/istanbul-kodluyor">
                          İstanbul Kodluyor
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              {/* İkinci banner içeriği */}
              <div className="py-6">
                <a className="w-100 btn btn-dark" href="#">
                  Giriş Yap
                </a>
                <a className="w-100 btn btn-primary mt-3 btn-rainbow" href="#">
                  Ücretsiz Üye Ol
                </a>
              </div>
              <p className="mb-4 small text-center text-muted">
                © 2021 Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
        {/* Üçüncü banner */}
        <div className="calendarBtn">
          <div className="calendar-btn"></div>
        </div>
      </section>{" "}
      {/* İçerik buraya eklenebilir */}
      <main className="bg-front-dark">
        <div className="ik-banner">
          <div className="container">
            <div className="ik-banner-top">
              <div className="">
                <span className="ik-logo"></span>
              </div>
              <div className="mobile-none">
                <span className="text-ik fw-bold">
                  Aradığın{" "}
                  <span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>İş
                  <span style={{ color: "rgb(0, 176, 120)" }}>
                    &nbsp;"
                  </span>{" "}
                  Burada!
                </span>
              </div>
              <div className="" onClick={() => window.location.href = '/istanbul-kodluyor'}>
                <button className="ik-btn">Başvur</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
