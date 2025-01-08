import PropTypes from "prop-types";
import Option from "./Option";

function Question({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Question;
