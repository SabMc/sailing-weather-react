import React, { useState } from "react";

import "./TemperatureConversion.css";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureConversion">
        {Math.round(props.celsius)}
        <strong>°C</strong> |{" "}
        <a href="/" onClick={showFahrenheit} className="link">
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div className="TemperatureConversion">
        {Math.round(fahrenheit())}
        <a href="/" onClick={showCelsius} className="link">
          °C
        </a>{" "}
        | <strong>°F</strong>
      </div>
    );
  }
}
