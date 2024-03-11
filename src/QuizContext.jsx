/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-case-declarations */
import { createContext, useContext, useReducer, useEffect } from "react";

 const QuizContext = createContext();

 const SEC_PER_QUESTION = 30;

// the initail object state - pieces of state
const initailState = {
    questions: [],
  
    // THE STATUS STATE - loading, error, ready, finished
    status: "loading",
  
    // index to take a certain  question out of the array
    index: 0,
  
    // correct answer
    answer: null,
  
    // update points
    points: 0,
  
    // highscore state on points
    highscore: 0,
  
    // timer 
    timeLeft: null,
  };
  
  
  // The reducer, which takes in the current state and the action that was dispatched
  function reducer(state, action) {
    // Setting up the switch statement
    switch (action.type) {
      case "dataReceived":
        return { ...state, questions: action.payload, status: "ready" };
  
      // another case on  how to handle errors
      case "dataFailed":
        return { ...state, status: "error" };
  
      // another case on how to start the quiz and cal the amount of question in other to set the timer
      case "start":
        return { ...state, status: "active", timeLeft: state.questions.length * SEC_PER_QUESTION,  };
  
      // another case on how to get the correct answer for the options
      case "answerIs":
        const currentQuestion = state.questions.at(state.index);
  
        // handling the currect answer and the giving it points
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === currentQuestion.correctOption
              ? state.points + currentQuestion.points
              : state.points,
        };
  
      //  this is when you move onto the next question
      case "nextQuestion":
        return {
          ...state,
          index: state.index + 1,
          answer: null,
        };
  
      case "finish":
        return {
          ...state,
          status: "finished",
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
  
      // reset the state back to it initial values
      case "restartQuiz":
        return {
          ...state,
          Scores: 0,
          status: "ready",
          points: 0,
          highscore: 0,
          index: 0,
          answer: null,
          timeLeft: null,
        };
      // another case on how to set a timer
      case 'tick' :
       return {...state, timeLeft: state.timeLeft -1,
      status: state.timeLeft === 0 ? "finished" : state.status,
      };
  
  
      default:
        throw new Error("Action unknown");
    }
  }

  function QuizContextProvider({ children}) {
      const [{ questions, status, index, answer, points, highscore, timeLeft }, dispatch] =
      useReducer(reducer, initailState);

      const numQuestions = questions.length;
  
      const maxPossiblePoints = questions.reduce(
        (prev, curr) => prev + curr.points,
        0
        );

  // this side effect is going to run once when the component mounts.
  // and fetch the questions from the local server
  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      // eslint-disable-next-line no-unused-vars
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);


    return (
        <QuizContextProvider value={{
            questions,
            status,
            index,
            points: points,
            answer,
            highscore,
            timeLeft
        }}>
            { children}
        </QuizContextProvider>

    )
  }

  function useQuizContext() {
    const context = useContext(QuizContext);
    if (context === undefined)
      throw new Error("useQuizContext was used outside the Provider");
    return context;
  }


export {QuizContextProvider, useQuizContext }