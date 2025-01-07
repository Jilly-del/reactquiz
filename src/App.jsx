import { useEffect, useReducer } from "react";
import Header from "./Header";
import "./index.css";
import Main from "./Mainn";

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
  // loading,error,ready,active,finished
  statuz: "loading",
};
export default function App() {
  const [state, dispact] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispact({ type: "dataReceived", payload: data }))
      .catch((err) => dispact({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p> 1/15</p>
        <p>Questionzzzz</p>
      </Main>
    </div>
  );
}
