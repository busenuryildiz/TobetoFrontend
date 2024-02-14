import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/index";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
function Navi() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state:any) => state.auth);

  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <Navbar className="position-relative" expand="xxl" bg="white">
      <Container fluid className="mt-3 mb-3">
        <Navbar.Brand href="platform">
          <img
            src="/Assets/image/tobeto-logo.png"
            alt="Tobeto Logo"
            style={{
              width: "170px",
              height: "35px",
              objectFit: "cover",
              background: "transparent",
            }}
          />
        </Navbar.Brand>

        <button
          className="btn p-0 d-xxl-none navbar-burger"
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
              fill="#828282"
            />
          </svg>
        </button>

        <Nav className="d-none d-xxl-flex navbar-nav fw-medium">
          <Nav.Link
            href="platform"
            className={`nav-link me-3 c-gray-3 ${
              window.location.pathname === "/platform" ? "nav-active" : ""
            }`}
          >
            Ana Sayfa
          </Nav.Link>
          <Nav.Link
            href="profilim/profilimi-duzenle/kisisel-bilgilerim"
            className={`nav-link me-3 c-gray-3 ${
              window.location.pathname === "/profilim" ? "nav-active" : ""
            }`}
          >
            Profilim
          </Nav.Link>
          <Nav.Link
            href="degerlendirmeler"
            className={`nav-link me-3 c-gray-3 ${
              window.location.pathname === "/degerlendirmeler"
                ? "nav-active"
                : ""
            }`}
          >
            Değerlendirmeler
          </Nav.Link>
          <Nav.Link
            href="platform-katalog"
            className={`nav-link me-3 c-gray-3 ${
              window.location.pathname === "/platform-katalog"
                ? "nav-active"
                : ""
            }`}
          >
            Katalog
          </Nav.Link>
          <Nav.Link
            href="takvim"
            className={`nav-link me-3 c-gray-3 ${
              window.location.pathname === "/takvim" ? "nav-active" : ""
            }`}
          >
            Takvim
          </Nav.Link>
          <Nav.Link
            href="istanbul-kodluyor"
            className={`nav-link me-3 c-gray-3 ${
              window.location.pathname === "/istanbul-kodluyor"
                ? "nav-active"
                : ""
            }`}
          >
            İstanbul Kodluyor
          </Nav.Link>
        </Nav>

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
                  <p className="mb-0 name">{auth.user.firstName}</p>
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
                  <button
                    className="dropdown-item profil-dropdown"
                  >
                    Profil Bilgileri
                  </button>
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
                    style={{
                      backgroundColor: "rgba(100, 100, 100, 0.5)",
                      height: "1px",
                    }}
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
        </div>
      </Container>
    </Navbar>
  );
}

export default Navi;
