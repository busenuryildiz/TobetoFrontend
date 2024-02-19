import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Navi from '../../components/navbar/Navi';
import axios from 'axios';

interface Question {
    id: number;
    text: string;
}

export default function SuccessModel1() {
    const [currentSection, setCurrentSection] = useState(1);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [questions, setQuestions] = useState<Question[]>([]);
    const [averages, setAverages] = useState<number[]>([]);

    const handleRadioChange = (questionId: any, value: any) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const handleNextClick = () => {
        setCurrentSection(currentSection + 1);
    };

    const totalQuestionCount = 80; 

    
    const selectedQuestionCount = 10; 

    const progressWidth = (selectedQuestionCount / totalQuestionCount) * 100;
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const questionsResponse = await axios.get('http://localhost:6280/api/Surveys/surveyquestions?PageSize=100');
                const averagesResponse = await axios.get('http://localhost:6280/api/Surveys/surveyansweraverages');
                setQuestions(questionsResponse.data);
                setAverages(averagesResponse.data);
            } catch (error) {
                // Handle errors gracefully
                console.error('Error fetching data:', error);
            }
        };

        fetchQuestions();
    }, []);

    const sectionQuestions = questions.slice((currentSection - 1) * 10, currentSection * 10);

    return (
        <div>
            <Navi />
            <main>
                <div className="bg-light">
                    <div className="container px-7 pt-10 pb-5">
                        <h6 className="text-center f-size-24 text-secondary">
                            Tobeto İşte Başarı Modeli{' '}
                        </h6>
                    </div>
                </div>
                <section className="bg-light py-2">
                    <div className="container mb-6">
                        <div className="p-6 mb-6 bg-white rounded shadow">
                            <div className="progress mt-5 mw-3xl mx-auto mb-10" style={{ height: "25px", borderRadius: "30px" }}>
                                <div className="progress-bar" role="progressbar" aria-valuenow={progressWidth} aria-valuemin={0} aria-valuemax={100} style={{ width: `${progressWidth}%`, borderRadius: "30px" }}>
                                    {progressWidth.toFixed(2)}%
                                </div>
                            </div>
                            <div className="row">
                                <div className="table-responsive">
                                    <table className="table tbt-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Tobeto İşte Başarı Modeli</th>
                                                <th scope="col" style={{ textAlign: "center" }}>--</th>
                                                <th scope="col" style={{ textAlign: "center" }}>-</th>
                                                <th scope="col" style={{ textAlign: "center" }}>0</th>
                                                <th scope="col" style={{ textAlign: "center" }}>+</th>
                                                <th scope="col" style={{ textAlign: "center" }}>++</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sectionQuestions.map((question) => (
                                                <tr key={question.id}>
                                                    <td className="d-flex gap-1" style={{ paddingRight: "40px" }}>
                                                        <b>{question.id}-</b>
                                                        <span><p>{question.text}</p></span>
                                                    </td>
                                                    {[1, 2, 3, 4, 5].map(value => (
                                                        <td key={value}>
                                                            <input
                                                                className="form-check-input mx-2"
                                                                type="radio"
                                                                name={question.id.toString()}
                                                                value={value.toString()}
                                                                onChange={() => handleRadioChange(question.id, value.toString())}
                                                            />
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-12 text-center mt-4">
                                <button className="btn btn-primary d-inline-block" style={{ marginRight: "10px" }} disabled={currentSection === 1}>Geri</button>
                                <button className="btn btn-primary d-inline-block" onClick={handleNextClick}>İleri</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
