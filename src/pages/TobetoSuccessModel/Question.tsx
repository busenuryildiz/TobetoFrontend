import React, { useState, ChangeEvent, FormEvent } from 'react';

interface QuestionProps {
    question: {
        id: string;
        text: string;
        answerOptions: {
            id: string;
            value: string;
            text: string;
        }[];
    };
    average: number | null;
}

const Question: React.FC<QuestionProps> = ({ question, average }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedAnswer(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();

        // Seçilen cevabı sunucuya gönderin...

        console.log('Seçilen cevap:', selectedAnswer);
    };

    return (
        <div className="question">
            <p>{question.text}</p>
            {question.answerOptions.map((option) => (
                <div key={option.id}>
                    <input
                        type="radio"
                        name={question.id}
                        value={option.value}
                        checked={selectedAnswer === option.value}
                        onChange={handleAnswerChange}
                    />
                    <label htmlFor={option.value}>{option.text}</label>
                </div>
            ))}
            <button type="button" onClick={handleSubmit}>
                Gönder
            </button>
            {average && <p>Ortalama Yanıt: {average}</p>}
        </div>
    );
};

export default Question;
  