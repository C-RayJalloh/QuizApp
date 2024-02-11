/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function NextButton({ dispatch, answer, index, numQuestions }) {
    if (answer === null) return null;
    if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

    if (index === numQuestions - 1)
      return (
        <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Done
      </button>
        )
}

export default NextButton
