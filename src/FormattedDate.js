import React from "react";

export default function FormattedDate(props) {
  let nr = props.date.getDate();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()];

  let year = props.date.getFullYear();

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      <ul>
        <li>{day}</li>
        <li>
          {nr} {month} {year}
        </li>
        <li>
          {hours}:{minutes}
        </li>
      </ul>
    </div>
  );
}
