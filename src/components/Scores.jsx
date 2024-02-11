/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
function Scores({ points, maxPossiblePoints }) {
   const percentage = (points / maxPossiblePoints) * 100;

  return (
    <p className="result">
      You scored <strong>{points}</strong> outta {maxPossiblePoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}

export default Scores;
