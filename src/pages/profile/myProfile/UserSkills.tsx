import { useState } from "react";

const UserSkills = ({ skills }: { skills: string[] }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

    return (
      <div className="col-12">
        <div className="cv-box cv-padding">
          <div className="cv-box-header">
            <div className="d-flex justify-content-between">
              <span>Yetkinliklerim</span>
              <span className="cv-see-icon" onClick={toggleModal} ></span>

            </div>
            <hr />
          </div>
          <div>
            <div className="skills">
              {skills.slice(0, 5).map((skill, index) => (
                <span key={index} className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {showModal && (
              <div>
              <div
                className="modal-backdrop fade show"
              ></div>
          <div role="dialog" aria-modal="true" className="fade modal show " tabIndex={-1} aria-labelledby="contained-modal-title-vcenter" style={{ display: "block", paddingRight: "10px" }}>
            <div className="modal-dialog modal-md modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <span className="grade-details-header">Tüm Yetkinliklerim</span>
                  <button type="button" className="btn-close" aria-label="Close" onClick={toggleModal}></button>
                </div>
                <div className="modal-body">
                  <div>
                    <div className="skills">
                      {skills.map((skill, index) => (
                        <span key={index} className="skill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    );
  };

  export default UserSkills;