import React, { useState, useEffect } from "react";
import axiosHelper from "../../../helpers/axiosHelper";
import { useSelector } from "react-redux";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./mySurveyTab.module.css";
import { queries } from "@testing-library/react";

interface Survey {
  id: number;
  title: string;
  description: string;
}

interface Props {
  activeTab: string;
}

const MySurveyTab: React.FC<Props> = ({ activeTab }) => {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [selectedSurvey, setSelectedSurvey] = useState<Survey | null>(null);
  const [selectedSurveyQuestions, setSelectedSurveyQuestions] = useState<any[]>(
    []
  );
  const userID = useSelector((state: any) => state.auth.user.id);

  useEffect(() => {
    axiosHelper
      .get(`/Surveys/GetUnsentSurveys/${userID}`)
      .then((response) => {
        setSurveys(response.data);
      })
      .catch((error) => {
        console.error("Anketler alınırken bir hata oluştu:", error);
      });
  }, [userID]);

  const handleSurveyClick = async (survey: Survey) => {
    try {
      const response = await axiosHelper.get(`/Surveys/surveys/${survey.id}`);
      setSelectedSurvey(survey);
      setSelectedSurveyQuestions(response.data.surveyQuestions);
    } catch (error) {
      console.error("Anket soruları alınırken bir hata oluştu:", error);
    }
  };

  const handleCloseModal = () => {
    setSelectedSurvey(null);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const answers = Array.from(formData.entries()).map(([key, value]) => ({
      userID: userID,
      surveyID: selectedSurvey?.id || null,
      questionID: Number(key.split("_")[1]),
      answerValue: value as string,
    }));

    console.log("Form gönderildi", answers);
    axiosHelper
      .post("/Surveys/SubmitAnswers", answers)
      .then((response) => {
        console.log("Response ", response);
        console.log("Selected ", selectedSurvey?.id);
        removeSurveyFromList(selectedSurvey?.id); // Form gönderimi başarılıysa listeden ilgili anketi kaldır

        handleCloseModal(); // Form gönderimi başarılıysa modalı kapat
      })
      .catch((error) => {
        console.log("Hata ", error);
      });
  };
  const removeSurveyFromList = (surveyIdToRemove: any) => {
    setSurveys((prevSurveys) =>
      prevSurveys.filter((survey) => survey.id !== surveyIdToRemove)
    );
  };

  return (
    <div
      className={`tab-pane fade ${
        activeTab === "mySurvey-tab-pane" ? "show active" : ""
      }`}
      id="mySurvey-tab-pane"
      role="tabpanel"
      aria-labelledby="mySurvey-tab"
      tabIndex={0}
    >
      <Row xs={1} md={2} lg={3} className="g-4">
        {surveys.length === 0 ? (
          <div className="noDataCard">
            <p>Atanmış herhangi bir anketiniz bulunmamaktadır</p>
          </div>
        ) : (
          surveys.map((survey) => (
            <Col key={survey.id} onClick={() => handleSurveyClick(survey)}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{survey.title}</h5>
                  <p className="card-text">{survey.description}</p>
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>
      <Modal show={!!selectedSurvey} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSurvey?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="description">{selectedSurvey?.description}</p>
          <Form onSubmit={handleSubmitForm}>
            {selectedSurveyQuestions.map((question, index) => (
              <Form.Group
                key={index}
                controlId={`answer_${question.questionId}`}
              >
                <Form.Label>{question.questionText}</Form.Label>
                <Form.Control
                  type="text"
                  name={`question_${question.questionId}`}
                />
              </Form.Group>
            ))}

            <div className="button-container">
              <Button variant="primary" type="submit">
                Gönder
              </Button>
              <Button variant="secondary" onClick={handleCloseModal}>
                İptal
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MySurveyTab;
