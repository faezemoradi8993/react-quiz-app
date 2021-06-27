import React, { useContext } from 'react'
import { QuizContext } from '../Helper/Contexts/QuizContext'
import { QuestionBank } from '../Helper/Contexts/QuestionBank'

const Result = () => {
    const { score, setGameState } = useContext(QuizContext)
    return (
        <div className="result">
            <h3>guiz finished</h3>
            <h5>your score : {score} / {QuestionBank.length}</h5>
            <button onClick={() => { setGameState("menu") }}>restart</button>
        </div>
    )
}

export default Result
