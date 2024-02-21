import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  CourseItem,
  fetchStudentCourses,
} from "../../services/student-courses/fetchStudentCourses";

import {
  Row,
  Col,
  FormControl,
  InputGroup,
  Button,
  Card,
} from "react-bootstrap";

export default function Egitimlerim() {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const studentId = "23ac076d-ce90-4401-4e39-08dc306145e4"; // Öğrenci kimliği
    const pageIndex = 0;
    const pageSize = 10;

    // Dersleri çekme işlemi
    fetchStudentCourses(studentId, pageIndex, pageSize)
      .then((data) => {
        console.log("dadsag ", data);
        setCourses(data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, []); // Komponent yüklendiğinde sadece bir kez çalışacak

  return (
    <div>
      {" "}
      <div
        className="back-white"
        style={{ width: "100%", height: "0.5rem", overflow: "visible" }}
      >
        <nav className="position-relative navbar navbar-expand-xxl py-5 bg-white">
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
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27170%27%20height=%2735%27/%3e"
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
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              className="btn p-0 d-xxl-none navbar-burger"
            >
              <svg
                width={24}
                height={24}
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
                />
              </svg>
            </button>
            <ul className="d-none d-xxl-flex navbar-nav">
              <li className="nav-item">
                <a className="nav-link c-gray-3" href="#">
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
                  <span className="tbt-gradient" />
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
                        src="https://tobeto-private.s3.cloud.ngn.com.tr/user-profile-photo/11666.png?AWSAccessKeyId=ALMS%3Aalms-storage%40advancity.com.tr&Expires=1708452457&Signature=58tAiPhtGk9iS2SrgkYKmCyuJZE%3D"
                        alt=""
                        style={{ width: 36, height: 36, objectFit: "cover" }}
                      />
                    </div>
                    <div className="me-3">
                      <p className="mb-0 name">Kerem PEKARLI</p>
                    </div>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        className=""
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="#828282"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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
                      <hr
                        className="dropdown-divider"
                        style={{
                          backgroundColor: "rgb(204, 204, 204)",
                          height: 1,
                        }}
                      />
                    </li>
                    <li>
                      <hr
                        className="dropdown-divider"
                        style={{
                          backgroundColor: "rgba(100, 100, 100, 0.5)",
                          height: 1,
                        }}
                      />
                    </li>
                    <li>
                      <a className="dropdown-item profil-dropdown" href="#">
                        Oturumu Kapat{" "}
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
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
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
              <div className="mt-auto ">
                <div className="my-3 py-3 border-top border-light align-items-center d-flex align-items-center">
                  <a className="text-decoration-none c-gray-3 mx-3" href="#">
                    Tobeto
                    <svg
                      width={20}
                      height={20}
                      href="#"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z"
                        stroke="#959595"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 18.3333V10H12.5V18.3333"
                        stroke="#959595"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
                          src="https://tobeto-private.s3.cloud.ngn.com.tr/user-profile-photo/11666.png?AWSAccessKeyId=ALMS%3Aalms-storage%40advancity.com.tr&Expires=1708452457&Signature=58tAiPhtGk9iS2SrgkYKmCyuJZE%3D"
                          alt=""
                          style={{ width: 36, height: 36, objectFit: "cover" }}
                        />
                      </div>
                    </button>
                    <ul
                      className="dropdown-menu dd-bg"
                      style={{ borderWidth: 1, borderColor: "white" }}
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ color: "white", fontSize: 14 }}
                        >
                          Profil Bilgileri
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ color: "white", fontSize: 14 }}
                        >
                          Oturumu Kapat{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mb-4 mx-3 small text-muted">© 2022 Tobeto</p>
              </div>
            </div>
          </div>
          <div className="corp-list-modal d-none ">
            <div className="list">
              <div className="header">
                <span className="headerText">Kurumlar</span>
                <span className="closeBtn">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="corp-list row g-8 mt-6" />
            </div>
          </div>
        </nav>
        <div className="dropdown custom-dropdown">
          <div className="dropdown-menu ">
            <div className="mega-menu ">
              <div className="notification-content">
                <div className="user-form done">
                  <div className="d-flex flex-column">
                    <div className="form-name">Form ismi</div>
                    <div className="form-date">23.01.2023</div>
                  </div>
                  <a className="form-button" href="/egitimlerim" />
                </div>
                <div className="user-form pending">
                  <div className="d-flex flex-column">
                    <div className="form-name">Form ismi</div>
                    <div className="form-date">23.01.2023</div>
                  </div>
                  <a className="form-button" href="/egitimlerim" />
                </div>
                <div className="user-form notdone">
                  <div className="d-flex flex-column">
                    <div className="form-name">Form ismi</div>
                    <div className="form-date">23.01.2023</div>
                  </div>
                  <a className="form-button" href="/egitimlerim" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="container-fluid">
            <div className="page-banner-card">
              <div className="container">
                <div className="row">
                  <span>Eğitimlerim</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{ minHeight: "100vh" }}>
            <div className="filter-section mt-3">
              <Row>
                <Col md={5} xs={12} className="mb-4">
                  <InputGroup>
                    <FormControl placeholder="Arama" />
                    <Button variant="outline-secondary">
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.125 26.125C21.2001 26.125 26.125 21.2001 26.125 15.125C26.125 9.04987 21.2001 4.125 15.125 4.125C9.04987 4.125 4.125 9.04987 4.125 15.125C4.125 21.2001 9.04987 26.125 15.125 26.125Z"
                          stroke="#828282"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M28.8758 28.8748L22.8945 22.8936"
                          stroke="#828282"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M28.8758 28.8748L22.8945 22.8936"
                          stroke="#828282"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </Button>
                  </InputGroup>
                </Col>
                <Col md={3} xs={12} className="mb-4">
                  <InputGroup>
                    <FormControl as="select">
                      <option>Kurum Seçiniz</option>
                    </FormControl>
                  </InputGroup>
                </Col>
                <Col md={3} xs={12} className="mb-4">
                  <InputGroup>
                    <FormControl as="select">
                      <option>Adına Göre (A-Z)</option>
                    </FormControl>
                  </InputGroup>
                </Col>
              </Row>
            </div>
            <div className="row mt-3">
              <div className="col-12 mb-4">
                <ul
                  className="nav nav-tabs mainTablist d-flex justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="all-lessons-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#all-lessons-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="all-lessons-tab-pane"
                      aria-selected="true"
                    >
                      Tüm Eğitimlerim
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link "
                      id="started-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#started-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="started-tab-pane"
                      aria-selected="false"
                    >
                      Devam Ettiklerim
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link "
                      id="done-lessons-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#done-lessons-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="done-lessons-tab-pane"
                      aria-selected="false"
                    >
                      Tamamladıklarım
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="all-lessons-tab-pane"
                    role="tabpanel"
                    aria-labelledby="all-lessons-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      {/* CART CONTENT  */}
                      {courses &&
                        courses.map((course) => (
                          <div className="col-md-3 col-12 mb-4">
                            <Card className="corp-edu-card">
                              <div
                                className="card-img"
                                style={{
                                  backgroundImage: `url("${course?.course?.ImagePath}")`,
                                }}
                                onClick={() =>
                                  console.log("sdgs ", course?.course)
                                }
                              />
                              <Card.Body className="card-content">
                                <div className="d-flex flex-column">
                                  <Card.Title>
                                    {course?.course?.Name}
                                  </Card.Title>
                                  <Card.Text className="platform-course-date">
                                    {course?.course.Id}
                                  </Card.Text>
                                </div>
                                <Button
                                  variant="primary"
                                  href="#"
                                  onClick={() =>
                                    navigate("/course/" + course?.course.Id)
                                  }
                                >
                                  Eğitime Git
                                </Button>
                              </Card.Body>
                            </Card>
                          </div>
                        ))}
                      {/* EMD CART CONTENT   */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className="bg-secondary py-5">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-6 col-lg-4 mb-lg-0 my-4">
                <a className="d-block mobile-text-center navbar-brand" href="#">
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
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%2721%27/%3e"
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
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=128&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75 2x"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75"
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
              <div className="col-6 col-lg-8 my-4">
                <ul className="list-unstyled mb-0 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end">
                  <li className=" mb-lg-0">
                    <a className="btn btn-light-light" href="#">
                      Bize Ulaşın
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <p className="d-lg-none small text-white text-center">
                  © 2022 Tobeto{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
