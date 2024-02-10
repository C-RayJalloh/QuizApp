/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// Options component
function Options({ question, dispatch, answer }) {
  const correctAns = answer !== null;
  return (
    <>
      {/* map through the options and render a button for each*/}
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              correctAns
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={correctAns}
            onClick={() => dispatch({ type: "answerIs", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}

export default Options;
