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
              <div className="col-md-6 col-12 d-flex my-3" style={{ marginBottom: '20px' }}>
                <div className="radar-labels">
                  <div className="label" style={{ marginBottom: '10px' }}>
                    <span className="legend legend8">4.6</span>
                    <span className="legendName">
                      Yeni dünyaya hazırlanıyorum
                    </span>
                  </div>
                  <div className="label" style={{ marginBottom: '10px' }}>
                    <span className="legend legend7">4.2</span>
                    <span className="legendName">
                      Profesyonel duruşumu geliştiriyorum
                    </span>
                  </div>
                  <div className="label" style={{ marginBottom: '10px' }}>
                    <span className="legend legend1">4.4</span>
                    <span className="legendName">
                      Kendimi tanıyor ve yönetiyorum
                    </span>
                  </div>
                  <div className="label" style={{ marginBottom: '10px' }}>
                    <span className="legend legend5">3.9</span>
                    <span className="legendName">
                      Yaratıcı ve doğru çözümler geliştiriyorum
                    </span>
                  </div>
                  <div className="label" style={{ marginBottom: '10px' }}>
                    <span className="legend legend4">4.5</span>
                    <span className="legendName">
                      Başkaları ile birlikte çalışıyorum
                    </span>
                  </div>
                  <div className="label" style={{ marginBottom: '10px' }}>
                    <span className="legend legend2">4.2</span>
                    <span className="legendName">
                      Kendimi sürekli geliştiriyorum
                    </span>
                  </div>
                  <div className="label" style={{ marginBottom: '10px' }}>
                    <span className="legend legend6">4.4</span>
                    <span className="legendName">
                      Sonuç ve başarı odaklıyım
                    </span>
                  </div>
                  <div className="label" style={{ marginBottom: '10px' }}>
                    <span className="legend legend3">4.1</span>
                    <span className="legendName">
                      Anlıyorum ve anlaşılıyorum
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TobetoSuccessModelChart;
