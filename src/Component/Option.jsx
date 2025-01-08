import PropTypes from "prop-types";

function Option({ question }) {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button key={option} className="btn btn-option">
          {option}
        </button>
      ))}
    </div>
  );
}

Option.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Option;
