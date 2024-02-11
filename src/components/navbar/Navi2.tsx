import React, { useState } from "react";

import { Link } from "react-router-dom";

function Navi2() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="position-relative navbar navbar-expand-xxl py-4 bg-white">
      <div className="container-fluid">
        <a href="/">
          <img
            alt=""
            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75"
            className="img-fluid m-0 p-0"
            style={{ height: "40px" }}
          />
        </a>
        <button
          className="btn p-0 d-xxl-none navbar-burger"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            color="gray"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z"
              fill="#828282"
            ></path>
          </svg>
        </button>
        <ul className="d-none d-xxl-flex navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-active" href="#">
              Ana Sayfa
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link c-gray-3" href="#">
              Profilim
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link c-gray-3" href="#">
              Değerlendirmeler
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link c-gray-3" href="#">
              Katalog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link c-gray-3" href="#">
              Takvim
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link c-gray-3" href="#">
              İstanbul Kodluyor
            </a>
          </li>
        </ul>
        <div className="d-none d-xxl-block">
          <div className="d-flex justify-space-between align-items-center">
            <div
              className="mx-3 align-items-center d-flex align-items-center"
              style={{ gap: "1em" }}
            >
              <span className="tbt-gradient"></span>
            </div>
            <div className="btn-group header-avatar">
          <button
            type="button"
            className="btn p-0 fw-normal b-r-35 text-end d-flex align-items-center"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen ? "true" : "false"}
          >
            <div className="me-2">
              <img
                className="cv-pp-img rounded-circle"
                src="https://tobeto-private.s3.cloud.ngn.com.tr/user-profile-photo/11666.png?AWSAccessKeyId=ALMS%3Aalms-storage%40advancity.com.tr&amp;Expires=1707684425&amp;Signature=yH5P1ZHcLVxhbrK1liee1eAuCGQ%3D"
                alt=""
                style={{ width: '36px', height: '36px', objectFit: 'cover' }}
              />
            </div>
            <div className="me-3">
              <p className="mb-0 name">Kerem PEKARLI</p>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className=""
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
          <ul className={`profile dropdown-menu ${isDropdownOpen ? 'show' : ''}`} style={{ position: 'absolute', top: '100%', left: 0 }}>
            <li>
              <a className="dropdown-item profil-dropdown" href="#">
                Profil Bilgileri
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" style={{ backgroundColor: 'rgb(204, 204, 204)', height: '1px' }} />
            </li>
            <li>
              <hr className="dropdown-divider" style={{ backgroundColor: 'rgba(100, 100, 100, 0.5)', height: '1px' }} />
            </li>
            <li>
              <a className="dropdown-item profil-dropdown" href="#">
                Oturumu Kapat
              </a>
            </li>
          </ul>
        </div>
          </div>
        </div>
      </div>
      <div
        className="d-xxl-none offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <a className="me-auto navbar-brand" href="#">
            <img
              alt=""
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&amp;w=384&amp;q=75"
              decoding="async"
              className="navbar-brand"
            />
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
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Anasayfa
                </a>
                <a className="nav-link" href="#">
                  Değerlendirmeler
                </a>
                <a className="nav-link" href="#">
                  Profilim
                </a>
                <a className="nav-link" href="#">
                  Katalog
                </a>
                <a className="nav-link" href="#">
                  Takvim
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="my-3 py-3 border-top border-light align-items-center d-flex align-items-center">
              <a className="text-decoration-none c-gray-3 mx-3" href="#">
                Tobeto
                <svg
                  width="20"
                  height="20"
                  href="#"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z"
                    stroke="#959595"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7.5 18.3333V10H12.5V18.3333"
                    stroke="#959595"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="py-6">
              <div className="btn-group header-avatar w-100">
                <button
                  type="button"
                  className="btn p-1 fw-normal text-end d-flex align-items-center b-r-35 w-100 justify-content-between"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="me-3">
                    <p className="mb-0 small c-gray-3">Kerem PEKARLI</p>
                  </div>
                  <div className="me-2">
                    <img
                      className="cv-pp-img rounded-circle"
                      src="https://tobeto-private.s3.cloud.ngn.com.tr/user-profile-photo/11666.png?AWSAccessKeyId=ALMS%3Aalms-storage%40advancity.com.tr&amp;Expires=1707684425&amp;Signature=yH5P1ZHcLVxhbrK1liee1eAuCGQ%3D"
                      alt=""
                      style={{
                        width: "36px",
                        height: "36px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </button>
                <ul
                  className="dropdown-menu dd-bg"
                  style={{ borderWidth: "1px", borderColor: "white" }}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: "white", fontSize: "14px" }}
                    >
                      Profil Bilgileri
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: "white", fontSize: "14px" }}
                    >
                      Oturumu Kapat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mb-4 mx-3 small text-muted">© 2022 Tobeto</p>
          </div>
        </div>
      </div>
      <div className="corp-list-modal d-none">
        <div className="list">
          <div className="header">
            <span className="headerText">Kurumlar</span>
            <span className="closeBtn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6 6L18 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div className="corp-list row g-8 mt-6"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navi2;
