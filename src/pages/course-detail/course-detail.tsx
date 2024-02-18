import {
  Card,
  Row,
  Col,
  ProgressBar,
  Badge,
  Container,
  Tab,
  Tabs,
} from "react-bootstrap";
import "./Component.module.css";

const CourseDetail = () => {
  return (
    <div className="container">
      <Card className="my-10 p-3">
        <Row>
          <Col lg={2} md={2} sm={2} xs={12}>
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/100/100/100"
              alt=".NET & React Fullstack | Öğrenme Yolculuğu"
              style={{ objectFit: "cover", borderRadius: "50%" }} // Style updated for circular image
            />
          </Col>

          <Col lg={10} md={10} sm={10} xs={12}>
            {" "}
            {/* Column width updated */}
            <Row>
              <Col>
                <Card.Body>
                  <Card.Title>
                    .NET & React Fullstack | Öğrenme Yolculuğu
                  </Card.Title>
                </Card.Body>
              </Col>

              <Col xs={12}>
                <Row className="">
                  <Col lg={7} md={7} sm={4} xs={12}>
                    <Card.Text>
                      Bitirmek için{" "}
                      <Badge text="white" bg="success">
                        {11} günün var
                      </Badge>
                    </Card.Text>
                  </Col>
                  <Col
                    lg={5}
                    md={5} 
                    sm={8}
                    xs={12}
                    className=" d-flex justify-content-end "
                  >
                    <span className="mb-3">
                      <Badge text="white" className="h1 mt-3" bg="success">
                        <p className="h6 text-white"> {7.5} Puan</p>
                      </Badge>
                    </span>
                    <div className="d-inline-flex align-items-center">
                      <i className="bi fa-3x bi-heart-fill text-danger me-1"></i>
                      <span className="badge bg-danger text-white me-1">
                        <p className="text-white h6 px-1"> {56} </p>
                      </span>
                      <i className="bi fa-3x  bi-bookmark-fill"></i>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <ProgressBar
              now={7}
              label={`${7}% Tamamlandı`}
              className="w-100 mt-2"
            />
          </Col>
        </Row>
      </Card>
      <Container>
        <Row>
          <Col xl={6}>
            <Tabs defaultActiveKey="tab1">
              <Tab eventKey="tab1" title="Genel">
                <p>
                  İstanbul Kodluyor web sitesine giderek eğitmeleri
                  görüntüleyin.
                </p>
                <a href="https://istanbulkodluyor.org">Web sitesine git</a>
              </Tab>
              <Tab eventKey="tab2" title="Detaylar">
                <div className="mt-4">
                  <p>
                    <strong>Başlangıç:</strong> 8 EYL 2023 14:06
                  </p>
                  <p>
                    <strong>Bitiş:</strong> 31 MAR 2024 23:59
                  </p>
                  <p>
                    <strong>Geçirdiğin Süre:</strong> 2 dk
                  </p>
                  <p>
                    <strong>Tahmini Süre:</strong> 1 dk
                  </p>
                  <p>
                    <strong>Eğitim Türü:</strong> Eğitim
                  </p>
                  <p>
                    <strong>Kategori:</strong> Genel
                  </p>
                  <p>
                    <strong>İçerik:</strong> 1 Video
                  </p>
                  <p>
                    <strong>Üretici Firma:</strong> Kurum içi üretim
                  </p>
                </div>
              </Tab>
            </Tabs>
          </Col>
          <Col xl={6}>
            <iframe
              title="youtube"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              width="560"
              height="315"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetail;
