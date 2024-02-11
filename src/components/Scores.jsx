/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
function Scores({ points, maxPossiblePoints }) {
   const percentage = (points / maxPossiblePoints) * 100;

   let emoji;
   if (percentage === 100) emoji = "🥇";
   if(percentage >= 80 && percentage < 100) emoji = "🎉";
   if(percentage >= 50 && percentage < 80) emoji = "🤗";
   if(percentage >= 0 && percentage < 50) emoji = "🤨";
   if(percentage === 0) emoji = "🤦🏽‍♂️";

  return (
    <p className="result">
      You scored <span>{emoji}</span> <strong>{points}</strong> outta {maxPossiblePoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}

export default Scores;
