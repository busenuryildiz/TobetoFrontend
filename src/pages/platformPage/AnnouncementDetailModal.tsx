import React, { useState } from "react";
import Announcement from "./Announcement";

interface AnnouncementDetailModalProps {
    announcement: Announcement;
    onClose: () => void;
  }

const AnnouncementDetailModal = ({ announcement, onClose }:AnnouncementDetailModalProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <>
      {" "}
      <div className="fade modal-backdrop show"></div>
      <div
        role="dialog"
        aria-modal="true"
        className="fade modal show"
        tabIndex={-1}
        aria-labelledby="contained-modal-title-vcenter"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-lg modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <div className="d-flex flex-column" style={{ gap: "8px" }}>
                <span
                  className="text-dark"
                  style={{ fontSize: "1em", fontWeight: "600" }}
                >
                  {announcement.name}
                </span>
              </div>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="news-body modal-body">
              <p>{announcement.description}</p>
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementDetailModal;
