// ExamResult.jsx
import React from "react";

const UserExam = ({ examResults }: { examResults: UserExamResponse[] }) => {
  return (
    <div className="col-12">
      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Tobeto Seviye Testlerim</span>
          </div>
          <hr />
        </div>
        <div className="row g-4">
          <div className="envantoryList">
            {examResults.map((examResult, index) => (
              <div className="envantory-result" key={index}>
                <div className="d-flex justify-content-between w-100">
                  <span className="examName">{examResult.examTitle}</span>
                  <span className="examTime">{examResult.examDate}</span>
                  <span className="examResult">{examResult.examResult}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExam;
