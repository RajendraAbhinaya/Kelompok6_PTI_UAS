import { useNavigate } from "react-router-dom";
import avatar1 from "../img/1.png";
import avatarMakan1 from "../img/1-Makan.gif";
import avatar2 from "../img/2.png";
import avatarMakan2 from "../img/2-Makan.gif";
import avatar3 from "../img/3.png";
import avatarMakan3 from "../img/3-Makan.gif";

var busy = 0;
var makan = 0;
var avatar;

export default function Supermarket(props) {
  let navigate = useNavigate();
  props.setLocation("/supermarket");

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
    props.setBackground(8);
  } else {
    props.setBackground(7);
  }

  function moveDecrement(destination) {
    if (busy === 0) {
      busy = 1;
      navigate(destination);
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
        if (counter === 20) {
          busy = 0;
          makan = 0;
          clearInterval(interval);
        }
        props.setProgressValue1((oldValue) => {
          var newValue = oldValue + 4;

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
      <h1>Supermarket</h1>
      <div>
        <button className={"button"} onClick={Makan}>
          Beli Makanan
        </button>
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
      </div>
    </div>
  );
}
