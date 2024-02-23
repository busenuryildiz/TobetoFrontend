import React from 'react';

const UserBadges = ({ userBadges }: { userBadges: UserBadgesResponse[] }) => {

  return (
    <div className="col-12">
      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Yetkinlik Rozetlerim</span>
          </div>
          <hr />
        </div>
        <div className="row d-flex justify-content-start badge-container">
          {userBadges.map((userBadge, index) => (
            <div key={index} className="badge-card">
              <img className="img-fluid" src={userBadge.badgePath} alt={`Badge ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserBadges;
