import React from "react";
import "/src/pages/style.css";
import { useNavigate } from "react-router-dom";

export default function Win(props) {
  var IPS = props.progressValue4 / 25;
  IPS = IPS.toFixed(2);
  let navigate = useNavigate();
  props.setRender(0);
  props.setBackground(11);
  var evaluasi;

  if (IPS <= 0.5) {
    evaluasi = "Setiap hari bolos ya?";
  } else if (IPS <= 1) {
    evaluasi = "Sepertinya kau tidak cocok jadi mahasiswa...";
  } else if (IPS <= 1.5) {
    evaluasi = "Terlalu sibuk tidur ya?";
  } else if (IPS <= 2) {
    evaluasi = "Kamu harus belajar lebih banyak";
  } else if (IPS <= 2.5) {
    evaluasi = "Coba dikit lagi";
  } else if (IPS <= 3) {
    evaluasi = "Yang pentng lulus";
  } else if (IPS <= 3.5) {
    evaluasi = "Rajin sekali ya belajarnya";
  } else if (IPS <= 4) {
    evaluasi = "Bisa dapat beasiswa nih";
  }

  return (
    <div>
      <h1>Kamu telah menylesaikan semester 1 dengan IPS {IPS}!</h1>
      <h2>{evaluasi}</h2>
      <button
        onClick={() => {
          navigate("/");
          window.location.reload();
          props.setLose(0);
        }}
        className={"button"}
      >
        Play Again
      </button>
    </div>
  );
}
