/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Questions({question}) {
    console.log(question);
    return (
      // displaying the current questions  and options for users to answer
      <div>
        <h4>{question.question}</h4>
         

         {/* map through the options and render a button for each*/}
        <div className="options">
          {question.options.map((option) => (
            <button className="btn btn-option" key={option}>
              {option}
            </button>
          ))}
        </div>
        
      </div>
    );
}

export default Questions
