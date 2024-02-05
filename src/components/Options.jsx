/* eslint-disable react/prop-types */

// Optons component
function Options({ question }) {
  return (
    <>
      {/* map through the options and render a button for each*/}
      <div className="options">
        {question.options.map((option) => (
          <button className="btn btn-option" key={option}>
            {option}
          </button>
        ))}
      </div>
    </>
  );
}

export default Options;
