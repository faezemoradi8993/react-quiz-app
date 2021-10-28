import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import QuizContextProvider from './Helper/Contexts/QuizContext';


ReactDOM.render(
  <React.StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

