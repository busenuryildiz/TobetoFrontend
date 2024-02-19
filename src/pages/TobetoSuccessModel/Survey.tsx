import React from 'react';
import Question from './Question';

interface SurveyProps {
    questions: any[]; // Replace 'any' with the appropriate type
    averages: any[]; // Replace 'any' with the appropriate type
}

const Survey: React.FC<SurveyProps> = ({ questions, averages }) => {
    return (
        <div className="survey">
            <h2>Anket</h2>
            {questions.map((question: any, index: number) => (
                <Question
                    key={question.id}
                    question={question}
                    average={averages[index]}
                />
            ))}
        </div>
    );
};

export default Survey;
