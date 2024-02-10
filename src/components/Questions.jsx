/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Options from '../components/Options';

function Questions({question, dispatch, answer }) {
    console.log(question);
    return (
      // displaying the current questions  and options for users to answer
      <div>
        <h4>{question.question}</h4>
         <Options  question={question} dispatch={dispatch} answer={answer}/>
      </div>
    );
}

export default Questions
