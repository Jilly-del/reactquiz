import PropTypes from "prop-types";

function Option({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`btn btn-option  ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

Option.propTypes = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Option;
