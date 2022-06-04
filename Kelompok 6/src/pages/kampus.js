import React, { useState } from "react";
import "/src/pages/style.css";
import { useNavigate } from "react-router-dom";
import Subject1 from "./subjects/subject1";
import Subject2 from "./subjects/subject2";
import Subject3 from "./subjects/subject3";
import Subject4 from "./subjects/subject4";
import Subject5 from "./subjects/subject5";
import Subject6 from "./subjects/subject6";
import Subject7 from "./subjects/subject7";
import Subject8 from "./subjects/subject8";
import avatar1 from "../img/1.png";
import avatarBelajar1 from "../img/1-Belajar.gif";
import avatar2 from "../img/2.png";
import avatarBelajar2 from "../img/2-Belajar.gif";
import avatar3 from "../img/3.png";
import avatarBelajar3 from "../img/3-Belajar.gif";

var busy = 0;
var subject1 = "Subject 1";
var subject2 = "Subject 2";
var subject3 = "Subject 3";
var subject4 = "Subject 4";
var subject5 = "Subject 5";
var subject6 = "Subject 6";
var subject7 = "Subject 7";
var subject8 = "Subject 8";
var avatar;

export default function Kampus(props) {
  const [studying, setStudying] = useState(0);
  let navigate = useNavigate();
  props.setLocation("/kampus");

  if (props.lose === 1) {
    navigate("/gameover");
  }

  if (props.win === 1) {
    navigate("/win");
  }

  if (studying === 1) {
    if (props.index === 0) {
      avatar = avatarBelajar1;
    } else if (props.index === 1) {
      avatar = avatarBelajar2;
    } else if (props.index === 2) {
      avatar = avatarBelajar3;
    }
  } else {
    if (props.index === 0) {
      avatar = avatar1;
    } else if (props.index === 1) {
      avatar = avatar2;
    } else if (props.index === 2) {
      avatar = avatar3;
    }
  }

  function moveDecrement(destination) {
    if (busy === 0 && studying === 0) {
      navigate(destination);
      busy = 1;
      var counter = 0;
      var interval = setInterval(() => {
        counter += 1;
        if (counter === 5) {
          busy = 0;
          clearInterval(interval);
        }
        props.setProgressValue1((oldValue) => {
          const newValue = oldValue - 1;

          if (newValue === 0) {
            props.setLose(1);
            clearInterval(interval);
          }

          return newValue;
        });
        props.setProgressValue2((oldValue) => {
          const newValue = oldValue - 1;

          if (newValue === 0) {
            props.setLose(1);
            clearInterval(interval);
          }

          return newValue;
        });
        props.setProgressValue3((oldValue) => {
          const newValue = oldValue - 1;

          if (newValue === 0) {
            props.setLose(1);
            clearInterval(interval);
          }

          return newValue;
        });
        props.setMinute((oldValue) => {
          const newValue = oldValue + 3;
          if (newValue >= 60) {
            props.setMinute(0);
            props.setHour((oldValue) => {
              const newValue = oldValue + 1;
              if (newValue >= 24) {
                props.setHour(0);
                props.setDay((oldValue) => {
                  const newValue = oldValue + 1;
                  if (newValue >= 7) {
                    props.setDay(0);
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
      }, 100);
    }
  }

  if (props.hour >= 18 || props.hour < 6) {
    props.setBackground(4);
  } else {
    props.setBackground(3);
  }

  if (props.prodi === "Informatika") {
    subject1 = "Discrete Mathematics";
    subject2 = "Programming Fundamentals";
    subject3 = "Digital Systems";
    subject4 = "Linear Algebra";
    subject5 = "Pancasila";
    subject6 = "Religion";
    subject7 = "Civics";
    subject8 = "English 1";
  } else if (props.prodi === "Manajemen") {
    subject1 = "Fundamentals of Business & Management";
    subject2 = "Mathematics for Business";
    subject3 = "Principles of Accounting";
    subject4 = "Introduction to Information Technology & Business";
    subject5 = "Pancasila";
    subject6 = "Religion";
    subject7 = "Civics";
    subject8 = "English 1";
  } else if (props.prodi === "Akuntansi") {
    subject1 = "Basic Financial Accounting 1";
    subject2 = "Fundamentals of Business & Management";
    subject3 = "Fundamentals of Economics";
    subject4 = "Mathematics for Business";
    subject5 = "Pancasila";
    subject6 = "Religion";
    subject7 = "Indonesian Language";
    subject8 = "English 1";
  } else if (props.prodi === "Ilmu Komunikasi") {
    subject1 = "Introduction to Communication Science";
    subject2 = "Critical and Creative Thinking";
    subject3 = "Creativee Writing and Story Telling";
    subject4 = "Communication and Technology";
    subject5 = "Business Prnciples";
    subject6 = "Digital Photography";
    subject7 = "English 1";
    subject8 = "Pancasila";
  } else if (props.prodi === "Sistem Informasi") {
    subject1 = "Management Information System";
    subject2 = "Corporate Business Process";
    subject3 = "Accounting";
    subject4 = "Algorithms and Data Structures";
    subject5 = "Operating System Concept";
    subject6 = "Indonesian Language";
    subject7 = "Civics";
    subject8 = "English 1";
  } else if (props.prodi === "Desain Komunikasi Visual") {
    subject1 = "Typography Principles";
    subject2 = "Photography Principles";
    subject3 = "Nirmana";
    subject4 = "Drawing Principles";
    subject5 = "Creativity Theory";
    subject6 = "Pancasila";
    subject7 = "Religion";
    subject8 = "English 1";
  } else if (props.prodi === "Film & Animasi") {
    subject1 = "Color Theory and Design Principles";
    subject2 = "Digital Graphics";
    subject3 = "Art History for Filmmakers";
    subject4 = "Creative Process";
    subject5 = "Basic Drawing";
    subject6 = "Moving Image Storytelling";
    subject7 = "Lens-based Media";
    subject8 = "Pancasila";
  }

  return (
    <div>
      <button
        onClick={() => {
          navigate("/about");
        }}
        className={"button"}
      >
        About Us
      </button>
      <div>
        <img src={avatar} />
      </div>
      <h1>Kampus</h1>
      <div>
        <Subject1
          subject={subject1}
          studying={studying}
          setStudying={setStudying}
          setProgressValue1={props.setProgressValue1}
          setProgressValue2={props.setProgressValue2}
          setProgressValue3={props.setProgressValue3}
          setProgressValue4={props.setProgressValue4}
          setMinute={props.setMinute}
          setHour={props.setHour}
          setDay={props.setDay}
          lose={props.lose}
          setLose={props.setLose}
          setWin={props.setWin}
        />
        <Subject2
          subject={subject2}
          studying={studying}
          setStudying={setStudying}
          setProgressValue1={props.setProgressValue1}
          setProgressValue2={props.setProgressValue2}
          setProgressValue3={props.setProgressValue3}
          setProgressValue4={props.setProgressValue4}
          setMinute={props.setMinute}
          setHour={props.setHour}
          setDay={props.setDay}
          lose={props.lose}
          setLose={props.setLose}
          setWin={props.setWin}
        />
        <Subject3
          subject={subject3}
          studying={studying}
          setStudying={setStudying}
          setProgressValue1={props.setProgressValue1}
          setProgressValue2={props.setProgressValue2}
          setProgressValue3={props.setProgressValue3}
          setProgressValue4={props.setProgressValue4}
          setMinute={props.setMinute}
          setHour={props.setHour}
          setDay={props.setDay}
          lose={props.lose}
          setLose={props.setLose}
          setWin={props.setWin}
        />
        <Subject4
          subject={subject4}
          studying={studying}
          setStudying={setStudying}
          setProgressValue1={props.setProgressValue1}
          setProgressValue2={props.setProgressValue2}
          setProgressValue3={props.setProgressValue3}
          setProgressValue4={props.setProgressValue4}
          setMinute={props.setMinute}
          setHour={props.setHour}
          setDay={props.setDay}
          lose={props.lose}
          setLose={props.setLose}
          setWin={props.setWin}
        />
        <Subject5
          subject={subject5}
          studying={studying}
          setStudying={setStudying}
          setProgressValue1={props.setProgressValue1}
          setProgressValue2={props.setProgressValue2}
          setProgressValue3={props.setProgressValue3}
          setProgressValue4={props.setProgressValue4}
          setMinute={props.setMinute}
          setHour={props.setHour}
          setDay={props.setDay}
          lose={props.lose}
          setLose={props.setLose}
          setWin={props.setWin}
        />
        <Subject6
          subject={subject6}
          studying={studying}
          setStudying={setStudying}
          setProgressValue1={props.setProgressValue1}
          setProgressValue2={props.setProgressValue2}
          setProgressValue3={props.setProgressValue3}
          setProgressValue4={props.setProgressValue4}
          setMinute={props.setMinute}
          setHour={props.setHour}
          setDay={props.setDay}
          lose={props.lose}
          setLose={props.setLose}
          setWin={props.setWin}
        />
        <Subject7
          subject={subject7}
          studying={studying}
          setStudying={setStudying}
          setProgressValue1={props.setProgressValue1}
          setProgressValue2={props.setProgressValue2}
          setProgressValue3={props.setProgressValue3}
          setProgressValue4={props.setProgressValue4}
          setMinute={props.setMinute}
          setHour={props.setHour}
          setDay={props.setDay}
          lose={props.lose}
          setLose={props.setLose}
          setWin={props.setWin}
        />
        <Subject8
          subject={subject8}
          studying={studying}
          setStudying={setStudying}
          setProgressValue1={props.setProgressValue1}
          setProgressValue2={props.setProgressValue2}
          setProgressValue3={props.setProgressValue3}
          setProgressValue4={props.setProgressValue4}
          setMinute={props.setMinute}
          setHour={props.setHour}
          setDay={props.setDay}
          lose={props.lose}
          setLose={props.setLose}
          setWin={props.setWin}
        />
      </div>
      <div>
        <h2>Go to</h2>
        <button
          className={"button"}
          onClick={moveDecrement.bind(null, "/home")}
        >
          Home
        </button>
        <button
          className={"button"}
          onClick={moveDecrement.bind(null, "/kafe")}
        >
          Kafe
        </button>
        <button
          className={"button"}
          onClick={moveDecrement.bind(null, "/supermarket")}
        >
          Supermarket
        </button>
      </div>
    </div>
  );
}
