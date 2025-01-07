import { useEffect } from "react";
import Header from "./Header";
import "./index.css";
import Main from "./Mainn";

export default function App() {
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data));
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
