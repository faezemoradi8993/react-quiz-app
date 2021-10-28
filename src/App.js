import React from 'react';
import './App.css';
import Quiz from './Components/Quiz';
import Menu from './Components/Menu';
import Result from './Components/Result';
import { useQuizContext } from './Helper/Contexts/QuizContext';

function App() {
  const { gameState } = useQuizContext()
  return (
    <div className="App">
      <h1>quiz app</h1>
      {gameState === "menu" && <Menu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "result" && <Result />}
    </div>
  );
}

export default App;
