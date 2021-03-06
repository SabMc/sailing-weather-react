import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Beaufort from "./Beaufort";
import WindDirection from "./WindDirection";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>
        <TemperatureConversion celsius={props.data.temp} />
        in {props.data.city}
      </h2>
      <div className="row">
        <div className="col-4">
          <FormattedDate date={props.data.date} />
        </div>
        <div className="col-4">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col-4">
          <ul>
            <li>
              {Math.round(props.data.temperatureMax)}° |{" "}
              {Math.round(props.data.temperatureMin)}° C
            </li>
            <li>Humidity {props.data.humidity}%</li>
            <li>{props.data.pressure} hPa</li>
          </ul>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6">
          <ul>
            <li>
              <h3>
                <Beaufort beaufort={props.data.wind} />
              </h3>
            </li>
            <li>Wind {Math.round(props.data.wind * 1.94384449)} knots</li>
            <li>
              <WindDirection degree={props.data.windDeg} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Visibility {Math.round(props.data.visibility / 1000)} km</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
