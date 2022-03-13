import "./App.css";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";
import { useState } from "react";

const simpsonDefault = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left",
};

function App() {
  const [simpson, setSimpson] = useState(simpsonDefault);
  const getSimpson = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        setSimpson(data[0]);
      });
  };

  return (
    <div className="App">
      <QuoteCard simpson={simpson} />
      <button type="button" onClick={getSimpson}>Get simpson</button>
    </div>
  );
}

export default App;
