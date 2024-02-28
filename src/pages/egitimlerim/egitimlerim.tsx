import { useState, useEffect } from "react";
import Footer3 from "../../components/footer/Footer3";
import Navi from "../../components/navbar/Navi";
import FilterSection from "./FilterSection";
import { useSelector } from "react-redux";
import axios from "axios";
import Course from "../platformPage/Course";
import EducationTab from "./EducationTabs";
import EducationTabs from "./EducationTabs";
import { Link } from "react-router-dom";

const tabs = [
  { id: "all-lessons-tab-pane", label: "Tüm Eğitimlerim" },
  { id: "started-tab-pane", label: "Devam Ettiklerim" },
  { id: "done-lessons-tab-pane", label: "Tamamladıklarım" }
];

const Egitimlerim = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const user = useSelector((state: any) => state.auth.user);
  const [activeTab, setActiveTab] = useState<string>("all-lessons-tab-pane");

  useEffect(() => {
    fetchCourses("all"); // Fetch all courses initially
  }, []);

  const fetchCourses = (type:string) => {
    let url = "";
    switch (type) {
      case "all":
        url = `http://localhost:6280/api/StudentCourses/GetStudentsAllCoursesByUserId?userId=${user.id}`;
        break;
      case "ongoing":
        url = `http://localhost:6280/api/StudentCourses/GetStudentsOngoingCoursesByUserId?userId=${user.id}`;
        break;
      case "completed":
        url = `http://localhost:6280/api/StudentCourses/GetStudentsCompletedCoursesByUserId?userId=${user.id}`;
        break;
      default:
        break;
    }
    axios.get(url)
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }

  const handleTabClick = ({type, tabId}:{type:string,tabId:string}) => {
    setActiveTab(tabId);
    fetchCourses(type);
  }

  return (
    <>
      <Navi />
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
          <FilterSection />
          <div className="row mt-3">

          <EducationTabs activeTab ={activeTab} handleTabClick={handleTabClick} />
            <div className="col-12">
              <div className="tab-content">
              {tabs.map(tab => (

                <div
                key={tab.id}
                  className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}
                  id={tab.id}
                  role="tabpanel"
                  aria-labelledby={tab.id}
                  >
                  <div className="row">
                    {courses.map((course) => (
                      <div
                        className="col-md-3 col-12 mb-4"
                        key={course.studentCourseId}
                      >
                        <div className="corp-edu-card">
                          <div
                            className="card-img"
                            style={{
                              backgroundImage: `url(${course.courseImagePath})`,
                            }}
                          ></div>
                          <div className="card-content">
                            <div className="d-flex flex-column">
                              <span>{course.courseName}</span>
                              <span className="platform-course-date">
                                {new Date(
                                  course.courseDate
                                ).toLocaleDateString()}
                              </span>
                            </div>
                            <Link  to={`/egitimlerim/${course.studentCourseId}`} className="apply-btn">
                              Eğitime Git
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                  ))}

              </div>
              
            </div>
          </div>
          
        </div>
      </main>
      <Footer3 />
    </>
  );
};

export default Egitimlerim;
