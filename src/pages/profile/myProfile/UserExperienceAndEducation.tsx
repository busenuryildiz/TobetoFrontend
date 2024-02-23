import React from "react";
import UserExperienceResponse from "./UserExperienceResponse";
import UserEducationResponse from "./UserEducationResponse";

const UserExperienceAndEducation = ({ experienceData, educationData }:{ experienceData: UserExperienceResponse[], educationData:UserEducationResponse[] } ) => {
  return (
    <div>
      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Eğitim ve Deneyim Bilgileri</span>
          </div>
          <hr />
        </div>
        <div className="timeline">
          {/* User Education */}
          <div className="line">
            {educationData.map((education, index) => (
              <div className="circle" key={index}>
                <div className="before">
                <div className="content">
                  <ul>
                    <li>
                      {education.beginningYear.slice(0, 4)}/
                      {education.graduationYear
                        ? education.graduationYear.slice(0, 4)
                        : "Devam Ediyor"}
                    </li>
                    <li className="text-truncate" style={{ maxWidth: 125 }}>
                      {education.university}
                    </li>
                    <li className="text-truncate" style={{ maxWidth: 125 }}>
                      {education.faculty}
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            ))}
          </div>

          {/* User Experience */}
          <div className="line">
            {experienceData.map((experience, index) => (
              <div className="circle2" key={index}>
                <div className="after">
                <div className="content">
                  <ul>
                    <li>
                      {experience.workBeginDate.slice(0, 4)}/
                      {experience.workEndDate
                        ? experience.workEndDate.slice(0, 4)
                        : "Devam Ediyor"}
                    </li>
                    <li className="text-truncate" style={{ maxWidth: 125 }}>
                      {experience.establishmentName}
                    </li>
                    <li className="text-truncate" style={{ maxWidth: 125 }}>
                      {experience.position}
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExperienceAndEducation;
