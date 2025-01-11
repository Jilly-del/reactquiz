import PropTypes from "prop-types";

function FinishedScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className=" result">
      You scored <strong>{points}</strong> out of {maxPossiblePoints}(
      {Math.ceil(percentage)})
    </p>
  );
}

FinishedScreen.propTypes = {
  points: PropTypes.number.isRequired,
  maxPossiblePoints: PropTypes.number,
};

export default FinishedScreen;
