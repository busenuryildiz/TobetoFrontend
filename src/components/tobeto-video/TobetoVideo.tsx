import React from "react";

const TobetoVideo = ({onClose} :any) => {
  const handleClose = () => {
    const modalElement = document.getElementById("TobetoVideo");
    if (modalElement) {
      modalElement.classList.remove("show");
      const videoElement = modalElement.querySelector("video");
      if (videoElement) {
        videoElement.pause(); // Videoyu durdur
      }
    }
    onClose(); // Videoyu kapat
  };
  
  return (
    <div>
      <div
        className="modal fade show"
        id="TobetoVideo"
        data-bs-backdrop="static"
        aria-labelledby="TobetoVideoLabel"
        tabIndex={-1}
        style={{ display: "block", paddingRight: 10 }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content back-none border-0">
            <button
              type="button"
              className="btn-close btn-close-modal pause-video"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 5.5L5.5 16.5"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 5.5L16.5 16.5"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="modal-body p-0">
              <video
                width="100%"
                className="modal-height youtube-video"
                height={240}
                controls
                src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4"
              >
                <source
                  src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4"
                  type="video/mp4"
                />
                <source src="movie.ogg" type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TobetoVideo;
