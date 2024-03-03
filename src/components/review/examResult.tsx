import React from 'react';
import PropTypes from 'prop-types';

type Props = {
    examResult: number;
    questionAmount: number;
};

class ExamResult extends React.Component<Props> {
    static propTypes = {
        examResult: PropTypes.number.isRequired,
        questionAmount: PropTypes.number.isRequired,
    };
    render() {
        const { examResult, questionAmount } = this.props;
        const pointsPerQuestion = 100 / questionAmount;
        const correctCount = examResult / pointsPerQuestion;
        const incorrectOrEmptyCount = questionAmount - correctCount;
        return (
            <div className="result-items">
                <span className="d-flex flex-column">{correctCount} <a>Doğru</a> </span>
                <span className="d-flex flex-column">{incorrectOrEmptyCount} <a>Yanlış veya Boş</a></span>
                <span className="d-flex flex-column">{examResult} <a>Puan</a></span>
            </div>
        );
    }
}


export default ExamResult;