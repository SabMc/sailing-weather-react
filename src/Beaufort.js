import React from "react";

export default function Beaufort(props) {
  let bfNr = Math.round(props.beaufort * 3.6);

  return (
    <div className="Beaufort">
      {bfNr < 2
        ? "Beaufort 0 Calm"
        : bfNr < 6
        ? "Beaufort 1 Light Air"
        : bfNr < 12
        ? "Beaufort 2 Light Breeze"
        : bfNr < 20
        ? "Beaufort 3 Gentle Breeze"
        : bfNr < 29
        ? "Beaufort 4 Moderate Breeze"
        : bfNr < 39
        ? "Beaufort 5 Fresh Breeze"
        : bfNr < 50
        ? "Beaufort 6 Strong Breeze"
        : bfNr < 62
        ? "Beaufort 7 Moderate Gale"
        : bfNr < 75
        ? "Beaufort 8 Gale"
        : bfNr < 89
        ? "Beaufort 9 Strong Gale"
        : bfNr < 103
        ? "Beaufort 10 Storm"
        : bfNr < 118
        ? "Beaufort 11 Violent Storm"
        : bfNr >= 118
        ? "Beaufort 12 Hurricane"
        : ""}
    </div>
  );
}
