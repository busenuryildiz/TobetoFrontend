import React from 'react';

interface Props {
  activeTab: string;
}

const MySurveyTab: React.FC<Props> = ({ activeTab }) => {
  return (
    <div
      className={`tab-pane fade ${activeTab === 'mySurvey-tab-pane' ? 'show active' : ''}`}
      id="mySurvey-tab-pane"
      role="tabpanel"
      aria-labelledby="mySurvey-tab"
      tabIndex={0}
    >
      <div className="row">
        <div className="noDataCard">
          <p>Atanmış herhangi bir anketiniz bulunmamaktadır</p>
        </div>
      </div>
    </div>
  );
}

export default MySurveyTab;
