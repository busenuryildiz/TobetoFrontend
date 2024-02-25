// ExamPage.tsx
import React, { useState } from 'react';
import axios from '../../helpers/axiosHelper';
import ExamModal from '../../components/modals/examModal'; // Doğru yolu sağladığınızdan emin olun

interface IQuestion {
  id: number;
  problem: string;
  options: IOption[];
}

interface IOption {
  id: number;
  answer: string;
  isCorrect?: boolean;
}

const ExamPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const examId = 10; // Örnek examId. Gerçek uygulamada dinamik olmalı
  const studentId = 1; // Öğrenci ID. Gerçek uygulamada oturum bilgilerinden alınmalı

  const fetchQuestionsAndOpenModal = async () => {
    try {
      const response = await axios.get<IQuestion[]>(`/Exam/random-questions/${examId}`);
      setQuestions(response.data);
      setIsOpen(true); // Sorular alındığında modalı aç
    } catch (error) {
      console.error('Sınav soruları çekilirken hata oluştu:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchQuestionsAndOpenModal}>Sınava Gir</button>
      {isOpen && (
        <ExamModal
          isOpen={isOpen}
          questions={questions}
          examId={examId}
          studentId={studentId}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ExamPage;
