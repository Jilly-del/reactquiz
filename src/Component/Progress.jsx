import PropTypes from "prop-types";

function Progress({ index, numQuestion, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}
Progress.propTypes = {
  index: PropTypes.number.isRequired,
  numQuestion: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  answer: PropTypes.number,
  maxPossiblePoints: PropTypes.number.isRequired,
};

export default Progress;
