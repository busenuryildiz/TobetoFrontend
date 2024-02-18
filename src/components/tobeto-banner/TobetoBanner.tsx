import React, { useState } from "react";
import TobetoVideo from "../tobeto-video/TobetoVideo";

const TobetoBanner = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleWatchClick = () => {
        setShowVideo(true); // Videoyu göster
      };

      const handleCloseVideo = () => {
        setShowVideo(false); // Videoyu kapat
    };

  return (
    <div>
      <div className="tobeto-banner" style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 999 }}>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <span className="text-white fw-bold">
                Tobeto ile geleceğini keşfet
              </span>
            </div>
            <div className="col-3">
              <button
                onClick={handleWatchClick}
                className="video-btn"
              >
                İzle
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5835 2.75L17.4168 11L4.5835 19.25V2.75Z"
                    stroke="#3171FF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showVideo && <TobetoVideo onClose={handleCloseVideo} />}
    </div>
  );
};

export default TobetoBanner;
