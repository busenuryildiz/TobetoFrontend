import React from "react";

const NavTabs = ({ activeTab, handleTabClick }: any) => {
  return (
    <div>
      <div className="col-12 mb-4">
        <ul className="nav nav-tabs mainTablist " id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            {/* <button
              className="nav-link active"
              id="apply-tab"
              data-bs-toggle="tab"
              data-bs-target="#apply-tab-pane"
              type="button"
              role="tab"
              aria-controls="apply-tab-pane"
              aria-selected="true"
            >
              Başvurularım
            </button> */}
                   <button
              className={`nav-link ${activeTab === "applications-tab-pane" && "active"}`}
              onClick={() => handleTabClick("applications-tab-pane")}
              role="tab"
            >
              Başvurularım
            </button>
          </li>
          <li className="nav-item" role="presentation">
            {/* <button
              className="nav-link"
              id="lessons-tab"
              data-bs-toggle="tab"
              data-bs-target="#lessons-tab-pane"
              type="button"
              role="tab"
              aria-controls="lessons-tab-pane"
              aria-selected="false"
              tabIndex={-1}
            >
              Eğitimlerim
            </button> */}
              <button
              className={`nav-link ${activeTab === "lessons-tab-pane" && "active"}`}
              onClick={() => handleTabClick("lessons-tab-pane")}
              role="tab"
            >
              Eğitimlerim
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <div style={{ position: "relative" }} />
            {/* <button
              className="nav-link"
              id="notification-tab"
              data-bs-toggle="tab"
              data-bs-target="#notification-tab-pane"
              type="button"
              role="tab"
              aria-controls="notification-tab-pane"
              aria-selected="false"
              tabIndex={-1}
            >
              Duyuru ve Haberlerim
            </button> */}
                 <button
              className={`nav-link ${activeTab === "notification-tab-pane" && "active"}`}
              onClick={() => handleTabClick("notification-tab-pane")}
              role="tab"
            >
              Duyuru ve Haberlerim
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <div style={{ position: "relative" }} />
            {/* <button
              className="nav-link"
              id="mySurvey-tab"
              data-bs-toggle="tab"
              data-bs-target="#mySurvey-tab-pane"
              type="button"
              role="tab"
              aria-controls="mySurvey-tab-pane"
              aria-selected="false"
              tabIndex={-1}
            >
              Anketlerim
            </button> */}
                 <button
              className={`nav-link ${activeTab === "mySurvey-tab-pane" && "active"}`}
              onClick={() => handleTabClick("mySurvey-tab-pane")}
              role="tab"
            >
              Anketlerim
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavTabs;
