function startScreen({ numQuestion }) {
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{numQuestion} question to test your react mastery</h3>
      <button className="btn btn-ui">Start Quiz</button>
    </div>
  );
}

export default startScreen;
