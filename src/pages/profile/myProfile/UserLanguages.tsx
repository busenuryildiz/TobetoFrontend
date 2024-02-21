import React from 'react'
import UserLanguageResponse from './UserLanguageResponse';

const UserLanguages = ({userLanguages}: {userLanguages : UserLanguageResponse[]}) => {

    return (
        <div className="col-12">
          <div className="cv-box cv-padding">
            <div className="cv-box-header">
              <div className="d-flex justify-content-between">
                <span>Yabancı Dillerim</span>
              </div>
              <hr />
            </div>
            <div className="my-langs">
              {userLanguages.map((userLanguages, index) => (
                <div className="lang w-100" key={index}>
                  <div className="lang-info">
                    <div className="lang-title">
                      <div className="d-flex flex-column">
                        <span className="lang-name">{userLanguages.languageName}</span>
                        <span className="lang-degree">{userLanguages.languageLevelName}</span>
                      </div>
                    </div>
                  </div>
                  <span className="lang-degree-symbol main-lang"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default UserLanguages;