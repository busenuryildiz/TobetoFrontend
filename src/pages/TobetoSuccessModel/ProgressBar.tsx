import React, { useState } from 'react'

export default function ProgressBar() {
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const totalQuestions = 80; // or whatever your total is
    const percentageAnswered = Math.floor((answeredQuestions / totalQuestions) * 100);
    return (
        <div
            aria-valuemax={totalQuestions}
            aria-valuemin={0}
            aria-valuenow={answeredQuestions}
            className="progress-bar"
            role="progressbar"
            style={{
                width: `${percentageAnswered}%`
            }}
        >
            %{percentageAnswered}
        </div>
    )
}
