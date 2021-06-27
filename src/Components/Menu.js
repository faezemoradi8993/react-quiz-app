import React, { setState, useState, useContext } from 'react'
import { QuizContext } from '../Helper/Contexts/QuizContext';
const Menu = () => {
    const { setGameState } = useContext(QuizContext);
    return (
        <div>
            <button onClick={() => setGameState('quiz')}>start</button>
        </div>
    )
}

export default Menu
