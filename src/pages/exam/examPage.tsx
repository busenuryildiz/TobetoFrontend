// ExamPage.tsx
import React, { useEffect, useState } from 'react';
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
//sroudan geri dönüldüğünde cevap ut
const ExamPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const examId = 2; // Örnek examId. Gerçek uygulamada dinamik olmalı
  const studentId = "19862093-b504-4fc2-5ef8-08dc3af6fb0a"; // Öğrenci ID. Gerçek uygulamada oturum bilgilerinden alınmalı

  const fetchQuestionsAndOpenModal = async () => {
    try {
      const response = await axios.get<IQuestion[]>(`/Exam/random-questions/${examId}`);
      setQuestions(response.data);
      setIsOpen(true); // Sorular alındığında modalı aç
    } catch (error) {
      console.error('Sınav soruları çekilirken hata oluştu:', error);
    }
  };
  useEffect(() => {
    fetchQuestionsAndOpenModal();
  }, []);
  
  return (
    <div>
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
