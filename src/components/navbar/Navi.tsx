import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import photo from 'Assets/image/tobeto-logo.png';
function Navi() {


    return (
        <Navbar className="position-relative" expand="xxl" py-5 bg="white">
            <Container fluid>
            <Navbar.Brand href="platform">
                    <img
                        src="/Assets/image/tobeto-logo.png" 
                        alt="Tobeto Logo" 
                        style={{ width: '170px', height: '35px', objectFit: 'cover', background: 'transparent' }}
                    />
                </Navbar.Brand>

                <button
                    className="btn p-0 d-xxl-none navbar-burger"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" color="gray" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z"
                            fill="#828282"
                        />
                    </svg>
                </button>

                <Nav className="d-none d-xxl-flex navbar-nav">
                    <Nav.Link href="platform" className="nav-link nav-active">
                        Ana Sayfa
                    </Nav.Link>
                    <Nav.Link href="profilim" className="nav-link c-gray-3">
                        Profilim
                    </Nav.Link>
                    <Nav.Link href="degerlendirmeler" className="nav-link c-gray-3">
                        Değerlendirmeler
                    </Nav.Link>
                    <Nav.Link href="platform-katalog" className="nav-link c-gray-3">
                        Katalog
                    </Nav.Link>
                    <Nav.Link href="takvim" className="nav-link c-gray-3">
                        Takvim
                    </Nav.Link>
                    <Nav.Link href="istanbul-kodluyor" className="nav-link c-gray-3">
                        İstanbul Kodluyor
                    </Nav.Link>
                </Nav>

                <div className="d-none d-xxl-block">
            <div className="d-flex justify-space-between align-items-center">
                <div className="mx-3 align-items-center d-flex align-items-center" style={{ gap: '1em' }}>
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
                                src="https://tobeto-private.s3.cloud.ngn.com.tr/user-profile-photo/16290.png?AWSAccessKeyId=ALMS%3Aalms-storage%40advancity.com.tr&amp;Expires=1705414983&amp;Signature=d%2Bzba51iMV445EKJS3qHVdQelqc%3D"
                                alt=""
                                style={{ width: '36px', height: '36px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="me-3">
                            <p className="mb-0 name">Buse Yıldız</p>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                    <ul className="profile dropdown-menu">
                        <li>
                            <a className="dropdown-item profil-dropdown" href="#">
                                Profil Bilgileri
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" style={{ backgroundColor: 'rgb(204, 204, 204)', height: '1px' }} />
                        </li>
                        <li>
                            <hr
                                className="dropdown-divider"
                                style={{ backgroundColor: 'rgba(100, 100, 100, 0.5)', height: '1px' }}
                            />
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
            </Container>
        </Navbar>
    )
}

export default Navi