import React from "react";

interface ApplicationStatusProps {
  activeTab: string;
}

const ApplicationStatus: React.FC<ApplicationStatusProps> = ({ activeTab }) => {
  return (
    <div
      className={`tab-pane fade ${
        activeTab === "apply-tab-pane" ? "show active" : ""
      }`}
      id="apply-tab-pane"
      role="tabpanel"
      aria-labelledby="apply-tab"
      tabIndex={0}
    >
      <div className="row">
        <div className="col-md-6 col-12 mt-2">
          <div className="status-card status_accepted">
            <span className="form_name">İstanbul Kodluyor</span>
            <span className="form_status"></span>
            <span className="pull_back"></span>
            <span className="form_name">Bilgilendirme</span>
            <div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <i
                    className="fa fa-check fa-sm"
                    aria-hidden="true"
                    style={{
                      color: "green",
                      marginRight: "5px",
                    }}
                  ></i>
                  <span className="form_date">
                    {" "}
                    İstanbul Kodluyor Başvuru Formu onaylandı.
                  </span>
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <i
                    className="fa fa-check fa-sm"
                    aria-hidden="true"
                    style={{
                      color: "green",
                      marginRight: "5px",
                    }}
                  ></i>
                  <span className="form_date">
                    {" "}
                    İstanbul Kodluyor Belge Yükleme Formu onaylandı.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationStatus;
