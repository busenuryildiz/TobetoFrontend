import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Flex, Progress } from 'antd';


const convertToBoolean = (value:number) => {
  return value === 1 ? true : false;
};

const CoursePageHeader = ({
  courseName,
  studentCourseProgress,
  studentCourseIsSaved,
  courseImagePath,
  likeCount,
  isCourseLiked
}: any) => {
  const courseLike = convertToBoolean(isCourseLiked);

  const [liked, setLiked] = useState(courseLike);
  const [saved, setSaved] = useState(false);

  const handleClickSave = () => {
    setSaved(!saved);
  };
  const handleClick = () => {
    setLiked(!liked);
  };


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
                              <span>Devam et!</span>
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
                            onClick={handleClick}
                          >
                           <svg style = {{ display : liked ? "none":"block" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#d21919" viewBox="0 0 256 256"><path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"  ></path></svg>
                           <svg style = {{ display : liked ? "block":"none" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#d21919" viewBox="0 0 256 256"><path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"></path></svg>
                          </div>
                        </div><div className="ant-space-item">
                        <span style={{ marginLeft: "5px", fontSize: "20px", marginTop:"5px" }}>{likeCount}</span>
                        </div>
                        <div
                          className="ant-space-item"
                          onClick={handleClickSave}
                        >
                          <div
                            className="activity-favorite"
                            style={{
                              width: "55px",
                              height: "55px",
                              display: "inline-block",
                              verticalAlign: "middle",
                              cursor: "pointer",
                              padding: "10px",
                              borderRadius: "4px",
                              paddingTop: 0,
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              style={{
                                width: "100%",
                                height: "100%",
                                fill: saved ? "black" : "grey", 
                                transition: "fill 0.2s ease", 
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
                    <Progress percent={studentCourseProgress}/>
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
    </>
  );
};

export default CoursePageHeader;
