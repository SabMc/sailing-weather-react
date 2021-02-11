import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
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
                autoFocus="on"
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
            <li>Wednesday</li>
            <li>10 Feb 2021 </li>
            <li>09:48</li>
          </ul>
        </div>
        <div className="col-4">
          <ReactAnimatedWeather
            icon="WIND"
            color="#7D5F41"
            size={100}
            animate={true}
          />
        </div>
        <div className="col-4">
          <ul>
            <li>xx | xx °C</li>
            <li>Humidity 30%</li>
            <li>1010 hPa</li>
          </ul>
        </div>
      </div>
      <h3>Beaufort 3: Gentle Breeze</h3>
      <div className="row justify-content-center">
        <div className="col-4">
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
