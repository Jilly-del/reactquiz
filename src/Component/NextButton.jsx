import PropTypes from "prop-types";

function NextButton({ answer, dispatch }) {
  if (answer === null) return;
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    </div>
  );
}

NextButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]),
};

export default NextButton;
