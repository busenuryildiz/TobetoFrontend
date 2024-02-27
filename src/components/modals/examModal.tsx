import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Slider from 'react-slick';
import axios from '../../helpers/axiosHelper';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

interface ExamModalProps {
  isOpen: boolean;
  questions: IQuestion[];
  examId: number;
  studentId: number;
  onClose: () => void;
}

interface IOption {
  id: number;
  answer: string;
  isCorrect?: boolean;
}

interface IQuestion {
  id: number;
  problem: string;
  options: IOption[];
}

const ExamModal: React.FC<ExamModalProps> = ({ isOpen, questions, examId, studentId, onClose }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: number }>({});

  const handleOptionChange = (questionId: number, optionId: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmitExam = async () => {
    const answers = Object.entries(selectedAnswers).map(([questionId, optionId]) => ({
      questionId: parseInt(questionId, 10),
      selectedOptionId: optionId,
    }));

    try {
      const response = await axios.post('/Exam/submitExam', {
        studentId,
        examId,
        answers,
      });

      alert(`Doğru: ${response.data.correctAnswers}, Yanlış: ${response.data.wrongAnswers}, Cevaplanmamış: ${response.data.unanswered}`);
    } catch (error) {
      console.error('Sınav sonuçları gönderilirken bir hata oluştu:', error);
      alert('Sınav sonuçları gönderilirken bir hata oluştu.');
    }

    onClose(); // Modal'ı kapat
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Modal show={isOpen} onHide={onClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>Sınav</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Slider {...settings}>
          {questions.map(question => (
            <div className='mb-4' key={question.id}>
              <h5>{question.problem}</h5>
              <Form>
                {question.options.map(option => (
                  <Form.Check 
                    type="radio"
                    id={`question-${question.id}-option-${option.id}`}
                    label={option.answer}
                    name={`question-${question.id}`}
                    onChange={() => handleOptionChange(question.id, option.id)}
                    key={option.id}
                  />
                ))}
              </Form>
            </div>
          ))}
        </Slider>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmitExam}>Sınavı Bitir</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExamModal;
