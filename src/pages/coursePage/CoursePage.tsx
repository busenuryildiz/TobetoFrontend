import React, { useEffect, useState } from "react";
import {
  faHeart,
  faBookmark,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { faStar, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CoursePageHeader from "./CoursePageHeader";
import { useParams } from "react-router";
import axios from "axios";
import "./CoursePageCss.css";
import CoursesAllLessonInfoResponse from "./Interfaces/CoursesAllLessonInfoResponse";
import ReactPlayer from "react-player";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import LessonDetailModal from "./LessonDetailModal";
import { Modal } from "react-bootstrap";
import { Drawer } from "antd";

function CoursePage() {
  const { studentCourseId } = useParams();
  const [courseData, setCourseData] = useState<CoursesAllLessonInfoResponse | null>(null);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number | null>(null);
  const [selectedLessonDetails, setSelectedLessonDetails] = useState<any>(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [endDateString, setEndDateString] = useState<string | null>(null);
  const [startDateString, setStartDateString] = useState<string | null>(null);
  const [likeCount, setLikeCount] = useState<number | null>(null);
  const [detailModal, setDetailModal] = useState(false);

const coursId = courseData?.courseId;
const isCourseLiked = courseData?.studentCourseIsLiked;

  useEffect(() => {
    axios
      .get(
        `http://localhost:6280/api/StudentCourses/GetStudentsCourseAllInfo?studentCourseId=${studentCourseId}`
      )
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, [studentCourseId]);

  useEffect(() => {
    if (
      courseData &&
      courseData.getListLessonResponses &&
      courseData.getListLessonResponses.length > 0
    ) {
      handleLessonSelect(courseData.getListLessonResponses[0].id);
    }
  }, [courseData]);

  useEffect(() => {
    if (courseData?.studentCourseStartDate) {
      const startDateObj = new Date(courseData.studentCourseStartDate);
      const endDateObj = new Date(
        startDateObj.setMonth(startDateObj.getMonth() + 5)
      );
      const endDateString = `${endDateObj.getDate()}/${
        endDateObj.getMonth() + 4
      }/${endDateObj.getFullYear()}`;
      const startDateString = `${startDateObj.getDate()}/${
        startDateObj.getMonth() + 1
      }/${startDateObj.getFullYear()}`;
      setEndDateString(endDateString);
      setStartDateString(startDateString);
    }
  }, [courseData]);

  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const response = await axios.get(
          `http://localhost:6280/api/StudentCourses/GetIsLikedCountByCourseIdAsync?courseId=${coursId}`
        );
        setLikeCount(response.data);
      } catch (error) {
        console.error("Error fetching like count:", error);
      }
    };

    fetchLikeCount();
  }, [coursId]);

  const handleLessonSelect = async (lessonIndex: number) => {
    setSelectedLessonIndex(lessonIndex);
    const lessonId = lessonIndex;
    if (lessonId) {
      try {
        const response = await axios.get(
          `http://localhost:6280/api/Lessons/GetById?id=${lessonId}`
        );
        setSelectedLessonDetails(response.data);
      } catch (error) {
        console.error("Error fetching lesson details:", error);
      }
    }
  };

  const handleTabSelect = (index: any) => {
    setSelectedTabIndex(index);
  };

  const onClickClose = () => {
    setDetailModal(false)
  }
  const onClickShow = () => {
    setDetailModal(true)
  }


  
  return (
    <div id="root">
      <div
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          margin: "20px auto",
          padding: "0 20px",
          minHeight: "100vh",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <div
          className="wrapper whitout-slide"
          style={{
            position: "relative",
            margin: "0 auto",
            padding: "0 20px",
            minHeight: "100vh",
            height: "auto",
            overflow: "hidden",
          }}
        >
          <div
            className="content"
            style={{
              padding: "40px 0",
              WebkitBorderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              display: "inline-block",
              verticalAlign: "middle",
              width: "100%",
              height: "auto",
            }}
          >
            <CoursePageHeader
              courseName={courseData?.courseName}
              studentCourseProgress={courseData?.studentCourseProgress}
              studentCourseIsSaved={courseData?.studentCourseIsSaved}
              courseImagePath={courseData?.courseImagePath}
              likeCount={likeCount}
              isCourseLiked={isCourseLiked}
            />
            <Tabs selectedIndex={selectedTabIndex} onSelect={handleTabSelect}>
              <TabList style={{ display: "flex", listStyleType: "none" }}>
                <Tab
                  style={{
                    marginRight: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  İçerik
                </Tab>
                <Tab
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Hakkında
                </Tab>
              </TabList>

              <TabPanel>
                <div className="activity-detail-tabs mt-4">
                  <div className="row">
                    <div className="col-md-4">
                      <div
                        style={{
                          overflowY: "scroll",
                          maxHeight: "500px",
                          marginLeft: "30px",
                        }}
                      >
                        <h4
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {courseData?.courseName}
                        </h4>
                        {courseData?.getListLessonResponses &&
                          courseData.getListLessonResponses.map(
                            (lesson, index) => (
                              <div key={index}>
                                <div
                                  onClick={() => handleLessonSelect(lesson.id)}

                                  style={{
                                    marginRight: "20px",
                                    padding: "10px 20px",
                                    backgroundColor: "#f0f0f0",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    marginBottom:"5px"
                                  }}
                                >
                                  {lesson.name}
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </div>
                    <div className="col-md-8" style={{ paddingLeft: '40px' }}>
                      {selectedLessonIndex !== null &&
                        selectedLessonDetails && (
                          <div
                            className="video-card"
                            style={{
                              borderRadius: "8px",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                              backgroundColor: "#fff",
                              marginBottom: "20px",
                              padding: "0",
                            }}
                          >
                            <ReactPlayer
                              url={selectedLessonDetails.videoUrl}
                              controls
                              width="100%"
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "20px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "flex-start",
                                  marginBottom: "10px",
                                }}
                              >
                                <div>
                                  <h4 style={{ marginBottom: "0" }}>
                                    {selectedLessonDetails.name}
                                  </h4>
                                  <p style={{ marginBottom: "0" }}>
                                    Video -{" "}
                                    {selectedLessonDetails.lessonDuration} dk
                                  </p>
                                </div>
                                <div   onClick={onClickShow} style={{
                                    marginRight: "20px",
                                    padding: "10px 20px",
                                    backgroundColor: "#f0f0f0",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    marginBottom:"5px"
                                  }}>Detay</div>
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
              <div style={{ padding: '0 20px', width: '100%' }}>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Başlangıç Tarihi: {startDateString}</p>
                  <p style={{ fontWeight: 'bold' }}>Bitiş Tarihi: {endDateString}</p>
                  <p style={{ fontWeight: 'bold' }}>Geçirdiğin Süre: {courseData?.studentCourseSpentTime}</p>
                  <p style={{ fontWeight: 'bold' }}>Tahmini Süre: {courseData?.studentCourseEstimatedTime}</p>
                  <p style={{ fontWeight: 'bold' }}>Kategori: {courseData?.courseCategoryNames}</p>
                  <p style={{ fontWeight: 'bold' }}>Üretici Firma: {courseData?.courseProducerCompany}</p>
                  <p style={{ fontWeight: 'bold' }}>Eğitim Türü: Video</p>
                </div>
                </div>
              </TabPanel>
              <Drawer title="Course Details" placement="right" onClose={onClickClose} open={detailModal} width={800}>
            <p><strong>Kategori:</strong> {courseData?.courseCategoryNames}</p>
          <p><strong>Dili:</strong> Türkçe</p>
          <p><strong>Alt Tip:</strong> Konu Uzmanı Videosu</p>
          <p><strong>Üretici Firma:</strong> {courseData?.courseProducerCompany}</p>
          <p><strong>İçerik:</strong> 
              {courseData?.getListLessonResponses?.map((lesson:any) => 
                lesson.id === selectedLessonIndex ? lesson.content : null
              )}
            </p>
          <p><strong>İlgi Alanları:</strong> {courseData?.areasOfInterest}</p>
          <p><strong>Konuşmacı:</strong> {courseData?.getListLessonResponses?.map((lesson:any) => lesson.id === selectedLessonIndex ? lesson.speaker : null)}</p>
          <p><strong>Konuşmacı Hakkında:</strong> {courseData?.getListLessonResponses?.map((lesson:any) => lesson.id === selectedLessonIndex ? lesson.aboutSpeaker : null)}</p>
          </Drawer>
            </Tabs>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
