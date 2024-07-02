import "./App.css";
import { useState } from "react";
import Card from "./components/card/Card";

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  return (
    <>
      <div className="container">
        <div>
          <h1 className="headerTitle">Rick and Morty Memory Game</h1>
          <p className="headerText">
            Get points by cicking on an image but don't click on any more than
            once!
          </p>
        </div>
        <div>
          <p className="headerScore">Score: {score}</p>
          <p className="headerScore">Top Score: {topScore}</p>
        </div>
      </div>
      <div className="subContainer">
        <Card
          setScore={setScore}
          setTopScore={setTopScore}
          topScore={topScore}
        />
      </div>
    </>
  );
}

export default App;
