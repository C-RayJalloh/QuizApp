/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Options from '../components/Options';

function Questions({question}) {
    console.log(question);
    return (
      // displaying the current questions  and options for users to answer
      <div>
        <h4>{question.question}</h4>
         <Options  question={question}/>
      </div>
    );
}

export default Questions
