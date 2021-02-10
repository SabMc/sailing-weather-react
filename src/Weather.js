import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="SearchForm">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Sailing Destination"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="Search w-100 btn btn-light"
                value="Fair Wind"
              />
            </div>
          </div>
        </form>
      </div>
      <h2>Amsterdam</h2>
      <div className="row">
        <div className="col-4">
          <ul>
            <li>Wednesday | 10 Feb</li>
            <li>09:48</li>
          </ul>
        </div>
        <div className="col-4">
          <img src="./Sun1.png" />
        </div>
        <div className="col-4">
          <ul>
            <li>xx | xx °C</li>
            <li>Humidity 30%</li>
            <li>1010 hPa</li>
          </ul>
        </div>
      </div>
      <h3>Beaufort 3 Gentle Breeze</h3>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Wind 12 knots</li>
            <li>Gust 25 knots</li>
            <li>SSE</li>
            <li>Visibility 6 km</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
