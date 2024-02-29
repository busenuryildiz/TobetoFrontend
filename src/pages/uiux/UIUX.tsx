import React from 'react'
import Footer2 from '../../components/footer/Footer2'
import Navi2 from '../../components/navbar/Navi2'

const UIUX = () => {
  return (
    <div>
    <Navi2 />
    <main className="bg-front-dark">
      <section className="py-24">
        <div className="position-relative mt-32">
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
                border: 0,
                margin: 0,
                padding: 0,
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
                  border: 0,
                  margin: 0,
                  padding: 0,
                  maxWidth: "100%",
                }}
              >
                <img
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2775%27%20height=%2775%27/%3e"
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                  }}
                />
              </span>
              <img
                src="https://tobeto.com/_next/static/media/04.1ffe7ba7.svg"
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
                srcSet="https://tobeto.com/_next/static/media/04.1ffe7ba7.svg 1x, https://tobeto.com/_next/static/media/04.1ffe7ba7.svg 2x"
              />
              <noscript />
            </span>
          </div>
          <div className="container text-center">
            <div className="mw-5xl mx-auto">
              <h1 className="text-white">Yakında</h1>
            </div>
          </div>
          <div className="gradient-line mt-5" />
        </div>
      </section>
    </main>
    <Footer2 />
  </div>
  )
}

export default UIUX