import React from "react";
import { useNavigate } from "react-router-dom";

export default function GameOver(props) {
  let navigate = useNavigate();
  props.setRender(0);
  props.setBackground(10);
  return (
    <div>
      <h1>Game Over</h1>
      <button
        onClick={() => {
          navigate("/");
          window.location.reload();
          props.setLose(0);
        }}
        className={"button"}
      >
        Retry
      </button>
    </div>
  );
}
