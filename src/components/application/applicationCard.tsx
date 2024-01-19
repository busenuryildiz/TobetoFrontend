import React from "react";
import { Card } from "react-bootstrap";

interface ApplicationCardProps {
  formName: string;
  formStatus: string;
  formDates: string[];
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ formName, formStatus, formDates }) => {
  return (
    <div className="col-md-6 col-12 mt-2">
      <Card className={`status-card ${formStatus.toLowerCase()}`}>
        <Card.Body>
          <Card.Title className="form_name">{formName}</Card.Title>
          <div>
            {formDates.map((date, index) => (
              <div key={index} style={{ display: "flex", alignItems: "center" }}>
                <i className="fa fa-check fa-sm" aria-hidden="true" style={{ color: "green", marginRight: "5px" }}></i>
                <span className="form_date">{date}</span>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApplicationCard;
