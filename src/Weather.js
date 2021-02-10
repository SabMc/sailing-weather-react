import React from "react";

export default function Weather() {
  return (
    <div className="CurrentCondition">
      <div className="SearchForm">
        <form className="search-engine">
          <input type="search" placeholder="Sailing Destination" />
          <input type="submit" className="Search" value="Fair Wind" />
        </form>
      </div>
      <h1>Amsterdam</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Wednesday | 10 Feb</li>
            <li>09:48</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>xx | xx °C</li>
            <li>Humidity 30%</li>
            <li>1010 hPa</li>
          </ul>
        </div>
      </div>
      <h2>Beaufort 3 Gentle Breeze</h2>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Wind 12 km/h</li>
            <li>Gust 25 km/h</li>
            <li>SSE</li>
            <li>Visibility 6 km</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
