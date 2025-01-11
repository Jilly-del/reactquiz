import PropTypes from "prop-types";

function NextButton({ answer, dispatch, index, numQuestions }) {
  if (answer === null) return;
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}

NextButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]),
  index: PropTypes.number,
  numQuestions: PropTypes.number,
};

export default NextButton;
