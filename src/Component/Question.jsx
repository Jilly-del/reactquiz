import PropTypes from "prop-types";
import Option from "./Option";

function Question({ question, answer, dispatch }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Question;
