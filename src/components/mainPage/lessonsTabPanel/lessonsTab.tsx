import React from 'react';

interface Props {
  activeTab: string;
}

const LessonsTab: React.FC<Props> = ({ activeTab }) => {
  return (
    <div
      className={`tab-pane fade ${activeTab === 'lessons-tab-pane' ? 'show active' : ''}`}
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
              className={`tab-pane fade ${activeTab === 'lessons-tab-pane' ? 'show active' : ''}`}
              id="all-lessons-tab-pane"
              role="tabpanel"
              aria-labelledby="all-lessons-tab"
              tabIndex={1}
            >
              <div className="row">
                <div className="col-md-3 col-12 mb-4">
                  <div className="corp-edu-card">
                    <div
                      className="card-img"
                      style={{
                        backgroundImage:
                          'url("https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg")',
                      }}
                    ></div>
                    <div className="card-content">
                      <div className="d-flex flex-column">
                        <span>Dr. Ecmel Ayral'dan Hoşgeldin Mesajı</span>
                        <span className="platform-course-date">21 Eylül 2023 15:20</span>
                      </div>
                      <a className="apply-btn" href="#">Eğitime Git</a>
                    </div>
                  </div>
                </div>
                {/* Diğer eğitim kartlarını ekleyin */}
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
}

export default LessonsTab;
