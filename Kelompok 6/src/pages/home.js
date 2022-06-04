import React from "react";
import "/src/pages/style.css";
import { useNavigate } from "react-router-dom";
import avatar1 from "../img/1.png";
import avatarMain1 from "../img/1-Main.gif";
import avatarMakan1 from "../img/1-Makan.gif";
import avatarTidur1 from "../img/1-Tidur.gif";
import avatar2 from "../img/2.png";
import avatarMain2 from "../img/2-Main.gif";
import avatarMakan2 from "../img/2-Makan.gif";
import avatarTidur2 from "../img/2-Tidur.gif";
import avatar3 from "../img/3.png";
import avatarMain3 from "../img/3-Main.gif";
import avatarMakan3 from "../img/3-Makan.gif";
import avatarTidur3 from "../img/3-Tidur.gif";

var busy = 0;
var avatar;
var makan = 0;
var tidur = 0;
var main = 0;

export default function Home(props) {
  let navigate = useNavigate();
  props.setLocation("/home");

  if (props.lose === 1) {
    navigate("/gameover");
  }

  if (props.win === 1) {
    navigate("/win");
  }

  if (makan === 1) {
    if (props.index === 0) {
      avatar = avatarMakan1;
    } else if (props.index === 1) {
      avatar = avatarMakan2;
    } else if (props.index === 2) {
      avatar = avatarMakan3;
    }
  } else if (tidur === 1) {
    if (props.index === 0) {
      avatar = avatarTidur1;
    } else if (props.index === 1) {
      avatar = avatarTidur2;
    } else if (props.index === 2) {
      avatar = avatarTidur3;
    }
  } else if (main === 1) {
    if (props.index === 0) {
      avatar = avatarMain1;
    } else if (props.index === 1) {
      avatar = avatarMain2;
    } else if (props.index === 2) {
      avatar = avatarMain3;
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

  if (props.hour >= 18 || props.hour < 6) {
    props.setBackground(2);
  } else {
    props.setBackground(1);
  }

  function moveDecrement(destination) {
    if (busy === 0) {
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

  function Makan() {
    if (busy === 0) {
      var counter = 0;
      busy = 1;
      makan = 1;
      var interval = setInterval(() => {
        counter += 1;
        if (counter === 10) {
          busy = 0;
          makan = 0;
          clearInterval(interval);
        }
        props.setProgressValue1((oldValue) => {
          var newValue = oldValue + 3;

          if (newValue >= 100) {
            newValue = 100;
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
      }, 200);
    }
  }

  function Tidur() {
    if (busy === 0) {
      busy = 1;
      tidur = 1;
      var counter = 0;
      var interval = setInterval(() => {
        counter += 1;
        if (counter === 20) {
          busy = 0;
          tidur = 0;
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
          var newValue = oldValue + 3;

          if (newValue >= 100) {
            newValue = 100;
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
          const newValue = oldValue + 5;
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

  function Main() {
    if (busy === 0) {
      var counter = 0;
      busy = 1;
      main = 1;
      var interval = setInterval(() => {
        counter += 1;
        if (counter === 10) {
          busy = 0;
          main = 0;
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
          var newValue = oldValue + 3;

          if (newValue >= 100) {
            newValue = 100;
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
      }, 200);
    }
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
      <h1>Home</h1>
      <div>
        <button className={"button"} onClick={Makan}>
          Makan
        </button>
        <button className={"button"} onClick={Tidur}>
          Tidur
        </button>
        <button className={"button"} onClick={Main}>
          Main
        </button>
      </div>
      <div>
        <h2>Go to</h2>
        <button
          className={"button"}
          onClick={moveDecrement.bind(null, "/kampus")}
        >
          Kampus
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
