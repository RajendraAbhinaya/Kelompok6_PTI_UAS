import React from "react";

export default function Clock(props) {
  var hours;
  var minutes;
  var day;
  var greeting;

  if (props.day === 0) {
    day = "Minggu";
  } else if (props.day === 1) {
    day = "Senin";
  } else if (props.day === 2) {
    day = "Selasa";
  } else if (props.day === 3) {
    day = "Rabu";
  } else if (props.day === 4) {
    day = "Kamis";
  } else if (props.day === 5) {
    day = "Jumat";
  } else if (props.day === 6) {
    day = "Sabtu";
  }

  if (props.hour < 10) {
    hours = "0" + props.hour;
  } else {
    hours = props.hour;
  }
  if (props.minute < 10) {
    minutes = "0" + props.minute;
  } else {
    minutes = props.minute;
  }

  if (props.hour >= 6 && props.hour <= 11) {
    greeting = "Morning";
  }
  if (props.hour >= 12 && props.hour <= 15) {
    greeting = "Afternoon";
  }
  if (props.hour >= 16 && props.hour <= 18) {
    greeting = "Evening";
  }
  if (props.hour >= 19 && props.hour <= 24) {
    greeting = "Night";
  }
  if (props.hour >= 0 && props.hour <= 5) {
    greeting = "Night";
  }

  if (props.render === 1) {
    return (
      <div>
        <h2>
          {day} - {hours}:{minutes}
        </h2>
        <h1>
          Good {greeting} {props.name}
        </h1>
      </div>
    );
  }
}
