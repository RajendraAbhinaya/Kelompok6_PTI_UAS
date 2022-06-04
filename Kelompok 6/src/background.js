import React from "react";
import "../src/style.css";
import { Helmet } from "react-helmet";

/*
  1 = home day
  2 = home night
  3 = kampus day
  4 = kampus night
  5 = kafe day
  6 = kafe night
  7 = supermarket day
  8 = supermarket night
  9 = about us
  10 = game over
  11 = win
*/

export default function Background(props) {
  if (props.background === 1) {
    return (
      <Helmet>
        <style>
          {"body { background: linear-gradient(to right, #4ca2cd, #67b26f); }"}
        </style>
      </Helmet>
    );
  } else if (props.background === 2) {
    return (
      <Helmet>
        <style>
          {"body { background: linear-gradient(to right, #3b4371, #f3904f); }"}
        </style>
      </Helmet>
    );
  } else if (props.background === 3) {
    return (
      <Helmet>
        <style>
          {"body { background: linear-gradient(to right, #ff6a00, #ee0979); }"}
        </style>
      </Helmet>
    );
  } else if (props.background === 4) {
    return (
      <Helmet>
        <style>
          {"body { background: linear-gradient(to right, #fdb99b, #cf8bf3, #a770ef); }"}
        </style>
      </Helmet>
    );
  } else if (props.background === 5) {
    return (
      <Helmet>
        <style>
          {"body { background: linear-gradient(to right, #fc67fa, #f4c4f3); }"}
        </style>
      </Helmet>
    );
  } else if (props.background === 6) {
    return (
      <Helmet>
        <style>
          {"body { background: linear-gradient(to right, #ffff1c, #00c3ff); }"}
        </style>
      </Helmet>
    );
  } else if (props.background === 7) {
    return (
      <Helmet>
        <style>
          {"body { background: linear-gradient(to right, #feb47b, #ff7e5f); }"}
        </style>
      </Helmet>
    );
  } else if (props.background === 8) {
    return (
      <Helmet>
        <style>
          {"body { background: linear-gradient(to right, #333399, #ff00cc); }"}
        </style>
      </Helmet>
    );
  } else if (props.background === 9) {
    return (
      <Helmet>
        <style>
          {"body { background: linear-gradient(to right, #2657eb, #de6161); }"}
        </style>
      </Helmet>
    );
  } else if (props.background === 10) {
    return (
      <Helmet>
        <style>
          {"body { background: linear-gradient(to right, #89253e, #3a6186); }"}
        </style>
      </Helmet>
    );
  } else if (props.background === 11) {
    return (
      <Helmet>
        <style>
          {"body { background: linear-gradient(to right, #556270, #4ecdc4); }"}
        </style>
      </Helmet>
    );
  }
}
