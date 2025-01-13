import PropTypes from "prop-types";
import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="timer">
      {mins}:{formattedSeconds}
    </div>
  );
}
export default Timer;

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  secondsRemaining: PropTypes.number,
};
