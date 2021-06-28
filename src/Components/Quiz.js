import React from 'react'
import { useContext, useState, useEffect } from 'react/cjs/react.development';
import { QuizContext } from '../Helper/Contexts/QuizContext';
import { QuestionBank } from '../Helper/Contexts/QuestionBank';
const Quiz = () => {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [CurrentQuestion, setCurrentQuestion] = useState(0);
    const [optionChose, setOptionChose] = useState("");
    const [backColorA, setBackColorA] = useState('white')
    const [backColorB, setBackColorB] = useState('white')
    const [toggle, setToggle] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const checkA = () => {
        setOptionChose("A");
        setDisabled(true)
    }
    const checkB = () => {
        setOptionChose("B");
        setDisabled(true)
    }
    const finishQuiz = () => {
        if (optionChose === QuestionBank[CurrentQuestion].answer) {
            setScore(score + 1)
        }
        setBackColorB("white");
        setBackColorA("white");
        setGameState('result')
        setToggle(false);
        setDisabled(false)
    }
    const nextQuestion = () => {
        setBackColorB("white");
        setBackColorA("white");
        setToggle(false);
        setDisabled(false)

        if (optionChose === QuestionBank[CurrentQuestion].answer) {
            setScore(score + 1)
        }
        setOptionChose('')
        setCurrentQuestion(CurrentQuestion + 1)
    }
    const hint = () => {
        setToggle(!toggle)
    }
    useEffect(() => {
        if (optionChose === QuestionBank[CurrentQuestion].answer && optionChose === "A") { setBackColorA("green"); }
        else if (optionChose === QuestionBank[CurrentQuestion].answer && optionChose === "B") { setBackColorB("green"); }
        else if (optionChose !== QuestionBank[CurrentQuestion].answer && optionChose === "B") { setBackColorB("red"); }
        else if (optionChose !== QuestionBank[CurrentQuestion].answer && optionChose === "A") { setBackColorA("red"); }


    }, [optionChose]);
    return (
        <div className="card">
            <h2> {QuestionBank[CurrentQuestion].Question}</h2>
            <div className="options">
                <button disabled={disabled} style={{ background: backColorA }} onClick={checkA}>{QuestionBank[CurrentQuestion].A}</button>
                <button disabled={disabled} style={{ background: backColorB }} onClick={checkB}>{QuestionBank[CurrentQuestion].B}</button>
            </div>
            {CurrentQuestion === (QuestionBank.length - 1) ? <div className="keys"><button onClick={finishQuiz}>finish</button></div> : <div className="keys"> <button style={{ background: "yellow" }} onClick={hint}>hint</button> <button onClick={nextQuestion}>next</button></div>
            }
            <h5>your score : {score}</h5>
            {(toggle) && <h5 className="hint" style={{ background: "yellow" }}> answer is  {QuestionBank[CurrentQuestion].answer}</h5>}


        </div>
    )
}

export default Quiz
