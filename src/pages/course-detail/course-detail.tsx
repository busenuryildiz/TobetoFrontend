import React, { useState, useEffect } from "react";
import fetchCourseDetail from "../../services/course-detail/fetchCourseDetail";
import { useParams } from "react-router-dom";

import {
  Card,
  Row,
  Col,
  ProgressBar,
  Badge,
  Container,
  Tab,
  Tabs,
  Dropdown,
} from "react-bootstrap";

interface CourseDetail {
  id: number;
  name: string;
  imagePath: string;
  price: number;
  courseType: string;
  duration: number;
  classroom: string;
  courseId: string;
  courseLevelId: number;
  softwareLanguageId: number;
  courseParts: CoursePart[];
}

interface CoursePart {
  id: number;
  title: string;
  lessons: Lesson[];
}

interface Lesson {
  id: number;
  name: string;
  content: string;
  videoUrl: string;
  lessonTime: string;
}

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [courseDetail, setCourseDetail] = useState<CourseDetail | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);

  function convertToEmbeddedLink(inputLink: string) {
    const videoId = inputLink.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const data = await fetchCourseDetail(parseInt(id));
          setCourseDetail(data);
          // Default olarak ilk ders set edilir
          if (data && data.courseParts.length > 0) {
            setSelectedLessonId(data.courseParts.id);
          }
        }
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();

    // Cleanup function if necessary
    return () => {
      // Cleanup code
    };
  }, [id]);

  const handlePartSelection = (partId: number) => {
    setSelectedLessonId(partId);
    console.log("NUMBER ", partId);
    console.log("courseDetail ", courseDetail);
    console.log("selectedPartId ", selectedLessonId);
  };

  return (
    <div className="container">
      {courseDetail && (
        <Card className="my-10 p-3">
          <Row>
            <Col lg={2} md={2} sm={2} xs={12}>
              <Card.Img
                variant="top"
                src={courseDetail.imagePath}
                alt={courseDetail.name}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "15%",
                }}
              />
            </Col>

            <Col lg={10} md={10} sm={10} xs={12}>
              <Row>
                <Col>
                  <Card.Body>
                    <Card.Title>{courseDetail.name}</Card.Title>
                  </Card.Body>
                </Col>

                <Col xs={12}>
                  <Row className="">
                    <Col lg={7} md={7} sm={4} xs={12}>
                      <Card.Text>
                        Bitirmek için{" "}
                        <Badge text="white" bg="success">
                          {courseDetail.duration} günün var
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
                          <p className="h6 text-white">
                            {" "}
                            {courseDetail.price} Puan
                          </p>
                        </Badge>
                      </span>
                      <div className="d-inline-flex align-items-center">
                        <i className="bi fa-3x bi-heart-fill text-danger me-1"></i>
                        <span className="badge bg-danger text-white me-1">
                          <p className="text-white h6 px-1">
                            {" "}
                            {courseDetail.courseParts.length}{" "}
                          </p>
                        </span>
                        <i className="bi fa-3x  bi-bookmark-fill"></i>
                      </div>
                    </Col>
                  </Row>
                  <ProgressBar
                    now={Math.round(
                      (courseDetail.courseParts.length / 11) * 100
                    )} // Assuming 11 parts in total
                    label={`${Math.round(
                      (courseDetail.courseParts.length / 11) * 100
                    )}% Tamamlandı`}
                    className="w-100 mt-2"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      )}

      <Container>
        <Row>
          <Col xl={6}>
            <Tabs defaultActiveKey="tab1">
              <Tab eventKey="tab1" title="Genel">
                <div className="mt-4">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {courseDetail !== null &&
                        courseDetail &&
                        courseDetail.courseParts.map((part) => part.title)}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {courseDetail &&
                        courseDetail.courseParts.map((part) => (
                          <Dropdown.Item key={part.id}>
                            {courseDetail &&
                              courseDetail.courseParts.map((part) => (
                                <ul key={part.id} className="list-group mt-3">
                                  {part.lessons.map((lesson) => (
                                    <li
                                      onClick={function () {
                                        handlePartSelection(lesson.id);
                                        console.log("sagdsa ", lesson.id);
                                      }}
                                      key={lesson.id}
                                      className="list-group-item"
                                    >
                                      {lesson.name}
                                    </li>
                                  ))}
                                </ul>
                              ))}
                          </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div></div>
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
                    <strong>Eğitim Türü:</strong>{" "}
                    {courseDetail && courseDetail.courseType}
                  </p>

                  <p>
                    <strong>İçerik:</strong>{" "}
                    {courseDetail && courseDetail.courseParts.length} Video
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
              src={
                (courseDetail &&
                  selectedLessonId !== null &&
                  courseDetail.courseParts.find(
                    (part) => part.id === selectedLessonId
                  )?.lessons[0]?.videoUrl &&
                  convertToEmbeddedLink(
                    courseDetail.courseParts.find(
                      (part) => part.id === selectedLessonId
                    )?.lessons[0]?.videoUrl || "" // videoUrl undefined ise boş bir dize olarak ayarla
                  )) ||
                ""
              }
              width="560"
              height="315"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetailPage;
