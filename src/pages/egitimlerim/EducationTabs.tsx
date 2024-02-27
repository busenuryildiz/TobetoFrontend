import React from "react";


const EducationTabs = ({activeTab, handleTabClick}:any) => {
  return (
    <div className="col-12 mb-4">
      <ul
        className="nav nav-tabs mainTablist d-flex justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "all-lessons-tab-pane" ? "active" : ""}`}
            id="all-lessons-tab"
            data-bs-toggle="tab"
            data-bs-target="#all-lessons-tab-pane"
            type="button"
            role="tab"
            aria-controls="all-lessons-tab-pane"
            aria-selected={activeTab === "all-lessons-tab-pane" ? "true" : "false"}
            onClick={() => handleTabClick({ type: "all", tabId: "all-lessons-tab-pane" })}
          >
            Tüm Eğitimlerim
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "started-tab-pane" ? "active" : ""}`}
            id="started-tab"
            data-bs-toggle="tab"
            data-bs-target="#started-tab-pane"
            type="button"
            role="tab"
            aria-controls="started-tab-pane"
            aria-selected={activeTab === "started-tab-pane" ? "true" : "false"}
            onClick={() => handleTabClick({ type: "ongoing", tabId: "started-tab-pane" })}

          >
            Devam Ettiklerim
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "done-lessons-tab-pane" ? "active" : ""}`}
            id="done-lessons-tab"
            data-bs-toggle="tab"
            data-bs-target="#done-lessons-tab-pane"
            type="button"
            role="tab"
            aria-controls="done-lessons-tab-pane"
            aria-selected={activeTab === "done-lessons-tab-pane" ? "true" : "false"}
            onClick={() => handleTabClick({ type: "completed", tabId: "done-lessons-tab-pane" })}
          >
            Tamamladıklarım
          </button>
        </li>
      </ul>
    </div>
  );
};

export default EducationTabs;
