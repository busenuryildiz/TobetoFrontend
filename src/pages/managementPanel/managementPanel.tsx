import React, { useState } from "react";
import { Tab, Tabs, Form, Button } from "react-bootstrap";
import axiosHelper from "../../helpers/axiosHelper";
import { useSelector } from "react-redux";
import BlogManagementPanel from "./BlogManagementPanel/BlogAndMediaPostManagementPanel";
import BlogAndMediaPostManagementPanel from "./BlogManagementPanel/BlogAndMediaPostManagementPanel";

interface Question {
  surveyID: number;
  questionText: string;
  questionType: string;
  answerOptions?: string[];
}

export default function ManagementPanel(): JSX.Element {
  const [showSurveyForm, setShowSurveyForm] = useState<boolean>(true);
  const userID = useSelector((state: any) => state.auth.user.id); // Redux store'dan kullanıcı kimliğini al
  const [surveyData, setSurveyData] = useState<any>({
    title: "",
    description: "",
    creatorUserID: userID,
    questions: [] as Question[],
  });

  const handleSurveyTabClick = (): void => {
    // Anket sekmesine tıklandığında herhangi bir işlem yapmaya gerek yok
  };

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    console.log("Anket Formu Gönderildi!");
    console.log("ANKET FORMU ", surveyData);

    try {
      // axios ile POST isteği gönder
      await axiosHelper.post("/Surveys/surveys", surveyData);
      console.log("Anket başarıyla gönderildi.");
    } catch (error) {
      console.error("Anket gönderilirken bir hata oluştu:", error);
    }

    // Survey data'yı sıfırla ve formu kapat
    setSurveyData({
      title: "",
      description: "",
      creatorUserID: userID,
      questions: [] as Question[],
    });
    setShowSurveyForm(false);
  };

  const handleQuestionAdd = (): void => {
    setSurveyData((prevData: any) => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        {
          surveyID: 999,
          questionText: "",
          questionType: "",
        },
      ],
    }));
  };

  const handleQuestionChange = (
    index: number,
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { value, name } = event.target;
    const updatedQuestions = [...surveyData.questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      [name]: name === "answerOptions" ? value.split(",") : value, // If name is 'answerOptions', split the value
    };
    setSurveyData((prevData: any) => ({
      ...prevData,
      questions: updatedQuestions,
    }));
  };

  const handleQuestionDelete = (index: number): void => {
    setSurveyData((prevData: any) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions.splice(index, 1);
      return {
        ...prevData,
        questions: updatedQuestions,
      };
    });
  };

  return (
    <div className="container mt-4">
      <Tabs defaultActiveKey="home" className="justify-content-center">
        <Tab eventKey="home" title="Ana Sayfa">
          <div className="mt-4">
            <h2>Ana Sayfa İçeriği</h2>
            <p>Burada ana sayfa içeriği yer alacak.</p>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Profil">
          <div className="mt-4">
            <h2>Profil İçeriği</h2>
            <p>Burada profil içeriği yer alacak.</p>
          </div>
        </Tab>
        <Tab eventKey="settings" title="Ayarlar">
          <div className="mt-4">
            <h2>Ayarlar İçeriği</h2>
            <p>Burada ayarlar içeriği yer alacak.</p>
          </div>
        </Tab>
        <Tab eventKey="survey" title="Anket" onClick={handleSurveyTabClick}>
          <div className="mt-4">
            {showSurveyForm ? (
              <div>
                <h2>Anket Ekle</h2>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group controlId="surveyTitle">
                    <Form.Label>Anket Başlığı</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Başlık girin"
                      value={surveyData.title}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSurveyData({ ...surveyData, title: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="surveyDescription">
                    <Form.Label>Anket Açıklaması</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Açıklama girin"
                      value={surveyData.description}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setSurveyData({
                          ...surveyData,
                          description: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  {surveyData.questions.map(
                    (question: Question, index: number) => (
                      <div key={index}>
                        <Form.Group
                          className=""
                          controlId={`questionText_${index}`}
                        >
                          <Form.Label>Soru Metni</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Soru girin"
                            name="questionText"
                            value={question.questionText}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => handleQuestionChange(index, e)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-4"
                          controlId={`questionType_${index}`}
                        >
                          <Form.Label>Soru Tipi</Form.Label>
                          <Form.Control
                            as="select"
                            name="questionType"
                            value={question.questionType}
                            onChange={(
                              e: React.ChangeEvent<
                                | HTMLInputElement
                                | HTMLSelectElement
                                | HTMLTextAreaElement
                              >
                            ) => handleQuestionChange(index, e)}
                          >
                            <option value="">Seçiniz</option>
                            <option value="text">Metin</option>
                            <option value="multipleChoice">
                              Çoktan Seçmeli
                            </option>
                          </Form.Control>
                        </Form.Group>
                        {question.questionType === "multipleChoice" && (
                          <Form.Group controlId={`answerOptions_${index}`}>
                            <Form.Label>Yanıt Seçenekleri</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Yanıt seçeneği girin"
                              name="answerOptions"
                              value={question.answerOptions}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => handleQuestionChange(index, e)}
                            />
                          </Form.Group>
                        )}
                        <Button
                          variant="danger"
                          onClick={() => handleQuestionDelete(index)}
                        >
                          Soru Sil
                        </Button>
                      </div>
                    )
                  )}
                  <div className="d-flex mt-2 gap-2">
                    <Button
                      className=""
                      variant="primary"
                      type="button"
                      onClick={handleQuestionAdd}
                    >
                      Soru Ekle
                    </Button>
                    <Button variant="primary" type="submit">
                      Anketi Ekle
                    </Button>
                  </div>
                </Form>
              </div>
            ) : null}
          </div>
        </Tab>
        <Tab eventKey="Blog ve Haber" title="Blog ve Haber">
          <div className="mt-4">
            <h2>İçerik Ekle</h2>
            <BlogAndMediaPostManagementPanel />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
