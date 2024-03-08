import React, { useEffect, useState } from "react";
import Announcement from "./Announcement";
import axios from "axios";
import { Link } from "react-router-dom";
import AnnouncementDetailModal from "./AnnouncementDetailModal";
import { BASE_API_URL } from "../../enviroment/enviroment";

const MyAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get<{
          items: Announcement[];
        }>(`${BASE_API_URL}Announcements/GetList?PageSize=3`);

        setAnnouncements(response.data.items);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

 const fetchAnnouncementDetail = async (id:number) => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}Announcements/GetById?id=${id}`
      );
      setSelectedAnnouncement(response.data);
      setShowModal(true); // Modalı aç
    } catch (error) {
      console.error("Error fetching announcement details:", error);
    }
  };

  const handleReadMoreClick = (id:number) => {
    fetchAnnouncementDetail(id);
  };

  return (
    <div className="col-12">
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade active show"
          id="lessons-tab-pane"
          role="tabpanel"
          aria-labelledby="lessons-tab"
        >
          <div className="row mt-3">
            <div className="col-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="all-lessons-tab-pane"
                  role="tabpanel"
                  aria-labelledby="all-lessons-tab"
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
                <span className="date">
                  {new Date(announcement.createdDate).toLocaleDateString(
                    "tr-TR"
                  )}
                </span>
                <span
                  className="read-more"
                  onClick={() => handleReadMoreClick(announcement.id)}
                >
                  Devamını Oku
                </span>
              </div>
            </div>
          </div>
        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && selectedAnnouncement && (
        <AnnouncementDetailModal
          announcement={selectedAnnouncement}
          onClose={() => setShowModal(false)}
        />
      )}
      <Link to="/duyurular" className="showMoreBtn">
        Daha Fazla Göster
      </Link>
    </div>
  );
};

export default MyAnnouncements;
