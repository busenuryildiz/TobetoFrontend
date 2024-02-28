import React from "react";

const IstanbulCodingBanner = () => {
  return (
    <div className="p-4">
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
          alt=""
          aria-hidden="true"
          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271137%27%20height=%27443%27/%3e"
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
        src="https://tobeto.com//_next/static/media/ik-logo-dark.7938c0de.svg"
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
        srcSet="https://tobeto.com//_next/static/media/ik-logo-dark.7938c0de.svg 1x, https://tobeto.com//_next/static/media/ik-logo-dark.7938c0de.svg 2x"
      />
    </span>
    </div>
  );
};

export default IstanbulCodingBanner;
