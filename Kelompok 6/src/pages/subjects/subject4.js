import React from "react";

var done = 0;
export default function Subject4(props) {
  function study() {
    if (props.studying === 0) {
      var counter = 0;
      props.setStudying(1);
      var interval = setInterval(() => {
        counter += 1;
        if (counter === 13) {
          done = 1;
          props.setStudying(0);
          clearInterval(interval);
        }
        props.setProgressValue1((oldValue) => {
          const newValue = oldValue - 2;

          if (newValue === 0) {
            props.setLose(1);
            clearInterval(interval);
          }

          return newValue;
        });
        props.setProgressValue2((oldValue) => {
          const newValue = oldValue - 2;

          if (newValue === 0) {
            props.setLose(1);
            clearInterval(interval);
          }

          return newValue;
        });
        props.setProgressValue3((oldValue) => {
          const newValue = oldValue - 2;

          if (newValue === 0) {
            props.setLose(1);
            clearInterval(interval);
          }

          return newValue;
        });
        props.setProgressValue4((oldValue) => {
          const newValue = oldValue + 1;

          if (newValue === 100) {
            props.setWin(1);
          }

          return newValue;
        });
        props.setMinute((oldValue) => {
          const newValue = oldValue + 15;
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
      }, 200);
    }
  }

  if (done === 0) {
    return <button onClick={study}>{props.subject}</button>;
  }
}
