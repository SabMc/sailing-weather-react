import React from "react";

export default function Beaufort(props) {
  let bfNr = Math.round(props.beaufort * 3.6);

  return (
    <div className="Beaufort">
      {bfNr < 2
        ? "Bft 0: Calm"
        : bfNr < 6
        ? "Bft 1: Light Air"
        : bfNr < 12
        ? "Bft 2: Light Breeze"
        : bfNr < 20
        ? "Bft 3: Gentle Breeze"
        : bfNr < 29
        ? "Bft 4: Moderate Breeze"
        : bfNr < 39
        ? "Bft 5: Fresh Breeze"
        : bfNr < 50
        ? "Bft 6: Strong Breeze"
        : bfNr < 62
        ? "Bft 7: Moderate Gale"
        : bfNr < 75
        ? "Bft 8: Gale"
        : bfNr < 89
        ? "Bft 9: Strong Gale"
        : bfNr < 103
        ? "Bft 10: Storm"
        : bfNr < 118
        ? "Bft 11: Violent Storm"
        : bfNr >= 118
        ? "Bft 12: Hurricane"
        : ""}
    </div>
  );
}
