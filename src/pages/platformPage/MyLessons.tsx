import React, { useEffect, useState } from "react";
import Course from "./Course";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BASE_API_URL } from "../../enviroment/enviroment";

const MyLessons = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const user = useSelector((state: any) => state.auth.user);
  const { studentCourseId } = useParams<{ studentCourseId: string }>();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get<Course[]>(
          `${BASE_API_URL}StudentCourses/GetStudentsAllCoursesByUserId?userId=${user.id}`
        );
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div className="col-12">
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade active show" id="lessons-tab-pane" role="tabpanel" aria-labelledby="lessons-tab">
          <div className="row mt-3">
            <div className="col-12">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="all-lessons-tab-pane" role="tabpanel" aria-labelledby="all-lessons-tab">
                <div className="row">
        {courses &&
          courses.slice(0, 4).map((course) => (
            <div className="col-md-3 col-12 mb-4" key={course.studentCourseId}>
              <div className="corp-edu-card">
                <div
                  className="card-img"
                  style={{
                    backgroundImage: `url(${course.courseImagePath || ""})`,
                  }}
                ></div>
                <div className="card-content">
                  <div className="d-flex flex-column">
                    <span>{course.courseName}</span>
                    <span className="platform-course-date">
                    {new Date(course.courseDate).toLocaleDateString("tr-TR")}
                    </span> 
                  </div>
                  <Link className="apply-btn" to={`/egitimlerim/${course.studentCourseId}`}>
                    Eğitime Git
                  </Link>
                </div>

              </div>
            </div>
          ))}
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
      </div>
      <Link to="/egitimlerim" className="showMoreBtn">
        Daha Fazla Göster
      </Link>
    </div>
  );
};

export default MyLessons;
