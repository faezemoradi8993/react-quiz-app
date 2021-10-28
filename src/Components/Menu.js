import React from 'react'
import { useQuizContext } from '../Helper/Contexts/QuizContext';
const Menu = () => {
    const { setGameState } = useQuizContext();
    return (
        <div className="card">
            <button onClick={() => setGameState('quiz')}>start</button>
        </div>
    )
}

export default Menu
