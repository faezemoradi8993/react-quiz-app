import React, { setState, useState, useContext } from 'react';
import './App.css';
import Quiz from './Components/Quiz';
import Menu from './Components/Menu';
import Result from './Components/Result';
import { QuizContext } from './Helper/Contexts/QuizContext';


function App() {
  const [gameState, setGameState] = useState('menu');
  const [CurrentGroup, setCurrentGroup] = useState(0);
  const [CurrentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [GroupScore, setGroupScore] = useState([]);

  return (
    <div className="App">
      <h1>quiz app</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore, CurrentGroup, setCurrentGroup, CurrentQuestion, setCurrentQuestion, GroupScore, setGroupScore }}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "result" && <Result />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
