import React, { useContext } from 'react'
import { QuizContext } from '../Helper/Contexts/QuizContext'
import { QuestionBank } from '../Helper/Contexts/QuestionBank'

const Result = () => {
    const { score, setGameState, setScore } = useContext(QuizContext)
    const restart = () => {
        setScore(0)
        setGameState("menu")
    }
    return (
        <div className="card">
            <h3>guiz finished</h3>
            <h5>your score : {score} / {QuestionBank.length}</h5>
            <button onClick={restart}>restart</button>
        </div>
    )
}

export default Result
