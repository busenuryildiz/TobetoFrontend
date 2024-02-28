import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CoursePageHeader = ({courseName,studentCourseProgress,studentCourseIsSaved,courseImagePath}:any) => {

  return (
    <>
      <div
        className="page-content activity-detail"
        style={{
          WebkitBorderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          display: "inline-block",
          verticalAlign: "middle",
          width: "100%",
          height: "auto",
          padding: "20px",
          marginBottom: "50px",
        }}
      >
        <div className="activity-detail-header">
          <div
            className="row"
            style={{
              marginRight: "-0.5rem !important",
              marginLeft: "-0.5rem !important",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <div className="col-lg-1 col-md-1 col-sm-2 col-xs-12 show-text-lg show-text-md show-text-sm hidden-text-xs">
              <img
                className="activity-image"
                src={courseImagePath}
                alt={courseName}
                style={{
                  WebkitBorderRadius: "8px",
                  width: "100%",
                  height: "auto",
                  verticalAlign: "middle",
                  borderStyle: "none",
                }}
              />
            </div>
            <div className="col-lg-11 col-md-11 col-sm-10 col-xs-12">
              <div
                className="row"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <div
                  className="col-xs-12"
                  style={{ flexBasis: "100%", maxWidth: "100%" }}
                >
                  <div
                    className="row"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    <div className="col-lg-7 col-md-7 col-sm-4 col-xs-12">
                      <div
                        className="activity-info"
                        style={{
                          marginRight: "0",
                          marginBottom: "10px",
                          display: "block",
                          verticalAlign: "middle",
                        }}
                        data-gtm-vis-first-on-screen103964688_7="3292"
                        data-gtm-vis-recent-on-screen103964688_7="4029578"
                        data-gtm-vis-total-visible-time103964688_7="100"
                        data-gtm-vis-has-fired103964688_7="1"
                      >
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#000",
                          }}
                        >
                          {courseName}
                        </h3>
                        <div
                          className="date-info-container"
                          style={{ width: "fit-content" }}
                        >
                          <span>
                            <div
                              className="date-info text-green"
                              style={{
                                marginTop: "15px",
                                fontWeight: "700",
                                display: "flex",
                                color: "green",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faThumbsUp}
                                style={{
                                  marginRight: "4px",
                                  paddingTop: "2px",
                                  color: "green",
                                }}
                              />
                              <span>Başardın</span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="activity-process col-lg-5 col-md-5 col-sm-8 col-xs-12 text-lg-right text-md-right text-sm-right text-xs-center">
                      <div
                        className="ant-space ant-space-horizontal ant-space-align-center"
                        style={{
                          gap: "15px",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <div className="ant-space-item">
                          <div
                            className="activity-score text-white background-green activity-score-fixed"
                            style={{
                              background: "#3dcb79",
                              display: "inline-block",
                              verticalAlign: "middle",
                              WebkitBorderRadius: "5px",
                              padding: "8px 5px",
                              fontSize: "16px",
                              fontWeight: "600",
                              textAlign: "center",
                              marginRight: "12px",
                            }}
                          >
                            <span
                              className="account-balance"
                              style={{ fontSize: "18px", color: "white" }}
                            ></span>{" "}
                            100 PUAN
                          </div>
                        </div>
                        <div className="ant-space-item">
                          <div
                            className="activity-certificate"
                            style={{
                              display: "inline-block",
                              verticalAlign: "middle",
                              marginRight: "8px",
                            }}
                          >
                            <a
                              className="certificate enable"
                              style={{
                                background: `url('https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/certificateEnable.svg')`,
                                width: "45px",
                                height: "45px",
                                transform: "scaleX(1)",
                                display: "block",
                                backgroundSize: "100%",
                                cursor: "pointer",
                                textDecoration: "none",
                                outline: "0",
                                touchAction: "manipulation",
                              }}
                            ></a>
                          </div>
                        </div>
                        <div className="ant-space-item">
                          <div
                            className="activity-favorite"
                            style={{
                              width: "45px",
                              height: "45px",
                              display: "inline-block",
                              verticalAlign: "middle",
                              cursor: "pointer",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              style={{
                                width: "100%",
                                height: "100%",
                                fill: "red",
                              }}
                            >
                              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ant-space-item">
                          <div
                            className="activity-favorite"
                            style={{
                              width: "45px",
                              height: "45px",
                              display: "inline-block",
                              verticalAlign: "middle",
                              cursor: "pointer",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              style={{
                                width: "100%",
                                height: "100%",
                                fill: "grey",
                              }}
                            >
                              <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12"
                style={{ flexBasis: "100%", maxWidth: "100%" }}
              >
                <div className="activity-progress-bar">
                  <div
                    className="ant-progress ant-progress-line ant-progress-status-active ant-progress-show-info ant-progress-default"
                    role="progressbar"
                    style={{ marginBottom: `${studentCourseProgress}` }}
                  >
                    <div
                      className="ant-progress-outer"
                      style={{
                        width: "100%",
                        height: "5px",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "5px",
                      }}
                    >
                      <div
                        className="ant-progress-inner"
                        style={{ borderRadius: "5px" }}
                      >
                        <div
                          className="ant-progress-bg"
                          style={{
                            width: `${studentCourseProgress}%`,
                            height: "5px",
                            backgroundColor: "#1890ff",
                            borderRadius: "5px",
                          }}
                        ></div>
                      </div>
                    </div>
                    <span
                      className="ant-progress-text"
                      title={`${studentCourseProgress}%`}
                      style={{
                        marginTop: "5px",
                        color: "#1890ff",
                        fontWeight: "bold",
                      }}
                    >
                      {studentCourseProgress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePageHeader;
