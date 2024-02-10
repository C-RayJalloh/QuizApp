/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// Optons component
function Options({ question, dispatch, answer }) {
  return (
    <>
      {/* map through the options and render a button for each*/}
      <div className="options">
        {question.options.map((option, index) => (
          <button className="btn btn-option" key={option} onClick={dispatch({type: 'answerIs', payload: index})}>
            {option}
          </button>
        ))}
      </div>
    </>
  );
}

export default Options;
