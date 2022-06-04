import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Kampus from "./pages/kampus";
import Kafe from "./pages/kafe";
import Supermarket from "./pages/supermarket";
import About from "./pages/about";
import GameOver from "./pages/gameOver";
import Win from "./pages/win";
import ProgressBar from "./progressBar";
import Clock from "./clock";
import Weather from "./weather";
import News from "./news";
import Background from "./background";

export default function App() {
  const [optionValue, setOptionValue] = useState("");
  const [name, setName] = useState("");
  const [index, setIndex] = useState(0);
  const [progressValue1, setProgressValue1] = useState(1000);
  const [progressValue2, setProgressValue2] = useState(1000);
  const [progressValue3, setProgressValue3] = useState(1000);
  const [progressValue4, setProgressValue4] = useState(0);
  const [render, setRender] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);
  const [location, setLocation] = useState("");
  const [lose, setLose] = useState(0);
  const [win, setWin] = useState(0);
  const [background, setBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue1((oldValue) => {
        const newValue = oldValue - 0.1;

        if (newValue <= 0) {
          setLose(1);
          clearInterval(interval);
        }

        return newValue;
      });
      setProgressValue2((oldValue) => {
        const newValue = oldValue - 0.1;

        if (newValue <= 0) {
          setLose(1);
          clearInterval(interval);
        }

        return newValue;
      });
      setProgressValue3((oldValue) => {
        const newValue = oldValue - 0.1;

        if (newValue <= 0) {
          setLose(1);
          clearInterval(interval);
        }

        return newValue;
      });
    }, 400);
  }, []);

  useEffect(() => {
    var interval = setInterval(() => {
      setMinute((oldValue) => {
        const newValue = oldValue + 1;
        if (newValue >= 60) {
          setMinute(0);
          setHour((oldValue) => {
            const newValue = oldValue + 1;
            if (newValue >= 24) {
              setHour(0);
              setDay((oldValue) => {
                const newValue = oldValue + 1;
                if (newValue >= 7) {
                  setDay(0);
                  setWin(1);
                  clearInterval(interval);
                }
                return newValue;
              });
            }
            return newValue;
          });
        }
        return newValue;
      });
    }, 1000);
  }, []);

  return (
    <Router>
      <Background background={background} />
      <Clock
        hour={hour}
        minute={minute}
        day={day}
        name={name}
        render={render}
        setMinute={setMinute}
        setHour={setHour}
        setDay={setDay}
      />
      <span>
        <ProgressBar
          color={"#ff7979"}
          width={"150px"}
          value={progressValue1}
          max={100}
          render={render}
        />
        <ProgressBar
          color={"#ff7979"}
          width={"150px"}
          value={progressValue2}
          max={100}
          render={render}
        />
        <ProgressBar
          color={"#ff7979"}
          width={"150px"}
          value={progressValue3}
          max={100}
          render={render}
        />
        <ProgressBar
          color={"#ff7979"}
          width={"150px"}
          value={progressValue4}
          max={100}
          render={render}
        />
      </span>
      <Weather render={render} />
      <Routes>
        <Route
          path="/"
          element={
            <Login
              optionValue={optionValue}
              setOptionValue={setOptionValue}
              name={name}
              setName={setName}
              setRender={setRender}
              index={index}
              setIndex={setIndex}
              setProgressValue1={setProgressValue1}
              setProgressValue2={setProgressValue2}
              setProgressValue3={setProgressValue3}
              setProgressValue4={setProgressValue4}
              setMinute={setMinute}
              setHour={setHour}
              setDay={setDay}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              setProgressValue1={setProgressValue1}
              setProgressValue2={setProgressValue2}
              setProgressValue3={setProgressValue3}
              setMinute={setMinute}
              setHour={setHour}
              hour={hour}
              setDay={setDay}
              setLocation={setLocation}
              lose={lose}
              setLose={setLose}
              win={win}
              index={index}
              setBackground={setBackground}
            />
          }
        />
        <Route
          path="/kampus"
          element={
            <Kampus
              setProgressValue1={setProgressValue1}
              setProgressValue2={setProgressValue2}
              setProgressValue3={setProgressValue3}
              setProgressValue4={setProgressValue4}
              setMinute={setMinute}
              setHour={setHour}
              hour={hour}
              setDay={setDay}
              prodi={optionValue}
              setLocation={setLocation}
              lose={lose}
              setLose={setLose}
              win={win}
              setWin={setWin}
              index={index}
              setBackground={setBackground}
            />
          }
        />
        <Route
          path="/kafe"
          element={
            <Kafe
              setProgressValue1={setProgressValue1}
              setProgressValue2={setProgressValue2}
              setProgressValue3={setProgressValue3}
              setMinute={setMinute}
              setHour={setHour}
              hour={hour}
              setDay={setDay}
              setLocation={setLocation}
              lose={lose}
              setLose={setLose}
              win={win}
              index={index}
              setBackground={setBackground}
            />
          }
        />
        <Route
          path="/supermarket"
          element={
            <Supermarket
              setProgressValue1={setProgressValue1}
              setProgressValue2={setProgressValue2}
              setProgressValue3={setProgressValue3}
              setMinute={setMinute}
              setHour={setHour}
              hour={hour}
              setDay={setDay}
              setLocation={setLocation}
              lose={lose}
              setLose={setLose}
              win={win}
              index={index}
              setBackground={setBackground}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              location={location}
              setRender={setRender}
              setProgressValue1={setProgressValue1}
              setProgressValue2={setProgressValue2}
              setProgressValue3={setProgressValue3}
              setBackground={setBackground}
            />
          }
        />
        <Route
          path="/gameover"
          element={
            <GameOver
              setRender={setRender}
              setLose={setLose}
              setBackground={setBackground}
            />
          }
        />
        <Route
          path="/win"
          element={
            <Win
              setRender={setRender}
              setLose={setLose}
              progressValue4={progressValue4}
              setBackground={setBackground}
            />
          }
        />
      </Routes>
      <News render={render} />
    </Router>
  );
}
