/* eslint-disable react/prop-types */
import { useEffect } from "react"

function Timer({ dispatch, timeLeft}) {
 // seperate the mins form secs
 const mins = Math.floor(timeLeft / 60)
 const secs = timeLeft % 60;

    // create a side effect on mount to initialize a timer as soon as the quiz start
 useEffect( function(){
 const time =  setInterval(() => {dispatch({type: "tick"})}, 1000);

 return ()=> clearInterval(time);
 }, [dispatch]);


    return (
        <div className="timer">
            {mins < 10 && "0"}
            {mins} : {secs < 10 && "0"} {secs } remaining
        </div>
    )
}

export default Timer
