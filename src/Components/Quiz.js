import React from 'react'
import { useContext, useState } from 'react/cjs/react.development';
import { QuizContext } from '../Helper/Contexts/QuizContext';
import { QuestionBank } from '../Helper/Contexts/QuestionBank';
const Quiz = () => {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [CurrentQuestion, setCurrentQuestion] = useState(0);
    const [optionChose, setOptionChose] = useState("");
    const finishQuiz = () => {
        if (optionChose === QuestionBank[CurrentQuestion].answer) {
            setScore(score + 1)
        }
        setGameState('result')
    }
    const nextQuestion = () => {

        if (optionChose === QuestionBank[CurrentQuestion].answer) {
            setScore(score + 1)
        }
        setCurrentQuestion(CurrentQuestion + 1)
    }
    return (
        <div className="quiz">
            <h3> {QuestionBank[CurrentQuestion].Question}</h3>
            <div>
                <button onClick={() => setOptionChose("A")}>{QuestionBank[CurrentQuestion].A}</button>
                <button onClick={() => setOptionChose("B")}>{QuestionBank[CurrentQuestion].B}</button>
            </div>
            {CurrentQuestion === (QuestionBank.length - 1) ? <button onClick={finishQuiz}>finish</button> : <button onClick={nextQuestion}>next</button>}


        </div>
    )
}

export default Quiz
