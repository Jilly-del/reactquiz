import PropTypes from "prop-types";

function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className=" result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}(
        {Math.ceil(percentage)})
      </p>
      <p className="highscore"> (Highscore : {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

FinishedScreen.propTypes = {
  points: PropTypes.number.isRequired,
  highscore: PropTypes.number.isRequired,
  maxPossiblePoints: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

export default FinishedScreen;
