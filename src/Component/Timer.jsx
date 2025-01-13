import PropTypes from "prop-types";

import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: "tick " });
      }, 1000);
    },
    [dispatch]
  );
  return <div className="timer">{secondsRemaining}</div>;
}
Timer.propTypes = {
  dispatch: PropTypes.object,
  secondsRemaining: PropTypes.Number,
};
export default Timer;
