import { useEffect, useReducer } from "react";
import Header from "./Component/Header";
import "./index.css";
import Main from "./Component/Mainn";
import Loader from "./Component/Loader";
import StartScreen from "./Component/startScreen";
import Error from "./Component/Error";
import Question from "./Component/Question";

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        statuz: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        statuz: "error",
      };
    case "start":
      return {
        ...state,
        statuz: "active",
      };
    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    default:
      throw new Error("Action unknown");
  }
}

const initialState = {
  questions: [],
  index: 0,
  statuz: "loading",
  answer: null,
  points: 0,
  // loading, error, ready, active, finished
};

export default function App() {
  const [{ questions, statuz, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestion = questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => {
        console.error("Fetch error:", err);
        dispatch({ type: "dataFailed" });
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {statuz === "loading" && <Loader />}
        {statuz === "error" && <Error />}
        {statuz === "ready" && (
          <StartScreen numQuestion={numQuestion} dispatch={dispatch} />
        )}
        {statuz === "active" && (
          <Question
            question={questions[index]}
            answer={answer}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
