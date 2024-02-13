import React, { useEffect, useState } from "react";
import axiosHelper from "../../../helpers/axiosHelper";
import Modal from "react-modal";

interface Announcement {
  id: number;
  name: string;
  description: string;
}
interface Props {
  activeTab: string;
}

const NotificationTab: React.FC<Props> = ({ activeTab }) => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<Announcement | null>(null);

  const closeModal = () => {
    setSelectedAnnouncement(null);
  };
  const isOpen = () => selectedAnnouncement !== null;

  useEffect(() => {
    // API'den verileri çekme işlemi
    const fetchAnnouncements = async () => {
      try {
        const response = await axiosHelper.get(
          "/Announcements/GetList?PageIndex=0&PageSize=10"
        );
        setAnnouncements(response.data.items); // Verileri state'e kaydetme
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements(); // useEffect içinde çağırarak component yüklendiğinde verileri çek
  }, []);
  const handleReadMoreClick = (announcement: Announcement) => {
    console.log("workedd");
    setSelectedAnnouncement(announcement);
    console.log("workedd ", selectedAnnouncement);
    // Modalı açma işlemleri burada gerçekleştirilebilir
  };
  return (
    <div
      className={`tab-pane fade ${
        activeTab === "notification-tab-pane" ? "show active" : ""
      }`}
      id="notification-tab-pane"
      role="tabpanel"
      aria-labelledby="notification-tab"
      tabIndex={0}
    >
      <div className="row">
        {announcements.map((announcement) => (
          <div className="col-md-4 col-12 my-4" key={announcement.id}>
            <div className="notfy-card notify">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between mb-4">
                  <span className="type">Duyuru</span>
                  <span className="corp-names type">İstanbul Kodluyor</span>
                </div>
                <span className="header">{announcement.name}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="date">15.12.23</span>
                <span
                  className="read-more"
                  onClick={() => handleReadMoreClick(announcement)}
                >
                  Devamını Oku
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="showMoreBtn">Daha Fazla Göster</div>
      </div>

      {/* Modal componenti buraya gelecek */}

      {/* React Modal */}
      {/* Modal componenti buraya gelecek */}
      <Modal
        isOpen={isOpen()}
        onRequestClose={() => {
          closeModal();
        }}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            borderRadius: "10px",
            padding: "20px",
          },
        }}
      >
        {selectedAnnouncement && (
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fs-5 fw-bold">
                {selectedAnnouncement.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body p-4">
              <p>{selectedAnnouncement.description}</p>
             
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default NotificationTab;
