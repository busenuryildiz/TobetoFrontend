import React from 'react'

const MyExams = () => {
  return (
    <div>
         <section className="my-2">
            <div className="container">
              <div className="row cv-box cv-padding">
                <div className="col-12 position-relative">
                  <span className="exams-header">Sınavlarım</span>
                </div>
                <div className="exams my-3">
                  <div className="exam-card">
                    <div className="exam-header">
                      <span className="exam-name">
                        Herkes için Kodlama 1B Değerlendirme Sınavı
                      </span>
                      <span className="lesson-name">
                        Herkes İçin Kodlama - 1B
                      </span>
                    </div>
                    <div className="exam-details">
                      <div>
                        <span className="exam_time">45 Dakika</span>
                      </div>
                    </div>
                    <span className="status-done"></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default MyExams