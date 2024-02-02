/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import Start from './components/Start';


// the initail object state
const initailState = {
    questions: [],

    // THE STATUS STATE - loading, error, ready, finished
    status: "loading"
};

// The reducer, which takes in the current state and the action that was dispatched
function reducer(state, action) {
  // Setting up the switch statement
  switch (action.type) {

    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };

      // another case on  how to handle errors
      case 'dataFailed': 
      return {...state, status: "error"};

    default:
      throw new Error('Action unknown');
  }
}


export default function App() {
  // useReducer hook 
  const  [{questions, status}, dispatch] = useReducer(reducer,initailState)
  
  // get the total number of questions
  const numQuestions = questions.length;


  // this side effect is going to run once when the component mounts.
  // and fetch the questions from the local server
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type: 'dataReceived', payload: data}))
      // eslint-disable-next-line no-unused-vars
      .catch((err) => dispatch({type: 'dataFailed'}));
  }, []);
  return (
    <div className="app">
      <Header />

      <Main>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <Start numQuestions={numQuestions} />}
      
      </Main>

    </div>
  );
}

