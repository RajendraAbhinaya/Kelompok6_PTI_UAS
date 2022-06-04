import { useNavigate } from "react-router-dom";
import Card from "./card";
import contacts from "./contacts";

var done = 0;
var gain = 0;

export default function About(props) {
  let navigate = useNavigate();
  props.setRender(0);
  props.setBackground(9);

  if (gain === 0) {
    gain = 1;
    var interval = setInterval(() => {
      if (done === 1) {
        gain = 0;
        clearInterval(interval);
      }
      props.setProgressValue1((oldValue) => {
        const newValue = oldValue + 0.1;
        return newValue;
      });
      props.setProgressValue2((oldValue) => {
        const newValue = oldValue + 0.1;
        return newValue;
      });
      props.setProgressValue3((oldValue) => {
        const newValue = oldValue + 0.1;
        return newValue;
      });
    }, 400);
  }

  function back() {
    done = 1;
    props.setRender(1);
    navigate(props.location);
  }

  return (
    <div style={{ backgroundcolor: "#3399FF80" }}>
      <h1 className="heading" style={{ color: "salmon" }}>
        <b>
          <u>About Us</u>
        </b>
      </h1>
      <Card
        name={contacts[0].name}
        phone={contacts[0].phone}
        email={contacts[0].email}
        imgURL={contacts[0].imgURL}
      />
      <Card
        name={contacts[1].name}
        phone={contacts[1].phone}
        email={contacts[1].email}
        imgURL={contacts[1].imgURL}
      />
      <Card
        name={contacts[2].name}
        phone={contacts[2].phone}
        email={contacts[2].email}
        imgURL={contacts[2].imgURL}
      />
      <Card
        name={contacts[3].name}
        phone={contacts[3].phone}
        email={contacts[3].email}
        imgURL={contacts[3].imgURL}
      />
      <button className={"button"} onClick={back}>
        Back
      </button>
    </div>
  );
}
