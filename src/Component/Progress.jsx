import PropTypes from "prop-types";

function Progress({ index, numQuestion }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
    </header>
  );
}
Progress.propTypes = {
  index: PropTypes.number.isRequired,
  numQuestion: PropTypes.number.isRequired,
};

export default Progress;
