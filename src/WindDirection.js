import React from "react";

export default function WindDirection(props) {
  let deg = props.degree;

  return (
    <div className="WindDirection">
      {deg < 11.25
        ? "N"
        : deg < 33.75
        ? "NNE"
        : deg < 56.25
        ? "NE"
        : deg < 78.75
        ? "ENE"
        : deg < 101.25
        ? "E"
        : deg < 123.75
        ? "ESE"
        : deg < 146.25
        ? "SE"
        : deg < 168.75
        ? "SSE"
        : deg < 191.25
        ? "S"
        : deg < 213.75
        ? "SSW"
        : deg < 236.25
        ? "SW"
        : deg < 258.75
        ? "WSW"
        : deg < 281.25
        ? "W"
        : deg < 303.75
        ? "WNW"
        : deg < 326.25
        ? "NW"
        : deg < 348.75
        ? "NNW"
        : "N"}
    </div>
  );
}
