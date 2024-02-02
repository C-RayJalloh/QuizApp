/* eslint-disable react/prop-types */
function Start({ numQuestions, dispatch}) {
    return (
        <div className="start">
            <h2>Welcome to the Quiz!</h2>
            <h3>{numQuestions} questions to test your React Mastery</h3>
            <button className="btn btn-ui" onClick={() => dispatch({type: "start"})}>Let &apos;s start</button>
        </div>
    )
}

export default Start
