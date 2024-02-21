import React from "react";
import UserProfileResponse from "./UserProfileResponse";

const IdentityCard = ({ userData }: { userData: UserProfileResponse }) => {

  const { firstName, lastName, imagePath, birthDate, email, phoneNumber } = userData;

  console.log(imagePath);

  return (
    <div>
      <div>
        <div className="col-12">
          <div className="cv-box">
            <div className="cv-pp ">
              <div className="area">
                <ul className="circles">
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
              <img
                src={userData.imagePath ? userData.imagePath : ""}
                className="cv-pp-img rounded-circle"
                style={{ width: 128, height: 128, objectFit: "cover" }}
                alt="user-profile-pctr"
              />
            </div>
            <div className="cv-info cv-padding">
              <div className="info-box">
                <div className="info-icon name" />
                <div className="info-text">
                  <span className="header">Ad Soyad</span>
                  <span className="text">
                    {firstName} {lastName}
                  </span>
                </div>
              </div>
              <div className="info-box">
                <div className="info-icon date" />
                <div className="info-text">
                  <span className="header">Doğum Tarihi</span>
                  <span className="text">
                    {birthDate
                      ? new Date(birthDate).toLocaleDateString("tr-TR")
                      : ""}
                  </span>
                </div>
              </div>
              <div className="info-box">
                <div className="info-icon mail" />
                <div className="info-text">
                  <span className="header">E-Posta Adresi</span>
                  <span className="text">{email}</span>
                </div>
              </div>
              <div className="info-box">
                <div className="info-icon phone" />
                <div className="info-text">
                  <span className="header">Telefon Numarası</span>
                  <span className="text">{phoneNumber}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityCard;
