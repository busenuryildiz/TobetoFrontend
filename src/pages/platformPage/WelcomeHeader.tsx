import React from 'react'
import { useSelector } from 'react-redux';

const WelcomeHeader = () => {
    const auth = useSelector((state: any) => state.auth);

  return (
    <div>
         <section className="py-5">
            <div className="position-relative mt-12">
              <div className="vector">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                      style={{
                        display: "block",
                        maxWidth: "60%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    />
                  </span>
                  <img
                    alt=""
                    srcSet="/_next/static/media/dot-purple.e0e5c9d8.svg 1x, /_next/static/media/dot-purple.e0e5c9d8.svg 2x"
                    src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </span>
              </div>
              <div className="container text-center">
                <div className="mw-5xl mx-auto">
                  <h3>
                    <span className="fs-normal" style={{ color: "#9933FF" }}>
                      <strong>TOBETO</strong>
                    </span>
                    <span
                      className="fw-normal "
                      style={{ color: "#4D4D4D" }}
                    >
                      'ya
                    </span>
                    <span
                      className="fw-normal"
                      style={{ color: "#4D4D4D" }}
                    >
                      {" "}
                      hoş geldin
                    </span>
                  </h3>
                  <h4 className="fw-normal" style={{ color: "#4D4D4D" }}>
                    {" "}
                    {auth.user && auth.user.firstName
                      ? auth.user.firstName
                      : ""}
                  </h4>
                  <p className="tobeto-slogan">
                    Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda
                    senin yanında!
                  </p>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default WelcomeHeader