import React, { useContext } from 'react'
import { QuizContext } from '../Helper/Contexts/QuizContext'
import { QuestionBank } from '../Helper/Contexts/QuestionBank'

const Result = () => {
    const { score, setGameState, setScore, CurrentGroup, setCurrentGroup, CurrentQuestion, setCurrentQuestion, GroupScore, setGroupScore } = useContext(QuizContext)
    const restart = () => {
        setScore(0)
        setGameState("menu")
    }
    const nextGroup = () => {
        setGameState("quiz")
        setScore(0)
        if (CurrentGroup < QuestionBank.length - 1) {

            const newGroupScore = GroupScore.push(score)
            setGroupScore(GroupScore);

            console.log(newGroupScore)
            setCurrentQuestion(0)
            setCurrentGroup(CurrentGroup + 1)
        }
    }
    return (
        <div className="card">
            <h3>guiz finished</h3>
            <h5>your score : {score} / {QuestionBank[CurrentGroup].length}</h5>
            <button onClick={restart}>restart</button>

            {(CurrentGroup < QuestionBank.length - 1) && <button onClick={nextGroup}>next group</button>}
        </div>
    )
}

export default Result
