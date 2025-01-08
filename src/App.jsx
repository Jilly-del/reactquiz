import { useEffect, useReducer } from "react";
import Header from "./Header";
import "./index.css";
import Main from "./Mainn";
import Loader from "./Loader";
import StartScreen from "./startScreen";
import Error from "./Error";

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

    default:
      throw new Error("Action unknown");
  }
}

const initialState = {
  questions: [],
  statuz: "loading", // loading, error, ready, active, finished
};

export default function App() {
  const [{ questions, statuz }, dispatch] = useReducer(reducer, initialState);
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
        {statuz === "ready" && <StartScreen numQuestion={numQuestion} />}
      </Main>
    </div>
  );
}
