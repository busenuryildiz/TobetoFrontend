import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Redux store'dan bilgi almak için useSelector hook'unu kullanıyoruz
import { RootState } from "../../../store/index"; // Redux store'un root state'ini alıyoruz

import fetchStudentCourses from "../../../services/components/fetchStudentCourses";

interface Props {
  activeTab: string;
}
interface Course {
  Id: number;
  Name: string;
  ImagePath: string;
}
const LessonsTab: React.FC<Props> = ({ activeTab }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const studentId = user?.studentId; // Örnek öğrenci kimliği
    const pageIndex = 0;
    const pageSize = 10; // Örnek sayfa boyutu

    fetchStudentCourses(studentId, pageIndex, pageSize)
      .then((data) => {
        console.log("12421", data);
        setCourses(data); // Alınan kursları state'e atama
      })
      .catch((error) => {
        console.error("Dersler alınamadı:", error);
      });
  }, [user]); // Kullanıcı değiştiğinde veya bileşen oluşturulduğunda tekrar çağır

  return (
    <div
      className={`tab-pane fade ${
        activeTab === "lessons-tab-pane" ? "show active" : ""
      }`}
      id="lessons-tab-pane"
      role="tabpanel"
      aria-labelledby="lessons-tab"
      tabIndex={1}
    >
      <div className="row mt-3">
        <div className="col-12">
          <div className="tab-content" id="myTabContent">
            {/* All Lessons Tab Pane */}
            <div
              className={`tab-pane fade ${
                activeTab === "lessons-tab-pane" ? "show active" : ""
              }`}
              id="all-lessons-tab-pane"
              role="tabpanel"
              aria-labelledby="all-lessons-tab"
              tabIndex={1}
            >
              <div className="row">
                {courses.map((course) => (
                  <div key={course.Id} className="col-md-3 col-12 mb-4">
                    <div className="corp-edu-card">
                      <div
                        className="card-img"
                        style={{
                          backgroundImage: `url("${course.ImagePath}")`,
                        }}
                      ></div>
                      <div className="card-content">
                        <div className="d-flex flex-column">
                          <span>{course.Name}</span>
                          <span className="platform-course-date">
                            {/* Burada kurs tarih bilgisini gösterebilirsiniz */}
                          </span>
                        </div>
                        <a className="apply-btn" href="#">
                          Eğitime Git
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Started Tab Pane */}
            <div
              className="tab-pane fade"
              id="started-tab-pane"
              role="tabpanel"
              aria-labelledby="started-tab"
              tabIndex={0}
            >
              <div className="row">
                {/* Başlamış eğitim kartlarını ekleyin */}
              </div>
            </div>

            {/* Done Lessons Tab Pane */}

            <div
              className="tab-pane fade"
              id="done-lessons-tab-pane"
              role="tabpanel"
              aria-labelledby="done-lessons-tab"
              tabIndex={0}
            >
              <div className="row">
                {/* Tamamlanmış eğitim kartlarını ekleyin */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="showMoreBtn">Daha Fazla Göster</div>
    </div>
  );
};

export default LessonsTab;