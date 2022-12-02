import { useState } from "react";
import './quiz.css';

function Quiz() {
    const questions = [
        {
            question: 'What is the capital of France?',
            options: [
                { answer: 'NEW YORK', isCorrect: false },
                { answer: 'LONDON', isCorrect: false },
                { answer: 'PARIS', isCorrect: true },
                { answer: 'DUBLIN', isCorrect: false },
            ],
        },
        {
            question: 'What is the capital of Bangladesh?',
            options: [
                { answer: 'NEW YORK', isCorrect: false },
                { answer: 'LONDON', isCorrect: false },
                { answer: 'DHAKA', isCorrect: true },
                { answer: 'DUBLIN', isCorrect: false },
            ],
        },
        {
            question: 'What is the capital of India?',
            options: [
                { answer: 'NEW YORK', isCorrect: false },
                { answer: 'DELHI', isCorrect: true },
                { answer: 'PARIS', isCorrect: false },
                { answer: 'DUBLIN', isCorrect: false },
            ],
        },
    ]
    const [curQuestion, setCurQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);

        const nextQuestion = curQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }
    return (
        <div className="qz-con">
            <div className="quiz-container">
                {showScore ? (
                    <div className="result">
                        Your Score {score} out of {questions.length}
                    </div>
                ) : (
                    <div className="outer">
                        <div className="questions">
                            <div className="questionNum">
                                <span>Question {curQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question">
                                {questions[curQuestion].question}
                            </div>
                        </div>
                        <div className="answers">
                            {questions[curQuestion].options.map((answerOption) => (
                                <button onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answer}</button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Quiz;