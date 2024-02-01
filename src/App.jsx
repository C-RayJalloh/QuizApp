/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';


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
      return {...state, status: 'error'};

    default:
      throw new Error('Action unknown');
  }
}




export default function App() {
  // useReducer hook 
  const  [state, dispatch] = useReducer(reducer,initailState)
  
  // this side effect is going to run once when the component mounts.
  // and fetch the questions from the local server
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type: 'dataReceived', payload: data}))
      // eslint-disable-next-line no-unused-vars
      .catch((err) => dispatch({type: 'datFailed'}));
  }, []);
  return (
    <div className="app">
      <Header />

      <Main>
        <p>1/10</p>
        <p>Questions</p>
      </Main>

    </div>
  );
}

