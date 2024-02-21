import React from 'react';

const AboutMe = ({ description }:any) => {
  return (
    <div className="col-12">
      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <span>Hakkımda</span>
          <hr />
        </div>
        <p id="user_desc" className="cv-desc">{description}</p>
      </div>
    </div>
  );
};

export default AboutMe;
