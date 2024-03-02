import ChartComponent from "./ChartComponent";
import { Link } from "react-router-dom";


const TobetoSuccessModelChart = () => {
  return (
    <div className="col-12">
      <div className="cv-box cv-padding">
        <div className="cv-box-header">
          <div className="d-flex justify-content-between">
            <span>Tobeto İşte Başarı Modelim</span>
            <Link to="/profilim/degerlendirmeler/rapor/tobeto-iste-basari-modeli/1" className="cv-see-icon"></Link>
          </div>
          <hr />
        </div>
        <div className="model-padding">
          <div className="">
            <ChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TobetoSuccessModelChart;
