import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Clue } from "./Clue";

function App() {
  return (
    <div className="App">
      <Clue
        clueText="Spot a sign with a house and now take heed, The name of the builder is the answer ye need!"
        walkingDirections="Leaving Roseburn Primary School walk along the left-hand side of Roseburn Street towards Roseburn."
      />
    </div>
  );
}

export default App;
