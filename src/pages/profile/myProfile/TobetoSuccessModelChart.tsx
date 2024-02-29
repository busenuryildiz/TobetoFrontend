import React from "react";
import ChartComponent from "./ChartComponent";
import { Chart } from "chart.js";
import { Link } from "react-router-dom";

const TobetoSuccessModelChart = () => {
  return (
    <div className="col-12">
      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Tobeto İşte Başarı Modelim</span>
            <Link to="/degerlendirmeler" className="cv-see-icon"></Link>
          </div>
          <hr />
        </div>
        <div className="model-padding">
          <div className="">
            <div className="row">

              <div className="col-md-6 col-12 my-3" style={{ maxWidth: '350px' }}>
              <ChartComponent  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TobetoSuccessModelChart;
