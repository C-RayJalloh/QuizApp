/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
function Scores({ points, maxPossiblePoints, highscore, dispatch }) {
   const percentage = (points / maxPossiblePoints) * 100;

   let emoji;
   if (percentage === 100) emoji = "🥇";
   if(percentage >= 80 && percentage < 100) emoji = "🎉";
   if(percentage >= 50 && percentage < 80) emoji = "🤗";
   if(percentage >= 0 && percentage < 50) emoji = "🤨";
   if(percentage === 0) emoji = "🤦🏽‍♂️";

  return (
    <>
    <p className="result">
      You scored <span>{emoji}</span> <strong>{points}</strong> outta {maxPossiblePoints} (
      {Math.ceil(percentage)}%)
    </p>
    <p className="highscore">
        (Highscore: {highscore} points)
    </p>

    <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart
      </button>
    </>
  );
}

export default Scores;
