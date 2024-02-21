import React from "react";
import UserCertificateResponse from "./UserCertificateResponse";



const UserCertificates = ({ certificates } : {certificates : UserCertificateResponse[]}) => {
  return (
    <div className="col-12">
      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <span>Sertifikalarım</span>
          <hr />
        </div>
        <div className="row">
          <div className="skills">
            {certificates.map((certificate) => (
              <span key={certificate.id} className="skill d-flex justify-content-between">
                <span className="me-2 text-truncate">{certificate.name}</span>
                <span className="me-0 png_icon text-center"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCertificates;