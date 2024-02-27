import React from "react";

const MySurveys = () => {
  return (
    <div className="col-12">
      <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade active show"
        id="mySurvey-tab-pane"
        role="tabpanel"
        aria-labelledby="mySurvey-tab"
        tabIndex={0}
      >
        <div className="row">
          <div className=" noDataCard">
            <p>Atanmış herhangi bir anketiniz bulunmamaktadır</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MySurveys;
