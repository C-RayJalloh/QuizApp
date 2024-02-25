/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useReducer, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const appStyles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'

};

const initialState = {
balance: 0,
loan: 0,
isActive: false
};

function reducer(state, action) {
switch (action.type) {
  case 'openAccount':
    return {...state, balance: 500, isActive: true };

    case 'deposite': 
    return {...state, balance: state.balance + action.payload};

    case 'withdraw': 
    return {...state, balance: state.balance - action.payload}

    case 'loan':
      // if the loan amount is greater than zero then return the current state and 
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload
      };

  case 'payloan': 
  return {...state, balance: state.balance - 5000, loan: state.loan - 5000};

  case 'closeAccount':
    if(state.loan > 0 || state.balance !== 0 ) return state;
    return initialState;

  default:
    throw new Error("Action unknown");
}
}


function Challenge() {
const [{balance, loan, isActive}, dispatch] = useReducer(reducer, initialState)




return (

  <div className="App">
  <h1>useReducer Bank Account</h1>
  <p>Balance: {balance}</p>
  <p>Loan: {loan}</p>

  
  <p>
    <button onClick={() => dispatch({type: "openAccount"})} disabled={isActive}>
      Open account
    </button>
  </p>
  <p>
    <button onClick={() => dispatch({type: "deposite", payload: 150 })} disabled={!isActive}>
      Deposit 150
    </button>
  </p>
  <p>
    <button onClick={() => dispatch({ type: "withdraw", payload: 50})} disabled={!isActive}>
      Withdraw 50
    </button>
  </p>
  <p>
    <button onClick={() => dispatch({ type: "loan", payload: 5000})} disabled={!isActive}>
      Request a loan of 5000
    </button>
  </p>
  <p>
    <button onClick={() => dispatch({type: "payloan"})} disabled={!isActive}>
      Pay loan
    </button>
  </p>
  <p>
    <button onClick={() => dispatch({ type: "closeAccount"})} disabled={!isActive}>
      Close account
    </button>
  </p>
</div>


);
}



export default Challenge







ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*
    <Challenge />
  */}
  
  <App />
  </React.StrictMode>
);
