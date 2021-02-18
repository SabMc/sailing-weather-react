import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Sailing Weather App</h1>
        <Weather defaultCity="Amsterdam" />
        <footer>
          <a
            className="App-link"
            href="https://github.com/SabMc/sailing-weather-react"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Sabrina McEwan
        </footer>
      </div>
    </div>
  );
}
