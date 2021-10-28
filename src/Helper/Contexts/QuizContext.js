import { createContext, useContext, useState } from "react";
const QuizContext = createContext();

function QuizContextProvider({ children }) {
    const [gameState, setGameState] = useState('menu');
    const [CurrentGroup, setCurrentGroup] = useState(0);
    const [CurrentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [GroupScore, setGroupScore] = useState([]);
    const centralStates = { gameState, setGameState, CurrentGroup, setCurrentGroup, CurrentQuestion, setCurrentQuestion, score, setScore, GroupScore, setGroupScore }

    return (
        <QuizContext.Provider value={centralStates}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider

export const useQuizContext = () => {
    return useContext(QuizContext)
}
